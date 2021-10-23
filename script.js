"use strict";
const body = document.querySelector("body");
let elem;
let p = prompt("Введите текст!");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height + "px";
  this.width = width + "px";
  this.bg = bg;
  this.fontSize = fontSize + "px";

  this.creater = function () {
    if (this.selector[0] === ".") {
      elem = document.createElement("div");
      elem.classList.add(this.selector.slice(1));
      elem.style.display = "flex";
      elem.style.justifyContent = "center";
      elem.style.alignItems = "center";
      elem.style.margin = "30px";
      elem.style.textTransform = "uppercase";
    } else if (this.selector[0] === "#") {
      elem = document.createElement("p");
      elem.id = this.selector.slice(1);
      elem.style.display = "flex";
      elem.style.justifyContent = "center";
      elem.style.alignItems = "center";
      elem.style.margin = "30px";
      elem.style.textTransform = "lowercase";
    }

    elem.style.height = this.height;
    elem.style.width = this.width;
    elem.style.background = this.bg;
    elem.style.fontSize = this.fontSize;

    body.append(elem);
  };
};

DomElement.prototype.addText = function () {
  elem.textContent = p;
};

const elem1 = new DomElement(".block", 60, 200, "red", 30);
const elem2 = new DomElement("#block", 30, 200, "green", 20);

elem1.creater();
elem1.addText();
elem2.creater();
elem2.addText();

console.log(elem1);
console.log(elem2);
console.dir(elem);
