// Import the WebAssembly memory at the top of the file.
import { memory } from "hello-wasm-pack/rustwasm_bg";
import { Universe, Cell } from "hello-wasm-pack";

const CELL_SIZE = 1; // px
const multiplier = 2;
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = 255;
const ALIVE_COLOR = 0;

// Construct the universe, and get its width and height.
const universe = Universe.new();
const width = universe.width();
const height = universe.height();

// Give the canvas room for all of our cells and a 1px border
// around each of them.
const canvas = document.getElementById("game-of-life-canvas");
canvas.height = height;
canvas.width = width;

canvas.style.width = `${width * multiplier}px`;

const ctx = canvas.getContext('2d');
const pixels = new Uint8ClampedArray(new ArrayBuffer(width * height * 4));

const renderLoop = () => {
  universe.tick();

  drawCells();

  requestAnimationFrame(renderLoop);
};

canvas.onclick = (event) => {
  let cellX = Math.floor(event.offsetX / multiplier);
  let cellY = Math.floor(event.offsetY / multiplier);
  universe.toggle_cell(cellY, cellX);
}

const getIndex = (row, column) => {
  return row * width + column;
};

const drawCells = () => {
  const cellsPtr = universe.cells();
  const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const i = getIndex(row, col);

      let color = cells[i] === Cell.Dead
        ? DEAD_COLOR
        : ALIVE_COLOR;
      let x = i * 4;
      pixels[x] = color;   // red
      pixels[x + 1] = color;   // green
      pixels[x + 2] = color;   // blue
      pixels[x + 3] = 255; // alpha
    }
  }
  const imageData = new ImageData(pixels, width, height);
  ctx.putImageData(imageData, 0, 0);
};

renderLoop();
