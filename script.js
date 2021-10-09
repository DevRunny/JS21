"use strict"; //Строгий режим

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 26,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  start: function () {
    appData.asking();

    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();

    this.logger();
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "JS21");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let value = 0;

      if (i === 0) {
        appData.service1 = prompt("1.Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("2.Какой дополнительный тип услуги нужен?");
      }
      do {
        value = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(value));

      sum += +value;
    }

    return sum;
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices; //Расчет полной суммы
  },
  getTitle: function () {
    let cutTitle = appData.title.trim(); //Удаление пробелов
    return cutTitle[0].toUpperCase() + cutTitle.slice(1); //Заглавная буква с первого знака
  },
  getServicePercentPrices: function () {
    return Math.ceil(
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

    for (let key in appData) {
      console.log(key + ": " + appData[key]);
    }
  },
};

appData.start();
