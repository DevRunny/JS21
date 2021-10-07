"use strict"; //Строгий режим

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

function letsPlay() {
  function play() {
    let doYouWannaPlay = confirm("Ты хочешь сыграть в УГАДАЙ ЧИСЛО?");

    if (doYouWannaPlay === true) {
      const сheck = (num) => {
        function restartGame(whatNum) {
          whatNum = prompt("Угадай число от 1 до 100");
          const isNumber = function (whatNum) {
            return (
              !isNaN(parseFloat(whatNum)) &&
              isFinite(whatNum) &&
              whatNum !== null
            );
          };

          if (whatNum > num && isNumber(whatNum)) {
            alert("Загаданное число меньше");
            restartGame();
          } else if (whatNum < num && isNumber(whatNum)) {
            alert("Загаданное число больше");
            restartGame();
          } else if (whatNum == num && isNumber(whatNum)) {
            alert("МОЛОДЕЦ, ПРЯМО В ТОЧКУ!!!");
          } else if (whatNum === null) {
            return alert("Все, наигрался, спокойной ночи!");
          } else if (!isNumber(whatNum)) {
            alert("Введи число, дурень!");
            restartGame();
          }
        }
        restartGame();
      };
      сheck(getRandomInt(1, 100));
    } else if (doYouWannaPlay === false) {
      alert("Ну не хочешь играть, твое право:(");
    }
  }
  play();
}

letsPlay();
