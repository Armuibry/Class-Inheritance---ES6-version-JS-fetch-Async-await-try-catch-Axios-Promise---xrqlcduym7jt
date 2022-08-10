// import using require

let Shape = required('./shape.js');

// declare class
class Circle {
    constructor(){

    }
    calculateArea(){
        console.log("overiden method");
    }
}

module.exports = Circle;


// export class using module.exports
