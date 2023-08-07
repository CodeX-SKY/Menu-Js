let btn = document.querySelector(".wh-box");
let menu = document.querySelector(".menu");
let wh1 = document.querySelector(".wh1");
let wh2 = document.querySelector(".wh2");
let wh3 = document.querySelector(".wh3");


btn.addEventListener('click' , function(){
    menu.classList.toggle("menu2");
    btn.classList.toggle("btn");
        wh1.classList.toggle("x");
    wh2.classList.toggle("none");
    wh3.classList.toggle("x");
})