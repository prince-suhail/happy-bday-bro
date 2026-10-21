const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const confettiLayer = document.getElementById("confettiLayer");

document.getElementById("year").textContent = new Date().getFullYear();

const surprises = [
  "🎉 Your official birthday mission: eat cake, accept compliments, and pretend you didn't see this page coming!",
  "🧠 PhD rule #1: If the research gets difficult, take a break. If the cake is available, take two slices.",
  "🏆 Future Dr. Haamidh loading… Please do not switch off the brain during installation!",
  "📚 May your citations be correct, your Wi-Fi be strong, and your deadlines fear YOU. Happy birthday!"
];

let surpriseIndex = 0;

function launchConfetti() {
  const colors = ["#ff4f9a", "#ffd166", "#6c35d4", "#48c9d8", "#ff8b5e", "#83e6b2"];
  const amount = window.matchMedia("(max-width: 600px)").matches ? 65 : 110;

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--duration", `${2.2 + Math.random() * 2.3}s`);
    piece.style.setProperty("--rotation", `${Math.random() * 180}deg`);
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    if (Math.random() > 0.55) piece.style.borderRadius = "50%";
    confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5200);
  }
}

surpriseBtn.addEventListener("click", () => {
  surpriseMessage.textContent = surprises[surpriseIndex % surprises.length];
  surpriseIndex++;
  launchConfetti();
});
