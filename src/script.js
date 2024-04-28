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
