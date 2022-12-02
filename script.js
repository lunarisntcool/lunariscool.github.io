let h1 = document.getElementsByName("heading")
let maxnum = document.getElementsByName("maxnum")
let label = document.getElementById("label")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showAns(){
    var randnum = getRandomInt(maxnum[0].value)
    h1[0].innerHTML = randnum
}

function disappear(){
    for(i = 0; i++; i < 50){
        label.style.opacity -= 2
    }
}