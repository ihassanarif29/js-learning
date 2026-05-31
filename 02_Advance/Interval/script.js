const sayDate = function (str) {
  console.log(str, Date.now());
};

let intervalId = null;

document.getElementById("start").addEventListener("click", function () {
  intervalId = setInterval(sayDate, 1000, "Hi");
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(intervalId);
});
