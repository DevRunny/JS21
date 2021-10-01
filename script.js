let num = 266219; // Задаем число

let numbers = num.toString().split(""); // Переводим заданное число в строку, конвертируем в массив,

let niceNumbers = numbers.map(Number); // превращаем строки в массиве в числа

let sum = (previousValue, currentValue) => previousValue * currentValue; // Перемножаем числа в масииве

const result = niceNumbers.reduce(sum) ** 3; // Возводим в степень результат

const strResult = result.toString(); // Переводим результат в строку

const sliceResult = strResult.slice(0, 2); // Вытаскиваем первые 2 цифры от числа

const numResult = Number(sliceResult); // Преобразуем из строки в числовой тип

console.log(niceNumbers); // Массив чисел
console.log(niceNumbers.reduce(sum)); // Перемноженные числа
console.log(result); // Число возведенное в степень 3
console.log(numResult); // Вывод в консоль первые 2 цифры полученного числа
