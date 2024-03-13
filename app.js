const activePage = window. location. pathname;
const navLinks = document. querySelectorAll('.navbar a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})



let images = document.querySelectorAll('.slide img');
let slideshowContainer = document.querySelector('.slideshow-container');

function moveSlide() {
  // انتقال اولین تصویر به انتهای آرایه
  slideshowContainer.appendChild(images[0]);
  images = document.querySelectorAll('.slide img'); // به‌روزرسانی آرایه تصاویر

  // انجام انتقال بصری
  slideshowContainer.style.transition = 'none';
  slideshowContainer.style.transform = 'translateX(0)';
  setTimeout(() => {
    slideshowContainer.style.transition = 'transform 2s ease';
    slideshowContainer.style.transform = 'translateX(-33.33%)';
  }, 100); // اندکی تاخیر برای اعمال تغییر بدون انتقال
}

// تنظیم تایمر برای حرکت دادن تصاویر هر 3 ثانیه
setInterval(moveSlide, 3000);