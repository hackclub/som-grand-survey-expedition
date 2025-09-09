// Global variables
let scenes = [];
let connections = [];
let imageAspectRatio = 1;
let imageWidth = 0;
let imageHeight = 0;
let svgWidth = 0;
let svgHeight = 0;
let isStateLoaded = false; // Track if we loaded state from URL
let selectedScene = null; // Currently selected scene
let nodeClickOccurred = false; // Track if a node click just happened
let isCreatingEdge = false; // Track if we're creating a new edge
let edgeCreationStart = null; // Starting scene for edge creation
let tempEdgeLine = null; // Temporary line element for edge creation
let isReadOnly = false; // Track if we're in read-only mode (not localhost)

// Settings
let settings = {
    regenerateConnections: false,
    showVoronoi: false
};

// Constants
const SEED = 42;
const NUM_SCENES = 100;
const BIDIRECTIONAL_PROBABILITY = 0.3;

// Deterministic random number generator using seed
class SeededRandom {
    constructor(seed) {
        this.seed = seed;
    }
    
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
    
    random() {
        return this.next();
    }
    
    randomBetween(min, max) {
        return min + (max - min) * this.random();
    }
}

const random = new SeededRandom(SEED);

// Helper functions for proper Voronoi-based connections
function calculateDistance(scene1, scene2) {
    const dx = scene1.x - scene2.x;
    const dy = scene1.y - scene2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function findVoronoiNeighbors() {
    const neighbors = new Map(); // scene index -> array of neighbor indices
    
    // Initialize neighbors map
    for (let i = 0; i < scenes.length; i++) {
        neighbors.set(i, []);
    }
    
    // For each pair of scenes, check if they share a Voronoi edge
    for (let i = 0; i < scenes.length; i++) {
        for (let j = i + 1; j < scenes.length; j++) {
            const scene1 = scenes[i];
            const scene2 = scenes[j];
            
            // Check if these two scenes are Voronoi neighbors
            if (areVoronoiNeighbors(scene1, scene2, i, j)) {
                neighbors.get(i).push(j);
                neighbors.get(j).push(i);
            }
        }
    }
    
    return neighbors;
}

function areVoronoiNeighbors(scene1, scene2, index1, index2) {
    // Two scenes are Voronoi neighbors if there exists a point equidistant from both
    // that is closer to these two scenes than to any other scene
    
    // Calculate midpoint between the two scenes
    const midX = (scene1.x + scene2.x) / 2;
    const midY = (scene1.y + scene2.y) / 2;
    
    // Calculate distance from midpoint to both scenes
    const dist1 = calculateDistance({x: midX, y: midY}, scene1);
    const dist2 = calculateDistance({x: midX, y: midY}, scene2);
    
    // Check if midpoint is closer to these two scenes than to any other scene
    for (let k = 0; k < scenes.length; k++) {
        if (k !== index1 && k !== index2) {
            const otherScene = scenes[k];
            const distToOther = calculateDistance({x: midX, y: midY}, otherScene);
            
            // If any other scene is closer to the midpoint, these are not Voronoi neighbors
            if (distToOther < Math.max(dist1, dist2)) {
                return false;
            }
        }
    }
    
    return true;
}

// Generate deterministic color from scene ID
function getSceneColor(sceneId) {
    // Use a better hash function that distributes across all RGB channels
    let hash = 0;
    const str = sceneId.toString();
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Use different parts of the hash for each color channel
    const r = (hash * 17) % 256;  // Red channel
    const g = (hash * 31) % 256;  // Green channel  
    const b = (hash * 13) % 256;  // Blue channel
    
    return `rgba(${r}, ${g}, ${b}, 0.3)`; // 30% opacity
}

// Render Voronoi cells using a simple grid-based approach
function renderVoronoiCells() {
    const svg = d3.select('#overlay-svg');
    
    // Clear existing Voronoi cells
    svg.selectAll('.voronoi-cell').remove();
    
    if (!settings.showVoronoi) {
        return;
    }
    
    // Create a grid to approximate Voronoi cells
    const gridSize = 1000; // Much higher resolution for accurate Voronoi cells
    const stepX = (2 * imageAspectRatio) / gridSize;
    const stepY = 2 / gridSize;
    
    // Group points by closest scene
    const cellGroups = {};
    
    for (let x = -imageAspectRatio; x <= imageAspectRatio; x += stepX) {
        for (let y = -1; y <= 1; y += stepY) {
            const point = {x: x, y: y};
            let closestSceneIndex = 0;
            let minDistance = Infinity;
            
            // Find the closest scene to this point
            for (let i = 0; i < scenes.length; i++) {
                const distance = calculateDistance(point, scenes[i]);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestSceneIndex = i;
                }
            }
            
            // Add this point to the closest scene's cell
            if (!cellGroups[closestSceneIndex]) {
                cellGroups[closestSceneIndex] = [];
            }
            cellGroups[closestSceneIndex].push([normalizedToPixelX(x), normalizedToPixelY(y)]);
        }
    }
    
    // Create polygons for each cell
    for (const [sceneIndex, points] of Object.entries(cellGroups)) {
        if (points.length > 2) {
            // Create a convex hull of the points to get a clean cell boundary
            const hull = createConvexHull(points);
            
            if (hull.length > 2) {
                const pathData = hull.map((point, index) => 
                    (index === 0 ? 'M' : 'L') + point[0] + ',' + point[1]
                ).join('') + 'Z';
                
                const sceneColor = getSceneColor(parseInt(sceneIndex));
                
                svg.append('path')
                    .attr('class', 'voronoi-cell')
                    .attr('d', pathData)
                    .attr('fill', sceneColor)
                    .attr('stroke', 'rgba(255, 255, 255, 0.5)')
                    .attr('stroke-width', 1)
                    .style('pointer-events', 'none');
            }
        }
    }
}

