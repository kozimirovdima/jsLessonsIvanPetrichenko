'use strict';
const obj = {
    name: "Dmitry",
    age: 26,
    makeTest: function() {
        console.log("test");
    },
    colors: {
        bg: 'red',
        border: 'black'
    }
};
let counter = 0;
for (let key in obj) {
    console.log(`test ${key} options ${obj[key]}`);
    counter++;
}
console.log(counter);
console.log(Object.keys(obj).length);
obj.makeTest();

const {bg, border} = obj.colors;
console.log(bg, border);