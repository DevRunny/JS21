"use strict";
const btn = document.getElementById("btn");
const square = document.getElementById("square");
const trashBtn = document.getElementById("e_btn");
const input = document.querySelector('[type="text"]');
const inputRange = document.querySelector('[type="range"]');
const circle = document.querySelector('[id="circle"]');
const span = document.getElementById("range-span");

const btnFunc = function () {
  square.style.backgroundColor = input.value;
};

const circleRange = function (event) {
  span.textContent = event.target.value + "%";
  circle.style.width = span.textContent;
  circle.style.height = span.textContent;
};

trashBtn.style.display = "none";
btn.addEventListener("click", btnFunc);
inputRange.addEventListener("input", circleRange);