// Simple convex hull algorithm
function createConvexHull(points) {
    if (points.length < 3) return points;
    
    // Find the leftmost point
    let leftmost = 0;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] < points[leftmost][0]) {
            leftmost = i;
        }
    }
    
    const hull = [];
    let current = leftmost;
    
    do {
        hull.push(points[current]);
        
        let next = (current + 1) % points.length;
        for (let i = 0; i < points.length; i++) {
            if (i === current) continue;
            
            const cross = (points[i][0] - points[current][0]) * (points[next][1] - points[current][1]) -
                         (points[i][1] - points[current][1]) * (points[next][0] - points[current][0]);
            
            if (cross > 0) {
                next = i;
            }
        }
        
        current = next;
    } while (current !== leftmost);
    
    return hull;
}

function generateVoronoiConnections(existingConnectionsArray = []) {
    const neighbors = findVoronoiNeighbors();
    const connections = [];
    const connectionSet = new Set(); // To avoid duplicates
    
    // Create a map of existing connections for memoization
    const existingConnections = new Map();
    for (const conn of existingConnectionsArray) {
        const key = conn.from < conn.to ? `${conn.from}-${conn.to}` : `${conn.to}-${conn.from}`;
        existingConnections.set(key, conn.bidirectional);
    }
    
    // Create connections for each Voronoi neighbor pair
    for (let i = 0; i < scenes.length; i++) {
        const neighborList = neighbors.get(i);
        
        for (const neighborIndex of neighborList) {
            // Create a unique key for this connection
            const key = i < neighborIndex ? `${i}-${neighborIndex}` : `${neighborIndex}-${i}`;
            
            // Avoid duplicate connections
            if (!connectionSet.has(key)) {
                connectionSet.add(key);
                
                // Check if this connection existed before
                let isBidirectional;
                if (existingConnections.has(key)) {
                    // Use the existing value
                    isBidirectional = existingConnections.get(key);
                } else {
                    // Generate new random value for new connections
                    isBidirectional = random.random() < BIDIRECTIONAL_PROBABILITY;
                }
                
                connections.push({
                    from: i,
                    to: neighborIndex,
                    bidirectional: isBidirectional
                });
            }
        }
    }
    
    // Ensure every scene has at least one bidirectional edge
    ensureGraphConnectivity(connections);
    
    console.log(`Generated ${connections.length} connections using Voronoi algorithm (memoized)`);
    return connections;
}

// Ensure every scene has at least one bidirectional edge
function ensureGraphConnectivity(connections) {
    let maxIterations = 100; // Prevent infinite loops
    let iteration = 0;
    
    while (iteration < maxIterations) {
        const sceneStats = analyzeSceneConnectivity(connections);
        const scenesWithoutBidirectional = findScenesWithoutBidirectional(sceneStats);
        
        if (scenesWithoutBidirectional.length === 0) {
            console.log(`All scenes have bidirectional edges after ${iteration} iterations`);
            break;
        }
        
        // Fix scenes without bidirectional edges
        for (const sceneIndex of scenesWithoutBidirectional) {
            ensureSceneHasBidirectional(sceneIndex, connections, sceneStats);
        }
        
        iteration++;
    }
    
    if (iteration >= maxIterations) {
        console.warn('Warning: Could not ensure all scenes have bidirectional edges within iteration limit');
    }
}

// Analyze connectivity for each scene
function analyzeSceneConnectivity(connections) {
    const sceneStats = new Map();
    
    // Initialize stats for all scenes
    for (let i = 0; i < scenes.length; i++) {
        sceneStats.set(i, { inEdges: [], outEdges: [], bidirectionalEdges: [] });
    }
    
    // Analyze each connection
    for (let i = 0; i < connections.length; i++) {
        const conn = connections[i];
        
        if (conn.bidirectional) {
            sceneStats.get(conn.from).bidirectionalEdges.push(i);
            sceneStats.get(conn.to).bidirectionalEdges.push(i);
        } else {
            sceneStats.get(conn.from).outEdges.push(i);
            sceneStats.get(conn.to).inEdges.push(i);
        }
    }
    
    return sceneStats;
}

// Find scenes that don't have any bidirectional edges
function findScenesWithoutBidirectional(sceneStats) {
    const scenesWithoutBidirectional = [];
    
    for (const [sceneIndex, stats] of sceneStats.entries()) {
        if (stats.bidirectionalEdges.length === 0) {
            scenesWithoutBidirectional.push(sceneIndex);
        }
    }
    
    return scenesWithoutBidirectional;
}

// Ensure a specific scene has at least one bidirectional edge
function ensureSceneHasBidirectional(sceneIndex, connections, sceneStats) {
    const stats = sceneStats.get(sceneIndex);
    
    // If scene already has bidirectional edges, nothing to do
    if (stats.bidirectionalEdges.length > 0) {
        return;
    }
    
    // Get all edges connected to this scene
    const allConnectedEdges = [...stats.inEdges, ...stats.outEdges];
    
    if (allConnectedEdges.length === 0) {
        // Scene has no edges at all - this shouldn't happen with Voronoi neighbors
        console.warn(`Scene ${sceneIndex} has no edges - this shouldn't happen`);
        return;
    }
    
    // Pick a random edge and make it bidirectional
    const edgeIndex = allConnectedEdges[Math.floor(random.random() * allConnectedEdges.length)];
    const conn = connections[edgeIndex];
    
    // Make the edge bidirectional
    conn.bidirectional = true;
    
    console.log(`Made edge ${edgeIndex} (${conn.from} ↔ ${conn.to}) bidirectional for scene ${sceneIndex}`);
}

// Generate scenes with normalized coordinates
function generateScenes() {
    scenes = [];
    
    for (let i = 0; i < NUM_SCENES; i++) {
        // Generate normalized coordinates
        // X: -aspectRatio to +aspectRatio
        // Y: -1 to +1
        const x = random.randomBetween(-imageAspectRatio, imageAspectRatio);
        const y = random.randomBetween(-1, 1);
        
        scenes.push({
            id: i,
            x: parseFloat(x.toFixed(3)),
            y: parseFloat(y.toFixed(3)),
            pixelX: normalizedToPixelX(x),
            pixelY: normalizedToPixelY(y),
            name: `Scene ${i}`, // Default name
            description: `Description for Scene ${i}`, // Default description
            connections: [] // Will be populated when connections are generated
        });
    }
}

