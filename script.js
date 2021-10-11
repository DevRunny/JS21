"use strict"; //Строгий режим

const arr = ["243", "568", "25", "49", "19", "85", "485"];

arr.forEach(function (arrNum) {
  if (arrNum.startsWith("2") || arrNum.startsWith("4")) {
    console.log(Number(arrNum));
  }
});

let num = 100;

const primeNumbers = () => {
  const scrOut = [];
  const primeNum = [];

  for (let i = 2; i <= num; i++) {
    if (!scrOut[i]) {
      primeNum.push("Делитель этого числа: 1 и " + i);
      for (let j = i * 2; j <= num; j += i) {
        scrOut[j] = true;
      }
    }
  }

  return primeNum.join("\n");
};

console.log(primeNumbers());
