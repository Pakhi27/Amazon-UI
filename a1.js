var slider = document.querySelector('.slider');
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000);
