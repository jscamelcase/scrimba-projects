const numberInput = document.querySelector("input");

numberInput.addEventListener("input", (event) => {
  console.log(typeof event.target.value);
});
