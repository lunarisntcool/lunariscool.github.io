let output = document.getElementsByName("output")
let maxnum = document.getElementsByName("maxnum")
let label = document.getElementById("label")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showAns(){
    document.getElementById("randgen").style.backgroundColor = "#545454"
    var randnum = getRandomInt(maxnum[0].value)
    output[0].value = randnum
    setTimeout(lighten, 5)
}
function darken(){
    document.getElementById("randgen").style.backgroundColor = "darkgrey"
}
const lighten = () => document.getElementById("randgen").style.backgroundColor = "white"
function disappear(){
    for(i = 0; i++; i < 50){
        label.style.opacity -= 2
    }
}