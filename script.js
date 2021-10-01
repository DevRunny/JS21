let title = "JS21";

let screens = "Простые, Сложные, Интерактивные";

let screenPrice = 500;

let rollback = 26;

let fullPrice = 14990;
console.log(typeof fullPrice);
let adaptive = true;
console.log(typeof adaptive);


console.log(typeof title);
console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость создания сайта " + fullPrice + " рублей");

console.log(screens.toLowerCase(), screens.split(" "));

console.log(fullPrice * (rollback / 100));
