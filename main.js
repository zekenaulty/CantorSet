import { CantorSet, CantorSetStylized } from './src/cantorSet';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootswatch/dist/darkly/bootstrap.min.css";
import * as bootstrap from 'bootstrap';

// Setup canvas
const canvasStandard = document.getElementById('cantorCanvasStandard');
const canvasStylized = document.getElementById('cantorCanvasStylized');
const ctxStandard = canvasStandard.getContext('2d');
const ctxStylized = canvasStylized.getContext('2d');

function clearCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

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
  clearCanvas(canvasStandard);
  cantorSet.drawStandardCantor(50, 50, canvasStandard.width - 100, 6); // Initial depth 6
}

// Drawing the stylized Cantor Set with random colors
const cantorSetStylized = new CantorSetStylized(ctxStylized, 50, 50, canvasStylized.width - 100, 6); // Adjust parameters as needed
function drawStylizedCantorSet() {
  resizeCanvas(canvasStylized);
  clearCanvas(canvasStylized);
  cantorSetStylized.drawStylizedCantor(50, 50, canvasStylized.width - 100, 6); // Initial depth 6
}

document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((tabButton) => {
  tabButton.addEventListener('shown.bs.tab', (event) => {
    const targetId = event.target.getAttribute('data-bs-target');
    if (targetId === '#nodes') {
      drawStandardCantorSet();
    } else if (targetId === '#stylized') {
      drawStylizedCantorSet()
      cantorSetStylized.animate();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutTabButton = document.querySelector('#about-tab');
  const aboutTab = new bootstrap.Tab(aboutTabButton);
  aboutTab.show();
  const activeTab = document.querySelector('.tab-pane.active').id;
  if (activeTab === 'nodes') {
    drawStandardCantorSet();
  } else if (activeTab === 'stylized') {
    drawStylizedCantorSet()
    cantorSetStylized.animate();
  }
});