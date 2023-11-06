const menuIcon = document.querySelector(".mormor-ikon-wrapper img[src='assets/meny-ikon.svg']");
const sideMenu = document.getElementById("side-menu");
const closeMenuBtn = document.getElementById("close-menu");

menuIcon.addEventListener("click", () => {
    sideMenu.style.right = "0"; // Slide in from the right
    sideMenu.style.visibility = "visible"; // Set the visibility to visible when opening
});

closeMenuBtn.addEventListener("click", () => {
    sideMenu.style.right = "-400px"; // Slide out to the right
    setTimeout(() => {
        sideMenu.style.visibility = "hidden"; // Set the visibility to hidden after the transition
    }, 300); // Match the transition time (0.3s)
});
