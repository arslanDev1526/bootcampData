function isValidCard(cardNumber) {
  cardNumber = cardNumber.replace(/\D/g, "");

  if (!cardNumber || cardNumber.length < 13) return false;

  let digits = cardNumber.split("").map((digit) => parseInt(digit));

  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[digits.length - 1 - i];
    if (i % 2 === 1) digit *= 2;
    if (digit > 9) digit -= 9;
    sum += digit;
  }

  return sum % 10 === 0;
}

console.log(isValidCard("4111 1111 1111 1111"));
