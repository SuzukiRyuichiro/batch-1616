const button = document.querySelector("#show-hint");
button.addEventListener("click", () => {
  // Get the hint element
  const hint = document.querySelector("#hint");
  // remove the d-none class
  hint.classList.toggle("d-none");
});

const beatles = ["john", "george", "paul", "ringo"];

// beatles.each do |member|
//   puts member.upcase
// end

beatles.forEach((member) => {
  // console.log(member.toUpperCase());
});

// Select all the tiles
const tiles = document.querySelectorAll("td");

const canMove = (tile) => {
  // DOM of a td you just clicked
  // TODO: Check if a tile has an empty neighbour
  // Get the empty tile
  const emptyTile = document.querySelector(".empty");
  // Get the empty tiles X index
  const emptyTileXIndex = emptyTile.cellIndex;
  // Get the empty tiles Y index
  const emptyTileYIndex = emptyTile.parentElement.rowIndex;
  // Get the X index of the tile
  const tileXIndex = tile.cellIndex;
  // Get the Y index of the tile
  const tileYIndex = tile.parentElement.rowIndex;

  // Get the distance in X direction
  const distInX = Math.abs(emptyTileXIndex - tileXIndex);
  // Get the distance in Y direction
  const distInY = Math.abs(emptyTileYIndex - tileYIndex);

  // If the sum is one, return true
  return distInX + distInY === 1;
};

const moveTile = (element) => {
  // TOOD: Move the tile
  // Get the empty tile
  const emptyTile = document.querySelector(".empty");
  // Get the inner text of the tile I just clicked
  const number = element.innerText;
  // Insert that inner text into the empty tile
  emptyTile.innerText = number;
  // Remove the "empty" class from the tile that is no longer empty
  emptyTile.classList.remove("empty");
  // Remove the inner text in the clicked tile
  element.innerText = "";
  // Apply the "empty" class to the clicked tile
  element.classList.add("empty");
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
  const winningPattern = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  // Get all the td
  const tiles = document.querySelectorAll("td");
  const innerTexts = Array.from(tiles).map((td) => td.innerText);
  // Join the innerText of all the tds
  const currentPattern = innerTexts.join();
  // compare that to the expected pattern
  if (currentPattern === winningPattern) {
    // if so, alert the user
    alert("You did it!! 🥳");
  }
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
