"use strict"; //Строгий режим

const title = prompt("Как называется ваш проект?", "JS21"); //Всплывающее окно с вопросом и заносим ответ

const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
); // Всплывающее окно с вопросом и варианты ответа, заносим ответ в переменную

const screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"); // Всплывающее окно с вопросом с примером

const adaptive = confirm("Нужен ли адаптив на сайте?"); // Всплывающее окно с вариантом ответа

const service1 = prompt("Какой дополнительный тип услуги нужен?"); // Всплывающее окно с вопросом
const servicePrice1 = +prompt("Сколько это будет стоить?"); // Всплывающее окно с вопросом в виде числа
const service3 = prompt("Какой дополнительный тип услуги нужен?"); // Всплывающее окно с вопросом
const servicePrice2 = +prompt("Сколько это будет стоить?"); // Всплывающее окно с вопросом в виде числа

const fullPrice = Number(screenPrice + servicePrice1 + servicePrice2); // Сложение всех полученных чисел из ответов

const rollback = 26; // Процент отката

const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
console.log(
  "С учетом процента отката за работу: " + servicePercentPrice + " рублей"
); // Выводим в консоль стоимость с учетом процента отката и округляя в большую сторону

switch (true) {
  case fullPrice > 30000: // Если итоговая стоимость больше 30000, то дарим скидку 10%
    console.log("Дарим скидку 10%");
    break;
  case fullPrice > 15000: // Если итоговая стоимость больше 15000, то дарим скидку 5%
    console.log("Дарим скидку 5%");
    break;
  case fullPrice > 0: // Если итоговая стоимость больше 0, то скидка не предусмотрена
    console.log("Скидка не предусмотрена :(");
    break;

  default:
  case fullPrice < 0: // Если итоговая стоимость меньше 0, то возвращаем ошибку
    console.log("Что-то пошло не так T_T");
}

// console.log(typeof title);
// console.log(screens.length);
// console.log(rollback);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log("Стоимость верстки экранов " + screenPrice + " рублей");
// console.log("Стоимость создания сайта " + fullPrice + " рублей");
// console.log(screens.toLowerCase(), screens.split(" "));
// console.log(fullPrice * (rollback / 100));
