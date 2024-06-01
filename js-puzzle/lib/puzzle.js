const button = document.querySelector("#button");
const hint = document.querySelector("#hint");
button.addEventListener("click", () => {
  hint.classList.toggle("d-none");
});

const beatles = ["john", "paul", "ringo", "george"];

// beatles.each do |member|
//   puts member.upcase
// end

beatles.forEach((member) => {
  console.log(member.toUpperCase());
});

// Select all the tiles
const tiles = document.querySelectorAll("td");

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbour
  // Find the empty tile
  const emptyTile = document.querySelector(".empty");
  // Get the position of the empty tile
  const emptyTileCol = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  // Get the position of the clicked tile (tile)
  const tileCol = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  // If the empty tile is next to it, return true
  // Shortest distance from the cell to empty is one
  // distance = difference in indcies (abs)
  const distInX = Math.abs(emptyTileCol - tileCol);
  const distInY = Math.abs(emptyTileRow - tileRow);
  return distInX + distInY === 1;
};

const moveTile = (element) => {
  // TOOD: Move the tile
  // Get the empty tile
  const emptyTile = document.querySelector(".empty");
  // Insert the number into the empty tile
  emptyTile.innerText = element.innerText;
  // Remove the class from the empty tile
  emptyTile.classList.remove("empty");
  // Remove the number from the tile
  element.innerText = "";
  // Add empty class to the tile
  element.classList.add("empty");
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
  const winningString = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  const tileNumbers = [];
  tiles.forEach((tile) => {
    tileNumbers.push(tile.innerText);
  });
  const tileNumbersString = tileNumbers.join(",");
  return tileNumbersString === winningString;
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
