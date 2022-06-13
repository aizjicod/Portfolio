const btn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu-mobile");
const li = document.querySelectorAll(".menu-mobile li")
let listItem = Array.from(li);
console.log(listItem)
let menuTgl = ()=> { menu.classList.toggle("visibility"); }
btn.addEventListener("click",menuTgl);
listItem.forEach(child => {



    
    child.addEventListener("click",menuTgl);  
});