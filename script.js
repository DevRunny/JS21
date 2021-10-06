"use strict"; //Строгий режим

const arr = ["243", "568", "25", "49", "19", "85", "485"];

arr.forEach(function (arrNum) {
  if (arrNum.startsWith("2") || arrNum.startsWith("4")) {
    console.log(Number(arrNum));
  }
});
