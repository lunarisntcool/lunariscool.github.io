let button = document.getElementsByName("random button")
let change = document.getElementById("change")
let h1 = document.getElementsByName("heading")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showAns(){
    var randnum = getRandomInt(109320)
    h1.innerHTML = randnum.toString()
    console.log("devious")
}