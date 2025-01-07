let colorEndpoint = "f55a5a";
let scheme = "complement";

function fetchAndRenderColors(colorEndpoint, scheme) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorEndpoint}&mode=${scheme}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      const colorSwatches = document.querySelectorAll(
        ".color-selector__color-container > .color-selector__color-block"
      );
      const colorText = document.querySelectorAll(
        ".color-selector__color-container > .color-selector__paragraph"
      );
      data.colors.forEach((color, index) => {
        console.log(color.hex.value, index);
        colorSwatches[index].style.backgroundColor = color.hex.value;
        colorText[index].textContent = color.hex.value;
      });
    });
}

fetchAndRenderColors(colorEndpoint, scheme);

const input = document.querySelector("input[type='color']");
const button = document.querySelector("button");
const select = document.getElementById("scheme");

button.addEventListener("click", () => {
  fetchAndRenderColors(input.value.replace("#", ""), select.value);
});
