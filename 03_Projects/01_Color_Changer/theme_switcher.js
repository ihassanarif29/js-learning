const buttons = document.querySelectorAll(".button");
//console.log(buttons);
const body = document.querySelector("body");
//console.log(body);

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener("click", function (e) {
    //console.log(e);
    //console.log(e.target.id);

    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "red":
        body.style.backgroundColor = e.target.id;
        break;
      case "green":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
