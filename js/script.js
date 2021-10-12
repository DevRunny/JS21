"use strict"; //Строгий режим
const title = document.getElementsByTagName("h1");
const btnStart = document.getElementsByClassName("handler_btn");
const btnReset = document.getElementsByClassName("handler_btn");
const btnPlus = document.querySelector(".screen-btn");
const otherItems = document.querySelectorAll(".other-items");
const percent = document.querySelectorAll(".percent");
const number = document.querySelectorAll(".number");
const range = document.querySelector("div.rollback input");
const span = document.querySelector("div.rollback span");
const totalInput = document.getElementsByClassName("total-input");
let screenQuery = document.querySelectorAll(".screen");

let index;
for (index = 0; index < totalInput.length; ++index) {
  console.log(totalInput[index]);
}

console.log(title.title.textContent);
console.log(btnStart[0]);
console.log(btnReset[1]);
console.log(btnPlus);
console.log(otherItems);
console.log(percent);
console.log(number);
console.log(range);
console.log(span);
console.log(screenQuery);

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 26,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();

    this.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (str) {
    return str.length === 0 || str == Number.parseFloat(str, Infinity);
  },

  asking: function () {
    do {
      appData.title = prompt("Как называется ваш проект?", "JS21");
    } while (appData.isString(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (appData.isString(name));

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.isString(name));

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices; //Расчет полной суммы
  },
  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase(); //Заглавная буква с первого знака
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    ); // Функция возвращает стоимость за вычетом процента отката
  },
  getRollbackMessage: (price) => {
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
  },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData);
    console.log(appData.screens);

    for (let key in appData) {
      console.log(key + ": " + appData[key]);
    }
  },
};

appData.start();
