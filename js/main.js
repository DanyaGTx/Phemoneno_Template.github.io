// Sticky sections
window.onload = function() {
    let slides = [...document.getElementsByClassName("sticky__section")];

    for(let n in slides) {
        let slide = slides[n];
        slide.style.backgroundColor = "hsl("+((360 / slides.length) * n)+", 100%, 100%)";
    }
   
}

// moving row
function beg ()
{
    var obj = getElementById ('id1');
    var SL = +obj.style.left
    obj.style.left = SL++ + 'px';
    setTimeout (beg, 100);
}

// burger menu
const hamburger = document.querySelector(".hamburger");
const hamburgerIsOpen = document.querySelector(".hamburger__menu-open");
const hamburgerClose = document.querySelector(".hamburger__menu-close");
const body = document.querySelector(".body");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle('active');
    hamburgerIsOpen.classList.toggle('active');
    hamburgerIsOpen.classList.toggle('shadow-menu');
    body.classList.add('stopScroll')
})
hamburgerClose.addEventListener("click", () => {
    hamburgerIsOpen.classList.remove('active');
    hamburgerIsOpen.classList.remove('shadow-menu');
    body.classList.remove('stopScroll')
})

