const colors = [
  "red",
  "orange",
  "green",
  "yellow",
  "purple",
  "pink",
  "blue",
  "brown",
  "white",
  "indigo",
  "crimson",
];
const color = document.querySelector(".color");
const btn1 = document.getElementById("btn1").addEventListener("click", () => {
  const myColor = () => Math.floor(Math.random() * colors.length);
  const changeColor = colors[myColor()];
  document.body.style.backgroundColor = changeColor;
  color.textContent = changeColor;
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn2 = document.getElementById("btn2").addEventListener("click", () => {
  const myHex = () => Math.floor(Math.random() * hex.length);
  let ourHex = "#";
  for (let i = 0; i <6; i++) {
    ourHex += hex[myHex()];
  }
  document.body.style.backgroundColor = ourHex;
  color.textContent = ourHex;
});
