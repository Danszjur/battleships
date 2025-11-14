class Ship {
  constructor(length = 1, [x, y]) {
    this.length = length;
    this.keys = new Set();
    this.hitCount = 0;
    this.sunk = false;
  }
  hit() {
    this.hitCount++;
    this.sunk = this.isSunk();
  }
  isSunk() {
    if (this.hitCount >= this.length) {
      return true;
    }
    return false;
  }
}

export default Ship;
