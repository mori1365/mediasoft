
let menu = document.getElementById('menu');
let navbar = document.querySelector(".navbar");
menu.addEventListener('click', function () {
    if (navbar.style.left === "100%") {
        navbar.style.left = 0;
    } else {
        navbar.style.left = "100%";
    }
})
window.onscroll = () => {
    navbar.style.left = "100%";
}

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


function openpage(pageUrl){
    document.getElementById("myFrame").src = pageUrl;
    document.getElementById("myModal").style.left = 0;
}
let closed = document.querySelector(".closed");
closed.onclick = () => {
    document.getElementById("myModal").style.left = "100%";
}
