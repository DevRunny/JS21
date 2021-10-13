"use strict";

const book = document.querySelectorAll(".book");
const image = document.querySelector("body");
const titleBook = document.querySelectorAll("div.book a")[4];
const deleteAdb = document.querySelector(".adv");
const bookTwoChapters = document
  .querySelectorAll("div.book ul")[0]
  .querySelectorAll("li");

const bookFiveChapters = document
  .querySelectorAll("div.book ul")[5]
  .querySelectorAll("li");

const bookSixChapters = document
  .querySelectorAll("div.book ul")[2]
  .querySelectorAll("li");

const fixBooks = () => {
  book[0].before(book[1]);
  book[2].before(book[4]);
  book[2].before(book[3]);
  book[2].before(book[5]);

  image.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

  titleBook.innerHTML = "Книга 3. this и Прототипы Объектов";

  deleteAdb.remove();
};

const sortChapters = () => {
  bookTwoChapters[9].after(bookTwoChapters[2]);
  bookTwoChapters[3].after(bookTwoChapters[6]);
  bookTwoChapters[4].before(bookTwoChapters[8]);

  bookFiveChapters[1].after(bookFiveChapters[9]);
  bookFiveChapters[4].before(bookFiveChapters[3]);
  bookFiveChapters[4].after(bookFiveChapters[2]);
  bookFiveChapters[8].before(bookFiveChapters[5]);
};

const addChapter = () => {
  bookSixChapters[8].insertAdjacentHTML(
    "afterend",
    "<li>Глава 8: За пределами ES6</li>"
  );
};

fixBooks();
sortChapters();
addChapter();
