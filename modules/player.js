import Gameboard from "./gameboard.js";

class Player {
  constructor(name, color) {
    this.name = name;
    this.gameboard = new Gameboard();
  }
}

export default Player;
