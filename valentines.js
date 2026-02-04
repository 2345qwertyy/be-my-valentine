const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const img = document.getElementById("valentineImg");

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES button celebration
yesBtn.addEventListener("click", () => {
  title.textContent = "Yay!! 💕";
  subtitle.textContent = "You’re officially my Valentine 🥰";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  img.style.display = "block";
  img.classList.add("fade-in");

  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

// HEARTS animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}
