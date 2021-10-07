"use strict"; //Строгий режим

function letsPlay() {
  function play() {
    let doYouWannaPlay = confirm("Ты хочешь сыграть в УГАДАЙ ЧИСЛО?");

    if (doYouWannaPlay === true) {
      const сheck = (num) => {
        function restartGame() {
          const whatNum = +prompt("Угадай число от 1 до 100");

          switch (true) {
            case whatNum > num:
              alert("Загаданное число меньше");
              return restartGame();
            case whatNum < num:
              alert("Загаданное число больше");
              return restartGame();
            case whatNum === num:
              alert("МОЛОДЕЦ, ПРЯМО В ТОЧКУ!!!");
              break;
            case whatNum != Number:
              alert("Введи число, дурень!");
              return restartGame();

            default:
            case whatNum === null:
              alert("Все, наигрался, спокойной ночи!");
              break;
          }
        }
        restartGame();
      };
      сheck(26);
    } else if (doYouWannaPlay === false) {
      alert("Ну не хочешь играть, твое право:(");
    }
  }
  play();
}

letsPlay();

// if (whatNum > num) {
//   alert("Загаданное число меньше");
//   restartGame();
// } else if (whatNum < num) {
//   alert("Загаданное число больше");
//   restartGame();
// } else if (whatNum == num) {
//   alert("МОЛОДЕЦ, ПРЯМО В ТОЧКУ!!!");
// } else if (whatNum != Number) {
//   alert("Введи число, дурень!");
//   restartGame();
// } else if (whatNum == null) {
//   alert("Все, наигрался, спокойной ночи!");
// }
