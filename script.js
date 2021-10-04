"use strict";

//Первая часть задания
const lang = prompt("Выбери язык:", "ru, en");

const ruMassive = [
  "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
];

const enMassive = [
  "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
];

// Решение else if
if (lang === "ru") {
  console.log(ruMassive);
} else if (lang === "en") {
  console.log(enMassive);
} else {
  console.log("Ошибка");
}

// Решение switch case
switch (lang) {
  case "ru":
    console.log(ruMassive);
    break;
  case "en":
    console.log(enMassive);
    break;

  default:
    console.log("Ошибка");
    break;
}

// Решение без if else
const langResult =
  lang === "ru"
    ? console.log(ruMassive)
    : lang === "en"
    ? console.log(enMassive)
    : console.log("Ошибка");

// Вторая часть задания
let namePerson = prompt("Введите имя!");
let Person1 = "Директор";
let Person2 = "Преподаватель";
let Person3 = "Студент";
const result =
  namePerson === "Артём"
    ? Person1
    : namePerson === "Александр"
    ? Person2
    : "Студент";
console.log(result);

// Решение else if
// if (namePerson == "Артём") {
//   console.log("Директор"); // Выводим в консоль, если вы Артём
// } else if (namePerson == "Александр") {
//   console.log("Преподаватель"); // Выводим в консоль, если вы Александр
// } else {
//   console.log("Студент"); // Выводим в консоль, если вы ответили любое другое имя
// }

// Решение switch case
// switch (namePerson) {
//   case "Артём":
//     console.log("Директор");
//     break;
//   case "Александр":
//     console.log("Преподаватель");
//     break;

//   default:
//     console.log("Студент");
//     break;
// }
