const menuIcon = document.querySelector(".mormor-ikon-wrapper img[src='assets/meny-ikon.svg']");
const sideMenu = document.getElementById("side-menu");
const closeMenuBtn = document.getElementById("close-menu");

menuIcon.addEventListener("click", () => {
    sideMenu.style.right = "0px"; // Slide in from the right
    sideMenu.style.visibility = "visible"; // Set the visibility to visible when opening
});

closeMenuBtn.addEventListener("click", () => {
    // Check if the screen width is 767 pixels or less
    if (window.innerWidth <= 767) {
        sideMenu.style.right = "0%"; // Slide out to the right
        setTimeout(() => {
            sideMenu.style.visibility = "hidden"; // Set the visibility to hidden after the transition
        }, 0); // Match the transition time (0.3s)
    } else {
        sideMenu.style.right = "0px"; // Hide the menu on screens 1024px and higher
        sideMenu.style.visibility = "hidden"; // Set the visibility to hidden
    }
});
