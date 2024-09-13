import { CantorSet } from './cantorSet';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootswatch/dist/darkly/bootstrap.min.css";
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
  
  // Drawing the standard Cantor Set
  function drawStandardCantorSet() {
    resizeCanvas(canvasStandard);
    const cantorSet = new CantorSet(ctxStandard, 50, 50, canvasStandard.width - 100, 6); // Adjust parameters as needed
    cantorSet.drawStandardCantor(50, canvasStandard.width - 100, 6); // Initial depth 6
  }
  
  // Drawing the stylized Cantor Set
  function drawStylizedCantorSet() {
    resizeCanvas(canvasStylized);
    const cantorSet = new CantorSet(ctxStylized, 50, 50, canvasStylized.width - 100, 6); // Adjust parameters as needed
    cantorSet.drawStylizedCantor(50, canvasStylized.width - 100, 6); // Initial depth 6
  }
  
  // Event listeners to trigger the drawings
  document.getElementById('drawStandardBtn').addEventListener('click', drawStandardCantorSet);
  document.getElementById('drawStylizedBtn').addEventListener('click', drawStylizedCantorSet);
  
  // Automatically draw the default (standard) version on page load
  drawStandardCantorSet();