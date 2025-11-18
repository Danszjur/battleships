import Player from "./player.js";
import Gameboard from "./gameboard.js";
import Dom from "./dom.js";

const main = document.getElementById("main");
//----------Creating players---------------//

const player1 = new Player("Dani", "green");
const player2 = new Player("Robot", "red");

//-----------Pre-placing the ships-------------//

//player 1 ships
player1.gameboard.placeShip(1, [1, 0], false);
player1.gameboard.placeShip(1, [2, 5], false);
player1.gameboard.placeShip(1, [3, 0], false);
player1.gameboard.placeShip(2, [4, 5], true);
player1.gameboard.placeShip(2, [5, 0], true);
player1.gameboard.placeShip(3, [6, 6], true);
player1.gameboard.placeShip(3, [5, 7], false);
player1.gameboard.placeShip(4, [8, 0], false);

//player 2 ships
player2.gameboard.placeShip(1, [1, 0], false);
player2.gameboard.placeShip(1, [3, 5], false);
player2.gameboard.placeShip(1, [3, 6], false);
player2.gameboard.placeShip(2, [4, 5], true);
player2.gameboard.placeShip(2, [5, 0], true);
player2.gameboard.placeShip(3, [6, 5], true);
player2.gameboard.placeShip(3, [5, 7], false);
player2.gameboard.placeShip(4, [8, 0], false);

//--------Displaying the boards---------//

player1.gameboard.receiveAttack([0, 0]);
player1.gameboard.receiveAttack([1, 1]);
player1.gameboard.receiveAttack([2, 1]);
player1.gameboard.receiveAttack([0, 2]);
player1.gameboard.receiveAttack([1, 0]);
player1.gameboard.receiveAttack([4, 5]);

const board1 = Dom.Board.makeBoard(player1);
const board2 = Dom.Board.makeBoard(player2);

[board1, board2].map((b) => {
  main.appendChild(b);
});
