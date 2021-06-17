// Class example 1
class Shape {
  // Properties 
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
// Methods
  getHeight() {
    return this.height;
  }
  
  getWidth() {
    return this.width;
  }
}

// Create a new instance of Shape named box and define properties.
const box = new Shape();
box.height = 10;
box.width = 20;

console.log(box.getHeight()); // 10
console.log(box.getWidth()); // 20

