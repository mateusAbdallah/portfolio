const toggleBtn = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", function(){
    menu.classList.toggle('menu-show');
})

closeBtn.addEventListener("click", function(){
    menu.classList.remove("menu-show");
})