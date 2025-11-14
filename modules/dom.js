import Gameboard from "./gameboard.js";
import Player from "./player.js";
const player = new Player(name);
const gameboard = player.gameboard;

const DomElements = (() => {
  function makeBoard() {
    const fieldSize = gameboard.fieldSize;
    const boardContainer = document.createElement("div");
    boardContainer.className = "boardContainer";

    let counter = 0;
    for (let i = 0; i < fieldSize; i++) {
      const line = document.createElement("div");
      line.className = "line";
      for (let j = 0; j < fieldSize; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell-${counter}`;

        line.appendChild(cell);
        counter++;
      }
      boardContainer.appendChild(line);
    }
    return boardContainer;
  }

  function putOnTheShips(gameboard) {
    const keys = gameboard.keys;
    const fieldSize = gameboard.fieldSize * gameboard.fieldSize;
    for (let i = 0; i < fieldSize; i++) {
      if (keys.has(i)) {
        const cell = document.getElementById(`cell-${i}`);
        cell.style.backgroundColor = gameboard.color;
      }
    }
  }

  return { makeBoard, putOnTheShips };
})();

export default DomElements;
