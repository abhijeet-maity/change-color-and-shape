const inner = document.querySelector(".inner-box");
const outer = document.querySelector(".outer-box");

const bgColors = [
  "black",
  "violet",
  "green",
  "pink",
  "blue",
  "cyan",
  "yellow",
  "orange",
];

document.getElementById("chg-shape").addEventListener("click", () => {
  inner.classList.toggle("box");
});

document.getElementById("chg-color").addEventListener("click", () => {
  let idx = Math.floor(Math.random() * 8);
  outer.style.backgroundColor = bgColors[idx];
});
