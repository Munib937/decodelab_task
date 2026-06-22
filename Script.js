const openmenu = document.querySelector("#menu-open-button");
const closemenu = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");


openmenu.addEventListener("click", () => {
    navMenu.classList.add("active");
     overlay.classList.add("active");
  

});

closemenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
       overlay.classList.remove("active");
    
});