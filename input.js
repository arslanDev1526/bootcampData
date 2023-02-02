


function addition() {
let numb1 = parseInt(document.getElementById("num1").value);
let numb2 = parseInt(document.getElementById("num2").value);


try { 
    if (isNaN(numb1) || isNaN(numb2)){ 
        throw " input is valid"
    }

    let result = numb1 + numb2;

    alert( " this is:" + result)
}  catch (err){ 
    alert("error" + err)
}

}