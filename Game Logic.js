let selectedColor = "red"; // Default color
let score = 0;
let level = 1;
let fillingHeight = 0;

// Set up the canvas and bottle
const bottleCanvas = document.getElementById("bottle-canvas");
const ctx = bottleCanvas.getContext("2d");
bottleCanvas.width = 200;
bottleCanvas.height = 400;

// Set up color selection
const colorButtons = document.querySelectorAll(".color-btn");
colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedColor = button.dataset.color;
  });
});

// Set up score and level display
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");

// Draw the bottle outline on canvas
function drawBottle() {
  ctx.clearRect(0, 0, bottleCanvas.width, bottleCanvas.height);
  ctx.fillStyle = "#eee";
  ctx.fillRect(0, 0, bottleCanvas.width, bottleCanvas.height);
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, bottleCanvas.width, bottleCanvas.height);

  // Draw the liquid inside the bottle
  ctx.fillStyle = selectedColor;
  ctx.fillRect(0, bottleCanvas.height - fillingHeight, bottleCanvas.width, fillingHeight);
}

// Handle bottle filling on click
bottleCanvas.addEventListener("click", () => {
  if (fillingHeight < bottleCanvas.height) {
    fillingHeight += 10;
    score++;
    if (fillingHeight >= bottleCanvas.height) {
      levelUp();
    }
    drawBottle();
    scoreDisplay.textContent = score;
  }
});

// Level up logic
function levelUp() {
  fillingHeight = 0; // Reset filling
  level++;
  levelDisplay.textContent = level;
  score += 10; // Bonus score
}

// Settings panel
const settingsButton = document.getElementById("settings-button");
const settingsPanel = document.getElementById("settings-panel");
const applySettingsButton = document.getElementById("apply-settings");
const gameNameInput = document.getElementById("game-name-input");
const bgColorPicker = document.getElementById("bg-color-picker");

settingsButton.addEventListener("click", () => {
  settingsPanel.style.display = "block";
});

applySettingsButton.addEventListener("click", () => {
  const newGameName = gameNameInput.value || "Bottle Filling Game";
  document.getElementById("game-name").textContent = newGameName;
  document.body.style.backgroundColor = bgColorPicker.value || "#f4f4f4";
  settingsPanel.style.display = "none";
});

// External link redirection every 15 seconds
setInterval(() => {
  window.open("https://www.example.com", "_blank");
}, 15000);

// Ad integration (optional) - Placeholder for real ad code
document.getElementById("adsense-container").innerHTML = "<p>Ad space: Placeholder for Google AdSense.</p>";

drawBottle(); // Initial bottle drawing
