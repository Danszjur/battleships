import Ship from "./ship.js";

class Gameboard {
  constructor() {
    this.ships = [];
    this.fieldSize = 10;
    this.color = "white";
    this.keys = new Set();
    this.attackedFields = new Set();
  }
  makeKey([x, y]) {
    return x * this.fieldSize + y;
  }
  placeShip(length, [x, y], isHorizontal) {
    if (!this.isShipFits(length, [x, y], isHorizontal)) {
      throw new Error("Ship cant fit");
    }
    //make a ship and store it's datas
    const newShip = new Ship(length, [x, y]);
    const shipKeys = [];

    for (let i = 0; i < length; i++) {
      const key = this.makeKey([x, y]);

      if (this.keys.has(key)) {
        throw new Error("Ship collision");
      }
      shipKeys.push(key);
      if (isHorizontal) {
        x++;
      } else {
        y++;
      }
    }
    this.ships.push(newShip);
    for (const key of shipKeys) {
      this.keys.add(key);
      newShip.keys.add(key);
    }
  }

  isShipFits(length, [x, y], isHorizontal) {
    if (length === 0) {
      throw new Error("The ship must have length");
    }
    length--;
    const ruleStartX = x >= 0 && x < this.fieldSize;
    const ruleStartY = y >= 0 && y < this.fieldSize;

    const ruleEndX = x + length >= 0 && x + length < this.fieldSize;
    const ruleEndY = y + length >= 0 && y + length < this.fieldSize;

    if (isHorizontal) {
      return ruleStartX && ruleStartY && ruleEndX;
    }
    return ruleStartX && ruleStartY && ruleEndY;
  }

  receiveAttack([x, y]) {
    const attackedCell = this.makeKey([x, y]);
    if (this.attackedFields.has(attackedCell)) {
      throw new Error("This field was already attacked");
    }

    this.attackedFields.add(attackedCell);

    if (!this.keys.has(attackedCell)) {
      console.log("Miss!");
      return null;
    }

    for (const ship of this.ships) {
      for (const key of ship.keys) {
        if (key === attackedCell) {
          ship.hit();
          if (this.isAllShipsSunk()) {
            console.log("Game Over");
          }
          return ship.isSunk();
        }
      }
    }
  }

  isAllShipsSunk() {
    const countOfShips = this.ships.length;
    let counter = 0;
    for (const ship of this.ships) {
      if (ship.sunk === true) {
        counter++;
      }
    }
    if (countOfShips === counter) {
      return true;
    }
    return false;
  }
}
export default Gameboard;
