"use strict";

const input = document.querySelector("input");
const btnAdd = document.querySelector("button");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.selectorChange = function () {};

let element = new DomElement(".block", 200, 300, "white", 14);

element.selectorChange();

console.log(element);
console.log(element instanceof DomElement);
