let i = 0;
const txt = 'Producer  |  Ex-vegan  |  First-time visitor to Lithuania';
const speed = 100;

function typeWriter() {
    if (window.innerWidth > 860) {
        if (i < txt.length) {
            document.querySelector(".hero .titles").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    } else {
        document.querySelector(".hero .titles").innerHTML = txt;
    }
}

export { typeWriter };
