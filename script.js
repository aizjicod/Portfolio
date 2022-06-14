const btn = document.querySelector('.hamburguer-btn');
const menu = document.querySelector('.menu-mobile');
const li = document.querySelectorAll('.menu-mobile li');
const logo = document.querySelector('.logo-placeholder');
const header = document.querySelector('.header');
const listItem = Array.from(li);
const menuTgl = () => { 
    menu.classList.toggle('visibility'); 
    logo.classList.toggle('visibility');
    btn.classList.toggle('active');
    header.classList.toggle('active')};

btn.addEventListener('click', menuTgl);
listItem.forEach((child) => { child.addEventListener('click', menuTgl); });