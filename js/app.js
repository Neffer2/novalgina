let correcta = document.getElementById('correcta');
let currentScore = document.getElementById('score');
let countdown = document.getElementById("countdown");

var timeInSecs;
var ticker;

function mount(){
    getScore();
    startTimer();
}  

function startTimer() {
    timeInSecs = 60;
    ticker = setInterval(tick, 1000); 
}

function tick( ) {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;   
    }else {
        clearInterval(ticker);
        window.location.href = `../scenes/pregunta${nextQuestion}.html`;
    }
    
    var mins = Math.floor(secs/60);
    secs %= 60;
    var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
    setTime(pretty);
}

const getRespuesta = (respuesta, elem) => {    
    if (respuesta){
        elem.style.backgroundColor = "#78ba20";
        setScore();
        getScore();
    }else {
        elem.style.backgroundColor = "#ed1c24";
    }
    correcta.style.backgroundColor = "#78ba20";
    disableOpciones();

    let next = setInterval(() => {
        window.location.href = `../scenes/pregunta${nextQuestion}.html`;
        clearInterval(next);
    }, 3000);
}

function getScore(){
    let score = localStorage.getItem("score");
    currentScore.innerText = score;
}

function setScore(){ 
    let storedScore = localStorage.getItem("score");
    storedScore
    localStorage.setItem("score", (parseInt(storedScore) + 1));
}

function setTime(pretty){
    countdown.innerHTML = pretty;
}

function disableOpciones(){
    let opciones = document.getElementsByClassName('opcion');

    for (let opcion of opciones) {
        opcion.style.pointerEvents = "none";
    }
}

window.addEventListener("DOMContentLoaded", function() {
    mount();
});
window.getRespuesta = getRespuesta;

