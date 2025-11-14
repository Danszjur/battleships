import Player from "./player.js";
import DomElements from "./dom.js";

const player1 = new Player("Dani");
player1.gameboard.color = "green";
const player2 = new Player("Computer");
player2.gameboard.color = "reds";

player1.gameboard.placeShip(5, [4, 4], true);
player2.gameboard.placeShip(3, [5, 5], false);

const main = document.getElementById("main");

const board1 = DomElements.makeBoard();
const board2 = DomElements.makeBoard();
main.appendChild(board1);
main.appendChild(board2);
DomElements.putOnTheShips(player1.gameboard);
DomElements.putOnTheShips(player2.gameboard);
