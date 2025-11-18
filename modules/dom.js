const Dom = (() => {
  const Board = (() => {
    function makeBoard(player) {
      const shipKeys = player.gameboard.getKeys();
      const attackedFields = player.gameboard.getAttackedFields();
      const fieldSize = player.gameboard.fieldSize;

      const container = document.createElement("div");
      container.className = "boardContainer";
      container.id = player.name;
      for (let i = 0; i < fieldSize; i++) {
        const line = document.createElement("div");
        line.className = "line";
        for (let j = 0; j < fieldSize; j++) {
          const cell = document.createElement("div");
          cell.className = "cell";
          cell.dataset.x = i;
          cell.dataset.y = j;

          const key = i * fieldSize + j;
          if (shipKeys.has(key)) {
            cell.style.backgroundColor = "lightblue";
          }
          if (attackedFields.has(key)) {
            const bgColor = cell.style.backgroundColor;
            if (bgColor === "lightblue") {
              cell.style.backgroundColor = "red";
            } else {
              cell.style.backgroundColor = "coral";
            }
          }
          //cell.textContent = `${i},${j}`; //show the cell data

          line.appendChild(cell);
        }
        container.appendChild(line);
      }

      return container;
    }

    function delBoard(player) {
      const board = document.getElementById(player.name);
      board.remove();
    }

    return { makeBoard, delBoard };
  })();
  return { Board };
})();

export default Dom;
