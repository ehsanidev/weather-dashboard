const starsContainer = document.getElementById("stars-container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  const animationDuration = (Math.random() * 30 + 20) / 5;
  star.style.animationDuration = `${animationDuration}s`;

  const animationDelay = Math.random() * 5;
  star.style.animationDelay = `-${animationDelay}s`;

  starsContainer.appendChild(star);
}

for (let i = 0; i < 50; i++) {
  createStar();
}
