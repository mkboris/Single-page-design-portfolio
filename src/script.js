"use strict";

const slideLeft = document.getElementById("slideLeft");
const slideRight = document.getElementById("slideRight");
const slide = document.querySelector(".slider");

slideLeft.addEventListener("click", function () {
  slide.style.transform = "translateX(65rem)";
});

slideRight.addEventListener("click", function () {
  slide.style.transform = "translateX(-65rem)";
});

let startX;

document
  .getElementById("slider-container")
  .addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
  });

document
  .getElementById("slider-container")
  .addEventListener("touchmove", function (event) {
    const scrollContainer = document.getElementById("slider-container");
    const scrollLeft = scrollContainer.scrollLeft;
    const touch = event.touches[0];
    const distance = startX - touch.clientX;
    scrollContainer.scrollLeft = scrollLeft + distance;
    startX = touch.clientX; // Update start position for next move
  });