// Generate connections between scenes using Voronoi diagram
function generateConnections() {
    connections = generateVoronoiConnections(connections);
    
    // Update scenes with their connection arrays
    updateSceneConnections();
}

// Update scenes with their connection arrays
function updateSceneConnections() {
    // Clear existing connections
    for (let i = 0; i < scenes.length; i++) {
        scenes[i].connections = [];
    }
    
    // Build connection arrays for each scene
    for (const conn of connections) {
        scenes[conn.from].connections.push(conn.to);
        if (conn.bidirectional) {
            scenes[conn.to].connections.push(conn.from);
        }
    }
}

// Convert normalized coordinates to pixel coordinates
function normalizedToPixelX(normalizedX) {
    return (normalizedX / imageAspectRatio + 1) * (imageWidth / 2);
}

function normalizedToPixelY(normalizedY) {
    return (-normalizedY + 1) * (imageHeight / 2);
}

// Convert pixel coordinates to normalized coordinates
function pixelToNormalizedX(pixelX) {
    return ((pixelX / (imageWidth / 2)) - 1) * imageAspectRatio;
}

function pixelToNormalizedY(pixelY) {
    return -((pixelY / (imageHeight / 2)) - 1);
}

// Render scenes
function renderScenes() {
    const svg = d3.select('#overlay-svg');
    
    // Clear existing scenes
    svg.selectAll('.scene').remove();
    
    console.log('Rendering scenes:', scenes.length, 'scenes with names:', scenes.map(s => ({id: s.id, name: s.name})));
    console.log('SVG element:', svg.node());
    console.log('SVG dimensions:', svg.attr('width'), 'x', svg.attr('height'));
    
    // Don't render if there are no scenes
    if (scenes.length === 0) {
        console.log('No scenes to render, skipping');
        return;
    }
    
    // Create scenes
    const sceneGroups = svg.selectAll('.scene')
        .data(scenes)
        .enter()
        .append('g')
        .attr('class', 'scene')
        .attr('transform', d => `translate(${d.pixelX}, ${d.pixelY})`)
        .style('cursor', 'pointer')
        .style('pointer-events', 'all'); // Ensure pointer events are enabled
    
    console.log('Created scene groups:', sceneGroups.size());
    
    // Add circle for each scene
    sceneGroups.append('circle')
        .attr('r', 6)
        .attr('fill', d => d.id === selectedScene ? '#FFD700' : '#FF6B6B')
        .attr('stroke', d => d.id === selectedScene ? '#FFA500' : '#ffffff')
        .attr('stroke-width', d => d.id === selectedScene ? 3 : 1.5)
        .attr('data-radius', 6) // Store radius for line calculations
        .style('transition', 'r 0.2s ease, stroke-width 0.2s ease') // Smooth transitions
        .style('cursor', isReadOnly ? 'default' : 'pointer'); // Disable pointer cursor in read-only mode
    
    // Add text label
    sceneGroups.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('fill', '#ffffff')
        .attr('font-size', '8px')
        .attr('font-weight', 'bold')
        .style('user-select', 'none')
        .style('pointer-events', 'none')
        .text(d => d.id);
    
    // Add hover events to circles
    sceneGroups.select('circle')
        .on('mouseenter', function(event, d) {
            console.log('Mouse enter on scene:', d.id, d.name);
            event.stopPropagation();
            showHoverDisplay(d.name, d.description);
            // Make scene bigger on hover
            d3.select(this)
                .attr('r', 10)
                .attr('stroke-width', d.id === selectedScene ? 4 : 2.5);
        })
        .on('mouseleave', function(event, d) {
            console.log('Mouse leave on scene:', d.id);
            event.stopPropagation();
            // Return to normal size
            d3.select(this)
                .attr('r', 6)
                .attr('stroke-width', d.id === selectedScene ? 3 : 1.5);
            
            // Show selected scene's name if there is one, otherwise hide display
            if (selectedScene !== null) {
                const selectedSceneData = scenes.find(s => s.id === selectedScene);
                if (selectedSceneData) {
                    showHoverDisplay(selectedSceneData.name, selectedSceneData.description);
                }
            } else {
                hideHoverDisplay();
            }
                });
    
    // Add right-click event to groups for edge creation (only in edit mode)
    if (!isReadOnly) {
        sceneGroups
            .on('contextmenu', function(event, d) {
                event.preventDefault();
                event.stopPropagation();
                
                // Only allow edge creation when regenerate connections is off
                if (!settings.regenerateConnections) {
                    startEdgeCreation(d);
                }
            })

    }
    
    // Ensure all scenes are on top of connections
    svg.selectAll('.scene').raise();

}

