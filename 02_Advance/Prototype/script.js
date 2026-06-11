// function multiplyBy5(num) {
//   return num * 5;
// }

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

// function createPlayer(playerName, score) {
//   this.playerName = playerName;
//   this.score = score;
// }

// createPlayer.prototype.increment = function () {
//   this.score++;
// };

// createPlayer.prototype.displayScore = function () {
//   console.log(`Score is ${this.score}`);
// };

// const playerOne = new createPlayer("Usman", 34);
// const playerTwo = new createPlayer("Noman", 45);

// playerOne.displayScore();

let myName = "Hassan     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is = ${this.trim().length}`);
};

myName.trueLength();
//console.log(myName.truelength);
