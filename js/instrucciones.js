let next = document.getElementById('next');


next.addEventListener('click', () => {
    window.location.href = "./pregunta1.html";
});  

window.addEventListener("DOMContentLoaded", function() {
    playMusic();
});

function playMusic(){
    const audio = new Audio('../assets/audio/Thinking_Music.mp3');
    audio.setAttribute("user-initiated", "");
    audio.play();
}