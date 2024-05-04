"use strict";

const btnLeft = document.getElementById("previous");
const btnRight = document.getElementById("next");

// const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slides");

// let currentSlide = 0;
// const maxSlide = slides.length;

// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${105 * (i - slide)}%)`)
//   );
// };

// goToSlide(0);

// const nextSlide = function () {
//   if (currentSlide === maxSlide - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }

//   goToSlide(currentSlide);
// };

// const prevSlide = function () {
//   if (currentSlide === 0) {
//     currentSlide = maxSlide - 1;
//   } else {
//     currentSlide--;
//   }

//   goToSlide(currentSlide);
// };

function moveCarouselRight() {
  const slideWidth = slides[0].clientWidth + 32;
  // if at the end
  if (sliderContainer.scrollLeft === sliderContainer.scrollLeftMax) {
    sliderContainer.scrollLeft = 0;
  }
  // anywhere else
  else {
    const moveForwardValue =
      (sliderContainer.scrollWidth -
        (sliderContainer.scrollLeft + sliderContainer.clientWidth)) %
        slideWidth || slideWidth;
    sliderContainer.scrollLeft += moveForwardValue;
  }
}

function moveCarouselLeft() {
  const slideWidth = slides[0].clientWidth + 32;
  // if at the start
  if (sliderContainer.scrollLeft === 0) {
    sliderContainer.scrollLeft = sliderContainer.scrollLeftMax;
  }
  // anywhere else
  else {
    const moveBackValue = sliderContainer.scrollLeft % slideWidth || slideWidth;
    sliderContainer.scrollLeft -= moveBackValue;
  }
}

btnRight.addEventListener("click", moveCarouselRight);
btnLeft.addEventListener("click", moveCarouselLeft);

// smooth reveal items on scroll
const obeserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => obeserver.observe(el));
