const menuIcon = document.querySelector('menu-menuIcon');
const navbar = document.querySelector('.navbar');


muneIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}