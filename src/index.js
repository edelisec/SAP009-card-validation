import validator from './validator.js';

const cNumber = document.getElementById('card-number');
const result = document.getElementById('result');
const form = document.getElementById("validation-form");


form.addEventListener("submit", function (event) {
  event.preventDefault();
  const ccNumber = cNumber.value;
  if (validator.isValid(ccNumber)) {
    result.innerHTML = "Número de cartão válido!";
  } else {
    result.innerHTML = "Número de cartão inválido!";
  }
  cNumber.value = validator.maskify(cNumber.value);
});

