const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.scrollY > 140)
})

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar a').
    forEach(link => {
        if (link.href.includes(`${activePage}`)) {
            link.classList.add('active');
        }
    })

const myslide = document.querySelectorAll(".myslide"),
    dot = document.querySelectorAll(".dot");

let counter = 1;
slidefun(counter);
let timer = setInterval(autoslide, 8000);

function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resettime();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resettime();
}

function resettime() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

      function slidefun(n) {

    let i;
    for (i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');
    }
    if (n > myslide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].className += " active";
}

