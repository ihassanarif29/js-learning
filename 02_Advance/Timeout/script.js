const hiHassan = function () {
  console.log("Hassan");
};

const changeText = function () {
  document.querySelector("h1").innerHTML = "Best JS Series";
};

const changeHeading = setTimeout(changeText, 2000);

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeHeading);
  console.log("Stoped");
});
