'use strict';
class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const testObjCalc = new Rectangle(5, 10);
console.log(testObjCalc.calcArea());
class ColoredRecatangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    test() {
        console.log(`Text: ${this.text} bgColor: ${this.bgColor}`);
    }
}
const coloredRectangle = new ColoredRecatangleWithText(10, 20, 'Test text', 'red');
coloredRectangle.test();
console.log(coloredRectangle.calcArea());