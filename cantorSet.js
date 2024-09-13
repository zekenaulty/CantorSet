export class CantorSet {
    constructor(ctx, x, y, length, depth, lineThickness = 2) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.length = length;
      this.depth = depth;
      this.lineThickness = lineThickness;
    }
  
    // Draw the standard Cantor Set
    drawStandardCantor(y, length, depth) {
      if (depth === 0) return;
  
      this.ctx.beginPath();
      this.ctx.lineWidth = this.lineThickness;
      this.ctx.moveTo(this.x, y);
      this.ctx.lineTo(this.x + length, y);
      this.ctx.stroke();
  
      // Draw recursively for the two remaining segments
      const newLength = length / 3;
      this.drawStandardCantor(y + 30, newLength, depth - 1); // Top segment
      this.drawStandardCantor(this.x + 2 * newLength, y + 30, newLength, depth - 1); // Bottom segment
    }
  
    // Draw the stylized version
    drawStylizedCantor(y, length, depth) {
      if (depth === 0) return;
  
      // Add randomness to line thickness and color
      const randomThickness = Math.random() * 3 + 1;
      const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  
      this.ctx.beginPath();
      this.ctx.lineWidth = randomThickness;
      this.ctx.strokeStyle = randomColor;
      this.ctx.moveTo(this.x, y);
      this.ctx.lineTo(this.x + length, y);
      this.ctx.stroke();
  
      // Draw recursively for the two remaining segments with random shift
      const newLength = length / 3;
      const randomShift = Math.random() * 10; // Add a bit of shift to make it stylized
      this.drawStylizedCantor(y + 30 + randomShift, newLength, depth - 1); // Top segment
      this.drawStylizedCantor(this.x + 2 * newLength, y + 30 + randomShift, newLength, depth - 1); // Bottom segment
    }
  }
  
  