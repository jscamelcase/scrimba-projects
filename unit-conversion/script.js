// Conversion rates
const METER_TO_FEET = 3.281;
const LITER_TO_GALLON = 0.264;
const KILO_TO_POUND = 2.204;

// DOM Objects
const numberInput = document.querySelector("input");
const lengthPara = document.getElementById("length");
const volumePara = document.getElementById("volume");
const weightPara = document.getElementById("weight");

//Round down function
function roundDownThreeDecimalPlaces(number) {
  return Math.floor(number * 1000) / 1000;
}

numberInput.addEventListener("input", (event) => {
  const inputValue = Number(event.target.value);
  const metersToFeet = roundDownThreeDecimalPlaces(inputValue * METER_TO_FEET);
  const feetToMeters = roundDownThreeDecimalPlaces(
    (inputValue * 1) / METER_TO_FEET
  );
  const litersToGallons = roundDownThreeDecimalPlaces(
    inputValue * LITER_TO_GALLON
  );
  const gallonsToLiters = roundDownThreeDecimalPlaces(
    (inputValue * 1) / LITER_TO_GALLON
  );
  const kilosToPounds = roundDownThreeDecimalPlaces(inputValue * KILO_TO_POUND);
  const poundsToKilos = roundDownThreeDecimalPlaces(
    (inputValue * 1) / KILO_TO_POUND
  );

  console.log(metersToFeet);
});
