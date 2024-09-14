import { CantorSet, CantorSetStylized } from './src/cantorSet';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootswatch/dist/darkly/bootstrap.min.css";
import * as bootstrap from 'bootstrap';

// Setup canvas
const canvasStandard = document.getElementById('cantorCanvasStandard');
const canvasStylized = document.getElementById('cantorCanvasStylized');
const ctxStandard = canvasStandard.getContext('2d');
const ctxStylized = canvasStylized.getContext('2d');

// Function to resize the canvas and clear it before drawing
function resizeCanvas(canvas) {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Drawing the standard Cantor Set with tree visualization
const cantorSet = new CantorSet(ctxStandard, 50, 50, canvasStandard.width - 100, 6); // Adjust parameters as needed
function drawStandardCantorSet() {
  resizeCanvas(canvasStandard);
  cantorSet.drawStandardCantor(50, 50, canvasStandard.width - 100, 6); // Initial depth 6
}

// Drawing the stylized Cantor Set with random colors
const cantorSetStylized = new CantorSetStylized(ctxStylized, 50, 50, canvasStylized.width - 100, 6); // Adjust parameters as needed
function drawStylizedCantorSet() {
  resizeCanvas(canvasStylized);
  cantorSetStylized.drawStylizedCantor(50, 50, canvasStylized.width - 100, 6); // Initial depth 6
}

document.addEventListener("DOMContentLoaded", () => {
  drawStandardCantorSet();
  drawStylizedCantorSet()
  cantorSetStylized.animate();
});