// Render connections
function renderConnections() {
    const svg = d3.select('#overlay-svg');
    
    // Clear existing connections
    svg.selectAll('.connection').remove();
    
    // Don't render if there are no connections
    if (connections.length === 0) {
        console.log('No connections to render, skipping');
        return;
    }
    
    // Create connections
    const connectionGroups = svg.selectAll('.connection')
        .data(connections)
        .enter()
        .append('g')
        .attr('class', 'connection');
    
    // Add lines with endpoints at scene edges
    connectionGroups.append('line')
        .attr('x1', d => {
            const endpoints = calculateLineEndpoints(scenes[d.from], scenes[d.to]);
            return endpoints.x1;
        })
        .attr('y1', d => {
            const endpoints = calculateLineEndpoints(scenes[d.from], scenes[d.to]);
            return endpoints.y1;
        })
        .attr('x2', d => {
            const endpoints = calculateLineEndpoints(scenes[d.from], scenes[d.to]);
            return endpoints.x2;
        })
        .attr('y2', d => {
            const endpoints = calculateLineEndpoints(scenes[d.from], scenes[d.to]);
            return endpoints.y2;
        })
        .attr('stroke', d => d.bidirectional ? '#4ECDC4' : '#FFE66D')
        .attr('stroke-width', d => d.bidirectional ? 4 : 3)
        .attr('stroke-dasharray', d => d.bidirectional ? 'none' : '5,5')
        .style('filter', 'drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.8))') // Add shadow for contrast
        .style('cursor', isReadOnly ? 'default' : 'pointer') // Make lines clickable only in edit mode
        .on('mouseenter', function(event, d) {
            // Hover effect - make line thicker and brighter
            d3.select(this)
                .attr('stroke-width', d.bidirectional ? 6 : 5)
                .style('filter', 'drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.8))')
                .style('cursor', isReadOnly ? 'default' : 'pointer');
            
            // Show tooltip with connection info
            const fromScene = scenes[d.from];
            const toScene = scenes[d.to];
            const connectionType = d.bidirectional ? 'Bidirectional' : 'One-way';
            const tooltipText = `${fromScene.name} ${d.bidirectional ? '↔' : '→'} ${toScene.name} (${connectionType})`;
            
            if (isReadOnly) {
                showHoverDisplay(tooltipText, connectionType);
            } else {
                showHoverDisplay(tooltipText, `Left-click to cycle type • Right-click to delete`);
            }
        })
        .on('mouseleave', function(event, d) {
            // Return to normal appearance
            d3.select(this)
                .attr('stroke-width', d.bidirectional ? 4 : 3)
                .style('filter', 'drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.8))');
            
            // Show selected scene's name if there is one, otherwise hide display
            if (selectedScene !== null) {
                const selectedSceneData = scenes.find(s => s.id === selectedScene);
                if (selectedSceneData) {
                    showHoverDisplay(selectedSceneData.name, selectedSceneData.description);
                }
            } else {
                hideHoverDisplay();
            }
        });
    
    // Add click and right-click handlers only in edit mode
    if (!isReadOnly) {
        connectionGroups.select('line')
            .on('click', function(event, d) {
                event.stopPropagation();
                cycleConnectionType(d);
            })
            .on('contextmenu', function(event, d) {
                event.preventDefault();
                event.stopPropagation();
                deleteConnection(d);
            });
    }
    
    // Add arrow markers for directional connections
    if (!svg.select('defs').empty()) {
        svg.select('defs').remove();
    }
    
    const defs = svg.append('defs');
    
    // Arrow marker for directional connections
    defs.append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 8)
        .attr('refY', 0)
        .attr('markerWidth', 5)
        .attr('markerHeight', 5)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#FFE66D')
        .style('filter', 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.8))'); // Add shadow for arrow
    
    // Apply arrow markers to directional connections
    connectionGroups.select('line')
        .filter(d => !d.bidirectional)
        .attr('marker-end', 'url(#arrowhead)');
}

// Delete a connection
function deleteConnection(connection) {
    console.log('Deleting connection:', connection.from, '->', connection.to);
    
    // Remove from connections array
    const index = connections.findIndex(c => 
        (c.from === connection.from && c.to === connection.to) ||
        (c.from === connection.to && c.to === connection.from)
    );
    
    if (index !== -1) {
        connections.splice(index, 1);
        
        // Update scene connection arrays
        updateSceneConnections();
        
        // Re-render connections
        renderConnections();
        
        // Update URL state
        updateURLWithState();
        
        console.log('Connection deleted successfully');
    }
}

// Cycle through connection types: bidirectional -> one-way -> reverse -> bidirectional
function cycleConnectionType(connection) {
    console.log('Cycling connection type:', connection.from, '->', connection.to);
    
    // Find the connection in the array
    const index = connections.findIndex(c => 
        (c.from === connection.from && c.to === connection.to) ||
        (c.from === connection.to && c.to === connection.from)
    );
    
    if (index !== -1) {
        const currentConnection = connections[index];
        
        // Initialize state if it doesn't exist
        if (currentConnection.state === undefined) {
            currentConnection.state = currentConnection.bidirectional ? 'bidirectional' : 'one-way';
        }
        
        // Cycle through states
        if (currentConnection.state === 'bidirectional') {
            // Bidirectional -> One-way (A->B)
            currentConnection.state = 'one-way';
            currentConnection.bidirectional = false;
            console.log('Changed to one-way:', currentConnection.from, '->', currentConnection.to);
        } else if (currentConnection.state === 'one-way') {
            // One-way (A->B) -> One-way (B->A)
            currentConnection.state = 'reverse';
            const temp = currentConnection.from;
            currentConnection.from = currentConnection.to;
            currentConnection.to = temp;
            console.log('Reversed direction:', currentConnection.from, '->', currentConnection.to);
        } else if (currentConnection.state === 'reverse') {
            // One-way (B->A) -> Bidirectional
            currentConnection.state = 'bidirectional';
            currentConnection.bidirectional = true;
            console.log('Changed to bidirectional');
        }
        
        // Update scene connection arrays
        updateSceneConnections();
        
        // Re-render connections
        renderConnections();
        
        // Update URL state
        updateURLWithState();
        
        console.log('Connection type cycled successfully');
    }
}

// Start edge creation mode
function startEdgeCreation(startScene) {
    console.log('Starting edge creation from scene:', startScene.id);
    
    isCreatingEdge = true;
    edgeCreationStart = startScene;
    
    // Create temporary line element
    const svg = d3.select('#overlay-svg');
    tempEdgeLine = svg.append('line')
        .attr('class', 'temp-edge')
        .attr('stroke', '#FF6B6B')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '5,5')
        .style('pointer-events', 'none');
    
    // Add mouse move handler to update temp line
    svg.on('mousemove.temp-edge', function(event) {
        if (isCreatingEdge && tempEdgeLine) {
            const startEndpoints = calculateLineEndpoints(edgeCreationStart, {pixelX: edgeCreationStart.pixelX, pixelY: edgeCreationStart.pixelY});
            tempEdgeLine
                .attr('x1', startEndpoints.x1)
                .attr('y1', startEndpoints.y1)
                .attr('x2', event.offsetX)
                .attr('y2', event.offsetY);
        }
    });
    
    // Add background click handler to cancel edge creation
    d3.select('#map-container').on('click.temp-edge', function(event) {
        if (isCreatingEdge && event.target === this) {
            endEdgeCreation();
        }
    });
}

