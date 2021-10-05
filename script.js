"use strict";

const getNewFunc = (firstArg) => {
  firstArg = prompt("Введите число или слово:");
  if (typeof firstArg !== "string") {
    console.log("Аргумент не строка!"); // Если закрыть окно вопроса, высплывет ошибка
    return;
  }
  firstArg = firstArg.trim(); // Удаляем пробел слева и справа
  return firstArg.length > 30 ? firstArg.slice(0, 30) + "..." : firstArg; // Если строка более 30 символов, то "..."
};

console.log(getNewFunc());
