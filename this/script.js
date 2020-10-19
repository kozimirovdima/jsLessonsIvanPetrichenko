'use strict';

function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

function sayName() {
    console.log(this.name);
}
const name = {
    name: "Dinozavr"
}
sayName.call(name);
sayName.apply(name);


function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(26));