const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    }
    if (e.target.id === "Gray") {
      body.style.backgroundColor = "gray";
    }
    if (e.target.id === "Blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "Yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    }
  });
});
