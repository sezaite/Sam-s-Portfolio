function burgerAnimation() {
    const burger = document.querySelector(".burger");
    const navBlocks = document.querySelectorAll(".menu-wrap");
    const navLinks = document.querySelectorAll(".menu-wrap a");
    console.log(navLinks);
    console.log(navBlocks);

    burger.addEventListener("click", () => {
        navBlocks.forEach((block) => {
            block.classList.toggle("nav-active");

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
    );
}
export { burgerAnimation }