// import using require

let Shape = required('./shape.js');

// declare class
class Circle extends Shape {
    constructor(){

    }
    calculateArea(){
        console.log("overiden method");
    }
}

module.exports = Circle;


// export class using module.exports