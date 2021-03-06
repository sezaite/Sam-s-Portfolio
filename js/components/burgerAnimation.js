function burgerAnimation() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
        burger.classList.toggle("x");
    });

}


export { burgerAnimation }