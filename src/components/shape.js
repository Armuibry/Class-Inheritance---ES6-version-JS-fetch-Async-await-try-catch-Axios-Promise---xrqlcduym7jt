// declare class
class Shape {
    constructor(color){
        this.color = color;
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
