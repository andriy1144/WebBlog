const hiddenNav = document.querySelector(".hidden-nav");
const menuIcon = document.querySelector(".menu-icon");

document.querySelector(".menu-icon").addEventListener("click", () => {
    menuIcon.setAttribute("src", "/icons/cross.png");
    if(hiddenNav.classList.contains("appear-menu")){
       menuIcon.setAttribute("src", "/icons/menu-sym.svg");
    }
    menuIcon.classList.add("menu-icon-animation");

    hiddenNav.classList.toggle("appear-menu");

    setTimeout(() => menuIcon.classList.remove("menu-icon-animation"), 600);
});