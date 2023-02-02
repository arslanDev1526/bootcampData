 let uppercaseChecker = ((str) => { 
    return /[A-Z]/.test(str.charAt(0));
  })

  console.log(uppercaseChecker("Hello"))