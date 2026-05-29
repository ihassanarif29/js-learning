// document.getElementById("owl").onclick = function () {
    //   alert("Owl is Clicked");
    // };

    // document.getElementById("owl").addEventListener("click", function () {
    //   alert("Owl is Clicked using EventListener");
    // });

    // document.getElementById("owl").addEventListener(
    //   "click",
    //   function (eventObject) {
    //     console.log(eventObject);
    //   },
    //   false,
    // );

    //Type, Timestamp, defaultPrevented
    //Target, toElement, srcElement, currentTarget
    //clientX, clientY, screenX, screenY
    //altKey, ctrlKey, shiftKey, keyCode

    // Bubbling
    // document.getElementById("images").addEventListener(
    //   "click",
    //   function (eventObject) {
    //     console.log("Clicked inside the ul");
    //   },
    //   false,
    // );
    // document.getElementById("owl").addEventListener(
    //   "click",
    //   function (eventObject) {
    //     console.log("Owl is clicked");
    //   },
    //   false,
    // );

    // Capturing
    // document.getElementById("images").addEventListener(
    //   "click",
    //   function (eventObject) {
    //     console.log("Clicked inside the ul");
    //   },
    //   true,
    // );
    // document.getElementById("owl").addEventListener(
    //   "click",
    //   function (eventObject) {
    //     console.log("Owl is clicked");
    //   },
    //   true,
    // );

    // Stop Propogation
    // document.getElementById("images").addEventListener(
    //   "click",
    //   function (eventObject) {
    //     console.log("Clicked inside the ul");
    //   },
    //   false,
    // );
    // document.getElementById("owl").addEventListener(
    //   "click",
    //   function (eventObject) {
    //     console.log("Owl is clicked");
    //     eventObject.stopPropagation();
    //   },
    //   false,
    // );

    // document.getElementById("google").addEventListener(
    //   "click",
    //   function (eventObject) {
    //     eventObject.preventDefault();
    //     eventObject.stopPropagation();
    //     console.log("Google is Clicked");
    //   },
    //   false,
    // );

    document
      .querySelector("#images")
      .addEventListener("click", function (eventObject) {
        console.log(eventObject.target.tagName);
        if (eventObject.target.tagName === "IMG") {
          console.log(eventObject.target.id);
          let removeIt = eventObject.target.parentNode;
          removeIt.remove();
        }

        //removeIt.parentNode.removeChild(removeIt);
      });