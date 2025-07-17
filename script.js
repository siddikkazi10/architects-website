// js link

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navlinks = document.getElementById("nav-links");


openmenu.addEventListener("click", () => {
   navLinks.clssList.add("active");
   openMenu.style.display = "none";
   closeMenu.style.display = "block";
});


closeMenu.addEventListener("click", () => {
    navLinks.clssList.remove("active");
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
});