// Generate a Random Color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

//console.log(randomColor());
document.querySelector("#start").addEventListener("click", function () {
  startChangingColor();
});

document.querySelector("#stop").addEventListener("click", function () {
  stopChangingColor();
});
