class Ship {
  constructor(length = 1, [x, y]) {
    this.length = length;
    this.keys = new Set();
    this.hits = 0;
    this.sunk = false;
  }
  hit() {
    this.hits++;
    this.sunk = this.isSunk();
  }
  isSunk() {
    if (this.hits >= this.length) {
      return true;
    }
    return false;
  }
}

export default Ship;
