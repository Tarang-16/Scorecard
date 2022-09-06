let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

let a1 = 0
let a2 = 0
function addone() {
    a1 += 1 
    num1El.innerText = a1
}

function addtwo() {
    a1 += 2 
    num1El.innerText = a1
}

function addthree() {
    a1 += 3 
    num1El.innerText = a1
}




function gaddone() {
    a2 += 1 
    num2El.innerText = a2
}

function gaddtwo() {
    a2 += 2 
    num2El.innerText = a2
}

function gaddthree() {
    a2 += 3 
    num2El.innerText = a2
}


function newgame() {
    a1 = 0
    a2 = 0
    num1El.innerText = 0
    num2El.innerText = 0
    console.log("new game")
}