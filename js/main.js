const nav = document.querySelector("nav")


window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 100);
    console.log(window.scrollY);
    
});
