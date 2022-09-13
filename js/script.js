const toggleBtn = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", function(){
    menu.classList.toggle('menu-show');
})

closeBtn.addEventListener("click", function(){
    menu.classList.remove("menu-show");
})

const scrollLinks = document.querySelectorAll('.scroll-link');
const navBar = document.getElementById(nav);

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        
        let position = element.offsetTop;
        window.scrollTo({
            left: 0, 
            top: position,
        });
        
    })
})