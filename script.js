let menu = document.getElementById("menu-bar");
let navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    menu.style.transition = "all .2s linear";
    navbar.classList.toggle("nav-toggle");
}
)

