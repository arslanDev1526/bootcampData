//Write a function that would allow you to do this. (Use closures)




const addSix = (base) => (num) => base + num 

const doSum = addSix(6)
const result = doSum(10)
const result2 = doSum(21)

console.log({result,result2})


