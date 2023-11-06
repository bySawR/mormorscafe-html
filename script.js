const menuIcon = document.querySelector(".mormor-ikon-wrapper img[src='assets/meny-ikon.svg']");
const sideMenu = document.getElementById("side-menu");
const closeMenuBtn = document.getElementById("close-menu");

menuIcon.addEventListener("click", () => {
    sideMenu.style.right = "0"; /* Updated to slide in from the right */
});

closeMenuBtn.addEventListener("click", () => {
    sideMenu.style.right = "-300px"; /* Updated to slide out to the right */
});
