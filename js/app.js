let correcta = document.getElementById('correcta');
let currentScore = document.getElementById('score');
let countdown = document.getElementById("countdown");

var timeInSecs;
var ticker;

function mount(){
    getScore();
    startTimer(getTime());
} 

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval(tick, 1000); 
}

function tick( ) {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;   
    }else {
        clearInterval(ticker);

        window.location.href = `../scenes/pregunta11.html`;
    }
    
    var mins = Math.floor(secs/60);
    secs %= 60;
    var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
    setTime(pretty, timeInSecs);
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
    let innerScore = document.cookie.match(/score=([^;]+)/);
    if (innerScore) {
        const cookie = innerScore[1];
        currentScore.innerText = cookie;
    }
}

function setScore(){ 
    let innerScore = document.cookie.match(/score=([^;]+)/);
    if (innerScore) {
        const cookie = innerScore[1];
        // set
        document.cookie = `score=${parseInt(cookie) + 1}`;
    }    
}

function getTime(){
    let innerTime = document.cookie.match(/time=([^;]+)/);
    if (innerTime) {
        const cookie = innerTime[1];
        return cookie;
    }
}

function setTime(pretty, timeInSecs){
    let innerTime = document.cookie.match(/time=([^;]+)/);
    if (innerTime) {
        const cookie = innerTime[1];
        // set
        countdown.innerHTML = pretty;
        document.cookie = `time=${timeInSecs}`;
    }
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

