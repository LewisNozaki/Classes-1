/////////////////////
// Class example 1 //
/////////////////////

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

/////////////////////
// Class example 2 //
/////////////////////

class Human {
  constructor(gender, name) {
    this.gender = gender;
    this.name = name;
  }
  
  getGender() {
    return this.gender;
  }
  
  getName() {
    return this.name;
  }
}

class Person extends Human {
  constructor(country, age) {
    // super() will bring in all the constructor properties from the inherited class to be used.
    super();
    this.country = country;
    this.age = age;
  }
  
  getDetails() {
    return `${this.name} is ${this.gender} that is ${this.age} years old and lives in ${this.country}.`
  }
}

const franklin = new Person();

franklin.gender = "boy";
franklin.name = "Franklin Nozaki";
franklin.age = 10;
franklin.country = "USA";

console.log(franklin.getDetails())

/////////////////////
// Class example 3 //
/////////////////////

// refactor using ES7+
class Shape {
  height = height;
  width = width;
  
  getHeight = () => this.height;
  
  getWidth = () => this.width;
}



