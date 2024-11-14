// Conversion rates
const METER_TO_FEET = 3.281;
const LITER_TO_GALLON = 0.264;
const KILO_TO_POUND = 2.204;

// DOM Objects
const numberInput = document.querySelector("input");
const btnConverter = document.getElementById("btn-convert");
const lengthPara = document.getElementById("length");
const volumePara = document.getElementById("volume");
const weightPara = document.getElementById("weight");

//Round down function
function roundDownThreeDecimalPlaces(number) {
  return (Math.floor(number * 1000) / 1000).toFixed(3);
}

//Convert function

function convertInput() {
  const inputValue = numberInput.value;
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

  lengthPara.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;
  volumePara.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters}`;
  weightPara.textContent = `${inputValue} kilos = ${kilosToPounds} | ${inputValue} pounds = ${poundsToKilos} kilos`;
}

// numberInput.addEventListener("input", convertInput);
btnConverter.addEventListener("click", convertInput);
