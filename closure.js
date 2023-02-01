//Write a function that would allow you to do this. (Use closures)

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27


const addSix = (base) => (num) => base + num 

const doSum = addSix(6)
const result = doSum(2)
const result2 = doSum(4)

console.log({result,result2})


