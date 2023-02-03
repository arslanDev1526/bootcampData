const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getMonth(month) {
  if (!months.includes(month)) {
    throw new Error(`${month} is not a valid month.`);
  }
  return month;
}

document.getElementById("submitBtn").addEventListener("click", function() {
  try {
    const inputMonth = document.getElementById("monthInput").value;
    const result = getMonth(inputMonth);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
});