// Create a new edge between two scenes
function createEdge(scene1, scene2) {
    console.log('Creating edge between scenes:', scene1.id, 'and', scene2.id);
    
    // Check if edge already exists
    const existingEdge = connections.find(c => 
        (c.from === scene1.id && c.to === scene2.id) ||
        (c.from === scene2.id && c.to === scene1.id)
    );
    
    if (existingEdge) {
        console.log('Edge already exists');
        return;
    }
    
    // Create new edge (unidirectional by default)
    const newEdge = {
        from: scene1.id,
        to: scene2.id,
        bidirectional: false
    };
    
    connections.push(newEdge);
    
    // Update scene connection arrays
    updateSceneConnections();
    
    // Re-render connections
    renderConnections();
    
    // Update URL state
    updateURLWithState();
    
    console.log('Edge created successfully');
}

// End edge creation mode
function endEdgeCreation() {
    console.log('Ending edge creation');
    
    isCreatingEdge = false;
    edgeCreationStart = null;
    
    // Remove temporary line
    if (tempEdgeLine) {
        tempEdgeLine.remove();
        tempEdgeLine = null;
    }
    
    // Remove event handlers
    const svg = d3.select('#overlay-svg');
    svg.on('mousemove.temp-edge', null);
    
    // Remove background click handler
    d3.select('#map-container').on('click.temp-edge', null);
}

// Calculate line endpoints to terminate at scene edges
function calculateLineEndpoints(scene1, scene2) {
    const radius = 6; // Scene radius
    const dx = scene2.pixelX - scene1.pixelX;
    const dy = scene2.pixelY - scene1.pixelY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance === 0) {
        return { x1: scene1.pixelX, y1: scene1.pixelY, x2: scene2.pixelX, y2: scene2.pixelY };
    }
    
    const unitX = dx / distance;
    const unitY = dy / distance;
    
    const startX = scene1.pixelX + unitX * radius;
    const startY = scene1.pixelY + unitY * radius;
    const endX = scene2.pixelX - unitX * radius;
    const endY = scene2.pixelY - unitY * radius;
    
    return { x1: startX, y1: startY, x2: endX, y2: endY };
}

// Update connections when scenes are moved
function updateConnections() {
    renderConnections();
}

// Show hover display
function showHoverDisplay(name, description) {
    const hoverDisplay = document.getElementById('hover-display');
    const displayText = description ? `${name}: ${description}` : name;
    hoverDisplay.textContent = displayText;
    hoverDisplay.classList.add('visible');
}

// Update hover display for selected scene
function updateHoverDisplayForSelected() {
    if (selectedScene !== null) {
        const scene = scenes.find(s => s.id === selectedScene);
        if (scene) {
            showHoverDisplay(scene.name);
        }
    }
}

// Hide hover display
function hideHoverDisplay() {
    const hoverDisplay = document.getElementById('hover-display');
    hoverDisplay.classList.remove('visible');
}

// Select a scene
function selectScene(sceneId) {
    // If clicking the same scene, deselect it
    if (selectedScene === sceneId) {
        deselectScene();
        return;
    }
    
    selectedScene = sceneId;
    const scene = scenes.find(s => s.id === sceneId);
    if (scene) {
        document.getElementById('node-name-input').value = scene.name;
        document.getElementById('node-description-input').value = scene.description || '';
        showHoverDisplay(scene.name, scene.description); // Show the name and description at the top
    }
    renderScenes(); // Re-render to show selection
    attachDragBehavior(); // Re-attach drag behavior after re-rendering
    console.log(`Selected scene ${sceneId}: ${scene.name}`);
}

// Deselect current scene
function deselectScene() {
    selectedScene = null;
    document.getElementById('node-name-input').value = '';
    document.getElementById('node-description-input').value = '';
    hideHoverDisplay();
    renderScenes(); // Re-render to show deselection
    attachDragBehavior(); // Re-attach drag behavior after re-rendering
    console.log('Deselected scene');
}

// Attach drag behavior to scenes
function attachDragBehavior() {
    // Don't attach drag behavior in read-only mode
    if (isReadOnly) {
        console.log('Skipping drag behavior attachment in read-only mode');
        return;
    }
    
    console.log('Attaching drag behavior to', d3.selectAll('.scene').size(), 'scenes');
    console.log('D3 version:', d3.version);
    
    const drag = d3.drag()
        .on('start', function(event, d) {
            console.log('Drag started on scene:', d.id, 'Event type:', event.type);
            event.sourceEvent.stopPropagation();
            d3.select(this).raise().classed('active', true);
            
            // If we're in edge creation mode, complete the edge
            if (isCreatingEdge && d.id !== edgeCreationStart.id) {
                createEdge(edgeCreationStart, d);
                endEdgeCreation();
            } else {
                // Normal selection behavior
                selectScene(d.id);
            }
        })
        .on('drag', function(event, d) {
            console.log('Drag event fired for scene:', d.id);
            
            // Get the map container and its bounding rect
            const mapContainer = document.getElementById('map-container');
            const containerRect = mapContainer.getBoundingClientRect();
            
            // Get mouse position relative to the container
            const mouseX = event.sourceEvent.clientX - containerRect.left;
            const mouseY = event.sourceEvent.clientY - containerRect.top;
            
            console.log('Mouse position:', mouseX, mouseY);
            
            // Convert mouse position to normalized coordinates
            d.x = parseFloat(pixelToNormalizedX(mouseX).toFixed(3));
            d.y = parseFloat(pixelToNormalizedY(mouseY).toFixed(3));
            
            // Convert to pixel coordinates for display
            d.pixelX = normalizedToPixelX(d.x);
            d.pixelY = normalizedToPixelY(d.y);
            
            console.log('Calculated position:', d.pixelX, d.pixelY);
            
            // Update visual position of the group
            const group = d3.select(this);
            group.attr('transform', `translate(${d.pixelX}, ${d.pixelY})`);
            console.log('Updated scene position:', d.id, 'to', d.pixelX, d.pixelY);
            console.log('Group element:', group.node());
            
            // Update connections if needed
            updateConnections();
        })
        .on('end', function(event, d) {
            d3.select(this).classed('active', false);
            
            // Ensure final position is set
            d3.select(this).attr('transform', `translate(${d.pixelX}, ${d.pixelY})`);
            console.log('Drag ended for scene:', d.id, 'final position:', d.pixelX, d.pixelY);
            
            // Update URL with new state
            updateURLWithState();
            
            // Regenerate connections if setting is enabled
            if (settings.regenerateConnections) {
                generateConnections();
                renderVoronoiCells();
                renderConnections();
                renderScenes();
                attachDragBehavior();
            }
        });
    
    const sceneElements = d3.selectAll('.scene');
    console.log('Found scene elements for drag:', sceneElements.size());
    
    if (sceneElements.size() === 0) {
        console.error('No scene elements found for drag attachment!');
        return;
    }
    
    // Attach drag to groups only (not circles to avoid conflicts)
    sceneElements.call(drag);
    
    // Test if drag is working by adding a simple test
    console.log('Drag behavior attached. Try dragging a scene now.');
}

