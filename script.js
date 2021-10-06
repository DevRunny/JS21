"use strict"; //Строгий режим

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 26;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "JS21");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  // screenPrice = prompt("Сколько будет стоить данная работа?");

  // while (!isNumber(screenPrice)) {
  //   screenPrice = prompt("Сколько будет стоить данная работа?");
  // }

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const showTypeOf = (variable) => {
  console.log(variable, typeof variable); // Определение типа объекта
};

const getRollbackMessage = (price) => {
  switch (true) {
    case price >= 30000: // Если итоговая стоимость больше 30000, то дарим скидку 10%
      return "Дарим скидку 10%";
    case price >= 15000: // Если итоговая стоимость больше 15000, то дарим скидку 5%
      return "Дарим скидку 5%";
    case price >= 0: // Если итоговая стоимость больше 0, то скидка не предусмотрена
      return "Скидка не предусмотрена!";

    default:
    case price <= 0: // Если итоговая стоимость меньше 0, то возвращаем ошибку
      return "Что-то пошло не так Т_Т";
  }
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    sum += +prompt("Сколько это будет стоить?");
  }
  return sum;
};

function getFullPrice(scrnPrice, servicePrice) {
  return scrnPrice + servicePrice; //Расчет полной суммы с использованием callback
}

function getTitle() {
  let cutTitle = title.trim(); //Удаление пробелов
  return cutTitle[0].toUpperCase() + cutTitle.slice(1); //Заглавная буква с первого знака
}

function getServicePercentPrices() {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100)); // Функция возвращает стоимость за вычетом процента отката
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(screens.split()); // Выводим в консоль строку в виде массива
console.log(getRollbackMessage(fullPrice)); // Выводим скидку в зависимости от указанной суммы
console.log(
  "Стоимость за вычетом процента отката посреднику: " +
    getServicePercentPrices() +
    " рублей"
); // Вывод стоимости за вычетом процента отката посреднику
console.log(getTitle(title)); // Вывод названия проекта с учетом форматирования текста
