import { Node } from './node.js';

const h = 90;

export class CantorSet {
  constructor(ctx, x, y, length, depth, lineThickness = 2) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.length = length;
    this.depth = depth;
    this.lineThickness = lineThickness;
    this.rootNode = null; // To store the root of the tree
  }

  // Draw the standard Cantor Set and build the binary tree
  drawStandardCantor(x, y, length, depth, parentNode = null) {
    if (depth === 0) return null;

    // Calculate the midpoint of the line segment
    const midX = x + length / 2;
    const midY = y;

    // Draw a circle at the midpoint to represent the node
    this.ctx.beginPath();
    this.ctx.arc(midX, midY, 5, 0, 2 * Math.PI); // Node size
    this.ctx.strokeStyle = 'silver';
    this.ctx.stroke();

    // Create a new node for this segment
    const node = new Node(`${depth}`); // You can assign any value
    node.x = midX;
    node.y = midY;

    // Draw the line segment
    this.ctx.beginPath();
    this.ctx.lineWidth = this.lineThickness;
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + length, y);
    this.ctx.stroke();

    // If there is a parent node, draw a line to it
    if (parentNode) {
      this.ctx.beginPath();
      this.ctx.moveTo(parentNode.x, parentNode.y);
      this.ctx.lineTo(node.x, node.y);
      this.ctx.strokeStyle = 'silver'; // Line color between nodes
      this.ctx.stroke();
    } else {
      // If no parent, this node is the root
      this.rootNode = node;
    }

    // Prepare for recursive calls
    const newLength = length / 3;
    const newY = y + h; // Move down for the next level

    // Recursively draw the left and right segments
    node.left = this.drawStandardCantor(x, newY, newLength, depth - 1, node);
    node.right = this.drawStandardCantor(x + 2 * newLength, newY, newLength, depth - 1, node);

    return node;
  }

  // Draw the stylized Cantor Set with random colors and build the binary tree
  drawStylizedCantor(x, y, length, depth, parentNode = null) {
    if (depth === 0) return null;

    // Add randomness to line thickness and color
    const randomThickness = Math.random() * 3 + 1;
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Calculate the midpoint of the line segment
    const midX = x + length / 2;
    const midY = y;

    // Draw a circle at the midpoint to represent the node
    this.ctx.beginPath();
    this.ctx.arc(midX, midY, 5, 0, 2 * Math.PI); // Node size
    this.ctx.fillStyle = 'red'; // Node color
    this.ctx.fill();

    // Create a new node for this segment
    const node = new Node(`${depth}`);
    node.x = midX;
    node.y = midY;

    // Draw the line segment with random color and thickness
    this.ctx.beginPath();
    this.ctx.lineWidth = randomThickness;
    this.ctx.strokeStyle = randomColor;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + length, y);
    this.ctx.stroke();

    // If there is a parent node, draw a line to it
    if (parentNode) {
      this.ctx.beginPath();
      this.ctx.moveTo(parentNode.x, parentNode.y);
      this.ctx.lineTo(node.x, node.y);
      this.ctx.strokeStyle = 'silver'; // Line color between nodes
      this.ctx.stroke();
    } else {
      // If no parent, this node is the root
      this.rootNode = node;
    }

    // Prepare for recursive calls with random shift
    const newLength = length / 3;
    const randomShift = Math.random() * 10; // Add a bit of shift to make it stylized
    const newY = y + 30 + randomShift; // Move down for the next level

    // Recursively draw the left and right segments
    node.left = this.drawStylizedCantor(x, newY, newLength, depth - 1, node);
    node.right = this.drawStylizedCantor(x + 2 * newLength, newY, newLength, depth - 1, node);

    return node;
  }
}

export class CantorSetStylized {
  constructor(ctx, x, y, length, depth, lineThickness = 2) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.length = length;
    this.depth = depth;
    this.lineThickness = lineThickness;
    this.rootNode = null;
    this.animationFrame = null;
  }

  // Draw the stylized Cantor Set with random colors and animation loop
  drawStylizedCantor(x, y, length, depth, parentNode = null, time = 0) {
    if (depth === 0) return null;

    // Time-dependent randomness to animate volatility
    const randomThickness = (Math.sin(time / 100) + 2) * Math.random() * 3 + 1; // Thickness changes over time
    const randomColor = `hsl(${(time + Math.random() * 360) % 360}, 100%, 50%)`; // Color evolves over time

    // Draw the line segment with random color and thickness
    this.ctx.beginPath();
    this.ctx.lineWidth = randomThickness;
    this.ctx.strokeStyle = randomColor;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + length, y);
    this.ctx.stroke();

    // Calculate the midpoint of the line segment
    const midX = x + length / 2;
    const midY = y;

    // Draw a circle at the midpoint to represent the node
    /*
    this.ctx.beginPath();
    this.ctx.arc(midX, midY, 5, 0, 2 * Math.PI); // Node size
    this.ctx.strokeStyle = 'silver'; // Node color
    this.ctx.stroke();
    */
    // Create a new node for this segment
    const node = new Node(`${depth}`);
    node.x = midX;
    node.y = midY;

    // If there is a parent node, draw a line to it
    if (parentNode) {
      this.ctx.beginPath();
      this.ctx.moveTo(parentNode.x, parentNode.y);
      this.ctx.lineTo(node.x, node.y);
      this.ctx.strokeStyle = 'silver'; // Line color between nodes
      this.ctx.stroke();
    } else {
      // If no parent, this node is the root
      this.rootNode = node;
    }

    // Prepare for recursive calls with more volatile shifts
    const newLength = length / 3;
    const randomShift = (Math.sin(time / 50) + Math.random()) * 10; // Make shifts more volatile
    const newY = y + h + randomShift; // Move down for the next level

    // Recursively draw the left and right segments with evolving time
    node.left = this.drawStylizedCantor(x, newY, newLength, depth - 1, node, time + 1);
    node.right = this.drawStylizedCantor(x + 2 * newLength, newY, newLength, depth - 1, node, time + 1);

    return node;
  }

  // Animation loop
  animate() {
    const ctx = this.ctx;
    let time = 0;

    const loop = () => {
      time += 1;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas before each frame

      this.drawStylizedCantor(50, 50, ctx.canvas.width - 100, this.depth, null, time); // Draw with evolving time

      this.animationFrame = requestAnimationFrame(loop); // Keep looping
    };

    loop(); // Start the loop
  }

  // Stop the animation loop if needed
  stopAnimation() {
    cancelAnimationFrame(this.animationFrame);
  }
}