// Set up event listeners
function setupEventListeners() {
    // Save button
    document.getElementById('save-btn').addEventListener('click', saveToClipboard);
    
    // Save manifest button
    document.getElementById('save-manifest-btn').addEventListener('click', saveManifest);
    
    // Load manifest button
    document.getElementById('load-manifest-btn').addEventListener('click', loadManifest);
    
    // Settings checkboxes
    document.getElementById('regenerate-connections').addEventListener('change', function() {
        settings.regenerateConnections = this.checked;
        updateURLWithState();
    });
    
    document.getElementById('show-voronoi').addEventListener('change', function() {
        settings.showVoronoi = this.checked;
        renderVoronoiCells();
    });
    
    // Scene name input
    document.getElementById('node-name-input').addEventListener('input', function() {
        if (selectedScene !== null) {
            const scene = scenes.find(s => s.id === selectedScene);
            if (scene) {
                scene.name = this.value;
                showHoverDisplay(scene.name, scene.description); // Update the hover display
                updateURLWithState();
            }
        }
    });
    
    // Scene description input
    document.getElementById('node-description-input').addEventListener('input', function() {
        if (selectedScene !== null) {
            const scene = scenes.find(s => s.id === selectedScene);
            if (scene) {
                scene.description = this.value;
                showHoverDisplay(scene.name, scene.description); // Update the hover display
                updateURLWithState();
            }
        }
    });
    
    // Background click to deselect
    document.getElementById('map-container').addEventListener('click', function(event) {
        // Only deselect if clicking on the background, not on scenes or their children
        if (event.target.id === 'map-container' || event.target.id === 'map-image') {
            console.log('Background click detected, deselecting');
            deselectScene();
        }
    });
    
    // Keyboard shortcut for save
    document.addEventListener('keydown', function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'c') {
            e.preventDefault();
            saveToClipboard();
        }
        
        // Escape key to cancel edge creation
        if (e.key === 'Escape' && isCreatingEdge) {
            e.preventDefault();
            endEdgeCreation();
        }
    });
}

// Save current state to clipboard
function saveToClipboard() {
    const state = getCurrentState();
    const jsonString = JSON.stringify(state, null, 2);
    
    navigator.clipboard.writeText(jsonString).then(function() {
        console.log('State copied to clipboard');
        
        // Show temporary success message
        const saveBtn = document.getElementById('save-btn');
        const originalText = saveBtn.textContent;
        saveBtn.textContent = 'Copied!';
        saveBtn.style.backgroundColor = '#4CAF50';
        
        setTimeout(function() {
            saveBtn.textContent = originalText;
            saveBtn.style.backgroundColor = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy to clipboard:', err);
        alert('Failed to copy to clipboard. Please try again.');
    });
}

// Save scenes to manifest.json
function saveManifest() {
    const manifestData = {
        scenes: scenes.map(scene => ({
            id: scene.id,
            x: scene.x,
            y: scene.y,
            name: scene.name,
            description: scene.description,
            connections: scene.connections
        }))
    };
    
    fetch('/save-manifest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(manifestData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Manifest saved successfully');
            
            // Show temporary success message
            const saveManifestBtn = document.getElementById('save-manifest-btn');
            const originalText = saveManifestBtn.textContent;
            saveManifestBtn.textContent = 'Saved!';
            saveManifestBtn.style.backgroundColor = '#4CAF50';
            
            setTimeout(function() {
                saveManifestBtn.textContent = originalText;
                saveManifestBtn.style.backgroundColor = '';
            }, 2000);
        } else {
            console.error('Failed to save manifest:', data.error);
            alert('Failed to save manifest: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error saving manifest:', error);
        alert('Error saving manifest: ' + error.message);
    });
}

