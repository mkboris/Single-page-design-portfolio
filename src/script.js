"use strict";

//  const slideLeft = document.getElementById("slideLeft");
//  const slideRight = document.getElementById("slideRight");

// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slides");

// const slideWidth = slides[0].offsetWidth;
// const slideCount = slides.length;

// slideLeft.addEventListener("click", function () {
//   slide.style.transform = "translateX(65rem)";
// });

// slideRight.addEventListener("click", function () {
//   slide.style.transform = "translateX(-65rem)";
// });

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

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
