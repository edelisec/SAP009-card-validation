const validator = {
  isValid: function (creditCardNumber) { 
    // Invertir el número de la tarjeta de crédito
    console.log(creditCardNumber);
    creditCardNumber = creditCardNumber.split("").reverse().join("");
    // Aplicar el algoritmo de validación
    let sum = 0;
    for (let i = 0; i < creditCardNumber.length; i++) {
      let digit = parseInt(creditCardNumber[i]);
      if (i % 2 !== 0) {
        digit *= 2;
        if (digit > 9) {
          digit = digit.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b));
        }
      }
      sum += digit;
    }
    console.log(sum % 10 === 0);
    return sum % 10 === 0;
  },
  maskify: function (creditCardNumber) {
    let maskNumber = "";
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      maskNumber += "#";
    }
    maskNumber += creditCardNumber.substr(-4);
    return maskNumber
  }
};

export default validator; 