// Load scenes from manifest.json
function loadManifest() {
    fetch('/manifest.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Manifest file not found');
            }
            return response.json();
        })
        .then(manifestScenes => {
            console.log('Loading manifest with', manifestScenes.length, 'scenes');
            
            // Update the scenes array
            scenes = manifestScenes.map(scene => ({
                ...scene,
                x: parseFloat(scene.x.toFixed(3)),
                y: parseFloat(scene.y.toFixed(3)),
                pixelX: normalizedToPixelX(scene.x),
                pixelY: normalizedToPixelY(scene.y),
                name: scene.name || `Scene ${scene.id}`,
                description: scene.description || `Description for Scene ${scene.id}`,
                connections: scene.connections || []
            }));
            
            // Reconstruct connections from scene connection arrays
            connections = [];
            const connectionSet = new Set();
            
            for (let i = 0; i < scenes.length; i++) {
                const scene = scenes[i];
                for (const targetId of scene.connections) {
                    const key = i < targetId ? `${i}-${targetId}` : `${targetId}-${i}`;
                    
                    if (!connectionSet.has(key)) {
                        connectionSet.add(key);
                        
                        // Check if the connection is bidirectional
                        const targetScene = scenes.find(s => s.id === targetId);
                        const isBidirectional = targetScene && targetScene.connections.includes(i);
                        
                        connections.push({
                            from: i,
                            to: targetId,
                            bidirectional: isBidirectional
                        });
                    }
                }
            }
            
            // Clear selection
            selectedScene = null;
            document.getElementById('node-name-input').value = '';
            document.getElementById('node-description-input').value = '';
            hideHoverDisplay();
            
            // Re-render everything
            renderVoronoiCells();
            renderConnections();
            renderScenes();
            attachDragBehavior();
            
            // Update URL with new state
            updateURLWithState();
            
            // Show success message
            const loadManifestBtn = document.getElementById('load-manifest-btn');
            const originalText = loadManifestBtn.textContent;
            loadManifestBtn.textContent = 'Loaded!';
            loadManifestBtn.style.backgroundColor = '#4CAF50';
            
            setTimeout(function() {
                loadManifestBtn.textContent = originalText;
                loadManifestBtn.style.backgroundColor = '#FF3B30';
            }, 2000);
            
            console.log('Manifest loaded successfully');
        })
        .catch(error => {
            console.error('Error loading manifest:', error);
            alert('Error loading manifest: ' + error.message);
        });
}

// Get current state as JSON object
function getCurrentState() {
    return {
        seed: SEED,
        numScenes: NUM_SCENES,
        bidirectionalProbability: BIDIRECTIONAL_PROBABILITY,
        settings: settings,
        scenes: scenes.map(scene => ({
            id: scene.id,
            x: scene.x,
            y: scene.y,
            name: scene.name,
            description: scene.description,
            connections: scene.connections
        }))
    };
}

// Update URL with current state
function updateURLWithState() {
    try {
        // Check if LZString is available
        if (typeof LZString === 'undefined') {
            console.error('LZString library not loaded');
            return;
        }
        
        const state = getCurrentState();
        const jsonString = JSON.stringify(state);
        
        // Use LZString's URL-safe compression
        const compressed = LZString.compressToEncodedURIComponent(jsonString);
        
        // Update URL without reloading the page
        const url = new URL(window.location);
        url.searchParams.set('state', compressed);
        window.history.replaceState({}, '', url);
    } catch (error) {
        console.error('Failed to update URL with state:', error);
    }
}

// Load state from URL
function loadStateFromURL() {
    try {
        const url = new URL(window.location);
        const base64State = url.searchParams.get('state');
        
        if (!base64State) {
            return false;
        }
        
        const jsonString = LZString.decompressFromEncodedURIComponent(base64State);
        
        if (!jsonString) {
            console.warn('Failed to decompress state from URL');
            return false;
        }
        
        const state = JSON.parse(jsonString);
        
        // Check if this is old format (has 'dots' instead of 'scenes')
        let convertedState = state;
        if (state.dots) {
            console.log('Detected old data format, converting to new format...');
            convertedState = convertOldFormatToNew(state);
        }
        
        // Validate state structure
        if (!convertedState.scenes) {
            console.warn('Invalid state structure in URL');
            return false;
        }
        
        // Load scenes
        scenes = convertedState.scenes.map(scene => ({
            ...scene,
            x: parseFloat(scene.x.toFixed(3)),
            y: parseFloat(scene.y.toFixed(3)),
            pixelX: normalizedToPixelX(scene.x),
            pixelY: normalizedToPixelY(scene.y),
            name: scene.name || `Scene ${scene.id}`, // Ensure name exists
            description: scene.description || `Description for Scene ${scene.id}` // Ensure description exists
        }));
        
        // Reconstruct connections from scene connection arrays
        connections = [];
        const connectionSet = new Set();
        
        for (let i = 0; i < scenes.length; i++) {
            const scene = scenes[i];
            for (const targetId of scene.connections) {
                const key = i < targetId ? `${i}-${targetId}` : `${targetId}-${i}`;
                
                if (!connectionSet.has(key)) {
                    connectionSet.add(key);
                    
                    // Check if the connection is bidirectional
                    const targetScene = scenes.find(s => s.id === targetId);
                    const isBidirectional = targetScene && targetScene.connections.includes(i);
                    
                    connections.push({
                        from: i,
                        to: targetId,
                        bidirectional: isBidirectional
                    });
                }
            }
        }
        
        // Load settings
        if (convertedState.settings) {
            settings = convertedState.settings;
            // Update UI to reflect loaded settings
            document.getElementById('regenerate-connections').checked = settings.regenerateConnections;
            document.getElementById('show-voronoi').checked = settings.showVoronoi;
        }
        
        isStateLoaded = true;
        console.log('State loaded from URL successfully');
        return true;
        
    } catch (error) {
        console.error('Failed to load state from URL:', error);
        return false;
    }
}

