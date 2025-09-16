const DUMMY_TREES = [
  {
    id: 1,
    species: "Oak",
    age: 120,
    height: 32,
    note: "",
    isFake: false,
  },
  {
    id: 2,
    species: "Binary Tree",
    age: 0,
    height: 1,
    note: " 1024 nodes, balanced",
    isFake: true,
  },
  {
    id: 3,
    species: "Pine",
    age: 35,
    height: 85,
    note: "",
    isFake: false,
  },
  {
    id: 4,
    species: "CIA Willow",
    age: "NaN",
    height: 12,
    note: "Why is it hollow on the inside?",
    isFake: true,
  },
  {
    id: 5,
    species: "Birch",
    age: 10,
    height: 8,
    note: "",
    isFake: false,
  },
];

const ui = {
  round: document.getElementById("round"),
  score: document.getElementById("scoreVal"),
  treeName: document.getElementById("treeName"),
  attributes: document.getElementById("attributes"),
  feedback: document.getElementById("feedback"),
  card: document.getElementById("treeCard"),
  approveLabel: document.querySelector(".approve-label"),
  denyLabel: document.querySelector(".deny-label"),
  game: document.getElementById("game"),
};

const gameState = {
  order: [],
  current: 0,
  score: 0,
  locked: false,
  isDragging: false,
  startX: 0,
  currentX: 0,
};

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const formatAge = (age) => {
  const n = Number(age);
  return !Number.isFinite(n) || Number.isNaN(n) ? "unknown" : `${n} years`;
};

const renderTree = () => {
  const tree = gameState.order[gameState.current];
  ui.round.textContent = `${gameState.current + 1}`;
  ui.treeName.textContent = `${tree.species} — Tree #${tree.id}`;

  const attrs = [
    { k: "Species", v: tree.species },
    { k: "Age", v: formatAge(tree.age) },
    { k: "Height", v: `${tree.height} ft` },
  ];
  if (String(tree.note || "").trim()) {
    attrs.push({ k: "Note", v: String(tree.note).trim() });
  }

  ui.attributes.innerHTML = attrs
    .map(({ k, v }) => `<li>${k}: ${v}</li>`)
    .join("");

  ui.feedback.textContent = "";
  ui.card.style.transform = "translateX(0) rotate(0)";
  ui.card.classList.remove("approve", "deny");
  ui.approveLabel.style.opacity = "0";
  ui.denyLabel.style.opacity = "0";
};

const endGame = () => {
  ui.game.innerHTML = `
    <div class="card-content">
      <h2>Game Over!</h2>
      <p>Your final score: ${gameState.score}/5</p>
      <p>Thanks for helping catalog the forest!</p>
    </div>
  `;
  setTimeout(
    () =>
      alert(
        `And we're done! Your final score: ${gameState.score}/5. Thank you for helping us out!`
      ),
    50
  );
};

const nextOrEnd = () => {
  gameState.current++;
  if (gameState.current >= gameState.order.length) {
    setTimeout(endGame, 500);
  } else {
    setTimeout(() => {
      gameState.locked = false;
      ui.feedback.classList.remove("show", "correct", "incorrect");
      renderTree();
    }, 500);
  }
};

const giveFeedback = (correct, tree) => {
  const message = `this ${tree.isFake ? "was fake" : "is real"}`;
  ui.feedback.textContent = correct
    ? `Correct — ${message}.`
    : `Incorrect — ${message}.`;
  ui.feedback.classList.add(correct ? "correct" : "incorrect", "show");
};

const handleChoice = (isApprove) => {
  if (gameState.locked) return;
  gameState.locked = true;

  const tree = gameState.order[gameState.current];
  const correct = tree.isFake === !isApprove;

  if (correct) gameState.score++;
  ui.score.textContent = `${gameState.score}`;

  giveFeedback(correct, tree);
  ui.card.classList.add(isApprove ? "approve" : "deny");

  nextOrEnd();
};

const updatePosition = () => {
  if (!gameState.isDragging) return;
  const { currentX } = gameState;
  const rotation = currentX * 0.1;
  ui.card.style.transform = `translateX(${currentX}px) rotate(${rotation}deg)`;

  const opacity = Math.min(Math.abs(currentX) / 100, 1);
  if (currentX > 0) {
    ui.approveLabel.style.opacity = opacity;
    ui.denyLabel.style.opacity = 0;
  } else {
    ui.denyLabel.style.opacity = opacity;
    ui.approveLabel.style.opacity = 0;
  }
  requestAnimationFrame(updatePosition);
};

const onPointerDown = (e) => {
  if (gameState.locked) return;
  gameState.isDragging = true;
  gameState.startX = e.pageX;
  ui.card.classList.add("dragging");
  requestAnimationFrame(updatePosition);
};

const onPointerMove = (e) => {
  if (!gameState.isDragging || gameState.locked) return;
  gameState.currentX = e.pageX - gameState.startX;
};

const onPointerUp = () => {
  if (!gameState.isDragging || gameState.locked) return;
  gameState.isDragging = false;
  ui.card.classList.remove("dragging");

  const threshold = 100;
  if (gameState.currentX > threshold) {
    handleChoice(true);
  } else if (gameState.currentX < -threshold) {
    handleChoice(false);
  } else {
    ui.card.style.transform = "translateX(0) rotate(0)";
    ui.approveLabel.style.opacity = 0;
    ui.denyLabel.style.opacity = 0;
  }
  gameState.currentX = 0;
};

const init = () => {
  ui.card.addEventListener("pointerdown", onPointerDown);
  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);

  gameState.order = shuffle(DUMMY_TREES);
  ui.score.textContent = `${gameState.score}`;
  renderTree();
};

init();
