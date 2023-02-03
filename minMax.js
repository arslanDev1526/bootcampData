const button = document.getElementById("findMinMax");
button.addEventListener("click", findMinMax);

function findMinMax() {
  const input = document.getElementById("input").value;
  const numbers = input.split(",").map((num) => parseInt(num));
  numbers.sort((a, b) => a - b);
  const min = numbers[0];
  const max = numbers[numbers.length - 1];
  const result = `Minimum: ${min}, Maximum: ${max}`;
  document.querySelector("#result").textContent = result;
}