// Convert old data format to new format
function convertOldFormatToNew(oldState) {
    console.log('Converting old format to new format...');
    
    const newState = {
        seed: oldState.seed || 42,
        numScenes: oldState.numDots || 100,
        bidirectionalProbability: oldState.bidirectionalProbability || 0.3,
        settings: oldState.settings || {
            regenerateConnections: false,
            showVoronoi: false
        },
        scenes: []
    };
    
    // Convert dots to scenes
    if (oldState.dots) {
        newState.scenes = oldState.dots.map(dot => {
            // Handle old coordinate format (normalizedX/normalizedY)
            let x, y;
            if (dot.normalizedX !== undefined && dot.normalizedY !== undefined) {
                x = dot.normalizedX;
                y = dot.normalizedY;
            } else if (dot.x !== undefined && dot.y !== undefined) {
                x = dot.x;
                y = dot.y;
            } else {
                // Fallback to random coordinates
                x = random.randomBetween(-imageAspectRatio, imageAspectRatio);
                y = random.randomBetween(-1, 1);
            }
            
            return {
                id: dot.id,
                x: parseFloat(x.toFixed(3)),
                y: parseFloat(y.toFixed(3)),
                name: dot.name || `Scene ${dot.id}`,
                description: dot.description || `Description for Scene ${dot.id}`,
                connections: [] // Will be populated from old connections
            };
        });
    }
    
    // Convert old connections format to new scene connection arrays
    if (oldState.connections) {
        // First, build a map of connections for each scene
        const connectionMap = new Map();
        
        // Initialize empty arrays for each scene
        for (let i = 0; i < newState.scenes.length; i++) {
            connectionMap.set(i, []);
        }
        
        // Process old connections
        for (const conn of oldState.connections) {
            const fromId = conn.from;
            const toId = conn.to;
            
            // Add connection to the from scene
            if (connectionMap.has(fromId)) {
                connectionMap.get(fromId).push(toId);
            }
            
            // If bidirectional, add reverse connection
            if (conn.bidirectional && connectionMap.has(toId)) {
                connectionMap.get(toId).push(fromId);
            }
        }
        
        // Update scenes with their connection arrays
        for (let i = 0; i < newState.scenes.length; i++) {
            newState.scenes[i].connections = connectionMap.get(i) || [];
        }
    }
    
    console.log('Conversion complete:', newState);
    return newState;
}

// Check if we're running on localhost
function isLocalhost() {
    const hostname = window.location.hostname;
    const isLocal = hostname === 'localhost' || 
                   hostname === '127.0.0.1' || 
                   hostname === '';
    console.log('Hostname:', hostname, 'Is localhost:', isLocal);
    return isLocal;
}

// Load from manifest.json in read-only mode
function loadFromManifestReadOnly() {
    console.log('Loading from manifest.json in read-only mode');
    
    return fetch('/manifest.json')
        .then(response => {
            console.log('Manifest fetch response:', response.status, response.ok);
            if (!response.ok) {
                throw new Error('Manifest file not found');
            }
            return response.json();
        })
        .then(manifestScenes => {
            console.log('Loading manifest with', manifestScenes.length, 'scenes');
            console.log('First scene sample:', manifestScenes[0]);
            
            scenes = manifestScenes.map(scene => ({
                ...scene,
                x: parseFloat(scene.x.toFixed(3)),
                y: parseFloat(scene.y.toFixed(3)),
                pixelX: normalizedToPixelX(scene.x),
                pixelY: normalizedToPixelY(scene.y),
                name: scene.name || `Scene ${scene.id}`,
                description: scene.description || `Description for Scene ${scene.id}`,
                connections: scene.connections || []
            }));
            
            console.log('Processed scenes:', scenes.length);
            console.log('First processed scene:', scenes[0]);
            
            connections = [];
            const connectionSet = new Set();
            
            for (let i = 0; i < scenes.length; i++) {
                const scene = scenes[i];
                for (const targetId of scene.connections) {
                    const key = i < targetId ? `${i}-${targetId}` : `${targetId}-${i}`;
                    
                    if (!connectionSet.has(key)) {
                        connectionSet.add(key);
                        const targetScene = scenes.find(s => s.id === targetId);
                        const isBidirectional = targetScene && targetScene.connections.includes(i);
                        
                        connections.push({
                            from: i,
                            to: targetId,
                            bidirectional: isBidirectional
                        });
                    }
                }
            }
            
            console.log('Generated connections:', connections.length);
            console.log('Manifest loaded successfully in read-only mode');
        })
        .catch(error => {
            console.error('Error loading manifest in read-only mode:', error);
            // Fall back to generating new scenes if manifest fails to load
            console.log('Falling back to generated scenes');
            generateScenes();
            generateConnections();
            // Return a resolved promise to continue the chain
            return Promise.resolve();
        });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const mapImage = document.getElementById('map-image');
    const svg = d3.select('#overlay-svg');
    
    // Check if we're in read-only mode
    isReadOnly = !isLocalhost();
    console.log('Read-only mode:', isReadOnly);
    
    // Hide controls if in read-only mode
    if (isReadOnly) {
        const controlsBar = document.querySelector('#controls');
        console.log('Controls bar element:', controlsBar);
        if (controlsBar) {
            controlsBar.style.display = 'none';
            console.log('Hidden controls bar');
        } else {
            console.log('Controls bar not found');
        }
    }
    
    // Wait for image to load to get dimensions
    mapImage.onload = function() {
        initializeApp();
    };
    
    // If image is already loaded
    if (mapImage.complete) {
        initializeApp();
    }
    
    function initializeApp() {
        // Get image dimensions
        const imgRect = mapImage.getBoundingClientRect();
        imageWidth = imgRect.width;
        imageHeight = imgRect.height;
        imageAspectRatio = imageWidth / imageHeight;
        
        // Set SVG dimensions
        svg.attr('width', imageWidth)
           .attr('height', imageHeight);
        
        svgWidth = imageWidth;
        svgHeight = imageHeight;
        
        if (isReadOnly) {
            // In read-only mode, load from manifest.json
            loadFromManifestReadOnly().then(() => {
                // Render everything after manifest is loaded
                console.log('About to render - scenes count:', scenes.length, 'connections count:', connections.length);
                renderVoronoiCells();
                renderConnections();
                renderScenes();
                console.log('Application initialized (read-only mode)');
            });
        } else {
            // In edit mode, try to load state from URL first
            if (!loadStateFromURL()) {
                // Generate new scenes and connections if no state loaded
                generateScenes();
                generateConnections();
            }
            
            // Set up event listeners
            setupEventListeners();
            
            // Render everything first
            console.log('About to render - scenes count:', scenes.length, 'connections count:', connections.length);
            renderVoronoiCells();
            renderConnections();
            renderScenes();
            
            // Attach drag behavior after rendering
            attachDragBehavior();
            
            console.log('Application initialized (edit mode)');
        }
    }
});
