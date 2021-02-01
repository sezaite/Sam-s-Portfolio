
const txt = 'Musician | Producer | Mixer'; /* The text */
const speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    for (let i = 0; i < txt.length; i++) {
        document.querySelector(".hero .titles").innerHTML += txt.charAt(i);
        setTimeout(typeWriter, speed);
    }
}

