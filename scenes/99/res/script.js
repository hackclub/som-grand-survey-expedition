const canvasBackgroundSrc = 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/c8e9d8db7fd3cb3657bc7686a499f79ca2edcd23_image.png';
const castleImageSrc = 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/94151e3a53bfc76ce2a2937766e64798c1f932d9_image.png';
const meepleImageSrc = 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/0a2fc26201bcb2b02ef8aff23db1ed612b02b564_meeple_blue.png'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 3;

// Overlay canvas so we don't overwrite the background with the path and castles
const overlayCanvas = document.createElement('canvas');
const overlayCtx = overlayCanvas.getContext('2d');
overlayCanvas.width = canvas.width;
overlayCanvas.height = canvas.height;
overlayCanvas.style.position = 'absolute';
overlayCanvas.style.left = '0';
overlayCanvas.style.top = '100vh';
document.body.appendChild(overlayCanvas);

// Clear the top section background
function makeBackgroundImage() {
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(canvas.width / 4, 0, 3 * canvas.width / 4, 120, canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();

    const img = new Image();
    img.src = canvasBackgroundSrc;
    img.onload = () => {
        ctx.fillStyle = ctx.createPattern(img, 'repeat');
        ctx.fill();
    }

    img.onerror = () => {
        console.error('Failed to load image at ' + img.src);
        ctx.fillStyle = '#d3d3d3'; // Fallback color
        ctx.fill();
    }
}

// Function to draw a smooth, dotted path
function drawDottedPath(points) {
    overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    overlayCtx.lineWidth = 10;
    overlayCtx.strokeStyle = '#ab895f';
    overlayCtx.setLineDash([40, 80]); // Dotted line pattern

    overlayCtx.beginPath();
    overlayCtx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length - 2; i++) {
        const cpX = (points[i].x + points[i + 1].x) / 2;
        const cpY = (points[i].y + points[i + 1].y) / 2;
        overlayCtx.quadraticCurveTo(points[i].x, points[i].y, cpX, cpY);
    }

    // For the last two points
    overlayCtx.quadraticCurveTo(
        points[points.length - 2].x,
        points[points.length - 2].y,
        points[points.length - 1].x,
        points[points.length - 1].y
    );

    overlayCtx.stroke();
}

function addCastleImage(x, y, text) {
    const img = new Image();
    img.src = castleImageSrc;

    img.onload = () => {
        let imgWidth = img.width / 2; // Scale down the image
        let imgHeight = img.height / 2;
        if (imgWidth > overlayCanvas.width / 3) {
            imgWidth = overlayCanvas.width / 3; // Limit width to a third of canvas width
            imgHeight = (img.height / img.width) * imgWidth; // Maintain aspect ratio
        }
        const imgX = x - imgWidth / 2; // Center the image at (x, y)
        const imgY = y - imgHeight / 2;

        overlayCtx.drawImage(img, imgX, imgY, imgWidth, imgHeight);

        if (text) {
            overlayCtx.fillStyle = 'black';
            overlayCtx.textAlign = 'center';
            text = text.split('\n');
            const textLength = Math.max(...text.map(line => line.length));
            overlayCtx.font = (imgWidth * 2 / textLength) + 'px IM Fell English';
            for (let i = 0; i < text.length; i++) {
                overlayCtx.fillText(text[i], x, imgY + imgHeight + 50 + i * (imgWidth * 2 / textLength));
            }
        }
    }

    img.onerror = () => { console.error('Failed to load image at ' + img.src); }
}

let meeple;
function addMeeple(x, y) {
    meeple = document.createElement('div');
    meeple.id = 'meeple';
    meeple.style.backgroundImage = `url(${meepleImageSrc})`;
    meeple.style.left = (x - 25) + 'px';
    meeple.style.top = (y - 25 + window.innerHeight) + 'px';
    document.body.appendChild(meeple);
}

// Move meeple smoothly along the path as the user scrolls
window.addEventListener('scroll', () => {
    if (!meeple) return; // Ensure meeple is loaded
    const scrollFraction = Math.max((window.scrollY - window.innerHeight / 2), 0) * points.length / (document.body.scrollHeight - window.innerHeight);
    const pointIndex = Math.min(Math.floor(scrollFraction), points.length - 1);
    const nextPointIndex = Math.min(pointIndex + 1, points.length - 1);
    const t = scrollFraction - pointIndex;
    const x = (1 - t) * points[pointIndex].x + t * points[nextPointIndex].x;
    const y = (1 - t) * points[pointIndex].y + t * points[nextPointIndex].y;

    // Move the meeple to its new position
    meeple.style.left = (x - 25) + 'px';
    meeple.style.top = (y - 25 + window.innerHeight) + 'px';
});

function addBottomSection() {
    const section = document.createElement('div');
    section.className = 'bottom-section';

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'bottom-edge');
    svg.setAttribute('viewBox', '0 0 1440 120');
    svg.setAttribute('preserveAspectRatio', 'none');

    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M0,96 C180,150 360,88 540,110 C720,140 900,88 1080,105 C1260,130 1380,92 1440,96 L1440,0 L0,0 Z');

    svg.appendChild(path);
    section.appendChild(svg);

    const content = document.createElement('p');
    content.textContent = "Are you ready to take up the challenge?";
    section.appendChild(content);

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = "RSVP Now";
    button.addEventListener('click', () => {
        window.location.assign('https://example.com/join');
    });
    section.appendChild(button);

    // Add yubico logo
    const yubico_logo = document.createElement('img');
    yubico_logo.src = 'https://resources.yubico.com/53ZDUYE6/at/q2tsde-8kenzk-4cg1pz/Yubico_Logo_Big_PNG.png?auto=webp&format=png&width=100&height=28';
    yubico_logo.height = 28;
    yubico_logo.width = 100;
    yubico_logo.alt = 'Yubico';
    const yubico_logo_wrapper = document.createElement('a');
    yubico_logo_wrapper.id = 'yubico-logo';
    yubico_logo_wrapper.href = 'https://www.yubico.com';
    yubico_logo_wrapper.appendChild(yubico_logo);
    section.appendChild(yubico_logo_wrapper);

    document.body.appendChild(section);
}

// Points from top center to bottom center
const points = [
    { x: canvas.width / 3, y: canvas.height * 0.1 },
    { x: 3 * canvas.width / 4, y: canvas.height * 0.3 },
    { x: canvas.width / 3, y: canvas.height * 0.5 },
    { x: canvas.width / 4, y: canvas.height * 0.7 },
    { x: canvas.width / 2, y: canvas.height * 0.9 }
];

// Text for the castles
const texts = [
    "ship every week",
    "vote on the\nbest projects",
    "get prizes",
    "ship all 12 weeks",
    "get a framework"
]

// Initial drawing
makeBackgroundImage();

// Draw the dotted path
drawDottedPath(points);

for (let i = 0; i < points.length; i++) {
    addCastleImage(points[i].x, points[i].y, texts[i]);
}

addMeeple(points[0].x, points[0].y);

addBottomSection();