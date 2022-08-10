// declare class
class Shape {
    constructor(){
        this.color = "red";
    }

    drawShape(){
        console.log("draw Shape");
    }

    calculateArea(){
        console.log("calculate Area");
    }
}

module.exports = Shape;

// export class using module.exports
