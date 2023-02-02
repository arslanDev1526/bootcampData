let str = "younas";
const vowelCheck = (str) => {
  let vowel = ["a", "i", "o", "u", "s"];
  let count = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (vowel.includes(arr[i])) {
      count++;
    }
  }
  return count;
};
console.log(vowelCheck(str));