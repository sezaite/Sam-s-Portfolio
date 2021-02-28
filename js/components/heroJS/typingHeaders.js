let i = 0;
const txt = 'Producer  |  Ex-vegan  |  First-time visitor to Lithuania';
const speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".hero .titles").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

export { typeWriter };
