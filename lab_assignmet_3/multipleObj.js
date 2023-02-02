let names = [{name: "Arslan"}, {name: "ARSLAN"}, {name: "aRslan"}, {name: "arslAN"}];

function findName(array, name) {
  let lastLetter = name[name.length - 1];
  let pattern = new RegExp(`^${name}$`, "i");
  for (let i = 0; i < array.length; i++) {
    if (pattern.test(array[i].name) && array[i].name[array[i].name.length - 1] === lastLetter) {
      return array[i];
    }
  }
  return null;
}

let foundName = findName(names, "arslAN");
console.log(foundName); 
