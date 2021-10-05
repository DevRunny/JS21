"use strict"; //Строгий режим

let title = prompt("Как называется ваш проект?", "JS21");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service3 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
let fullPrice = getFullPrice(screenPrice, allServicePrices);
let rollback = 26;
let servicePercentPrice = getServicePercentPrices();

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

function getAllServicePrices(srvPrc1, srvPrc2) {
  return srvPrc1 + srvPrc2; // Расчет суммы доп услуг с использованием callback
}

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

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.split()); // Выводим в консоль строку в виде массива
console.log(getRollbackMessage(fullPrice)); // Выводим скидку в зависимости от указанной суммы
console.log(getAllServicePrices(servicePrice1, servicePrice2)); // Выводим сумму доп услуг
console.log(
  "Стоимость за вычетом процента отката посреднику: " +
    getServicePercentPrices() +
    " рублей"
); // Вывод стоимости за вычетом процента отката посреднику
console.log(getTitle(title)); // Вывод названия проекта с учетом форматирования текста
