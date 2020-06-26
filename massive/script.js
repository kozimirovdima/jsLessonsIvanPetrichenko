const arr = [1, 2 , 3, 4, 10];
arr.push(2345);
arr.forEach(function(item, i, arr){
    console.log(`${item} ${i} в массиве ${arr}`);
});
const shop = prompt("", "");
const prod = shop.split(", ");
prod.sort();
console.log(prod.join(", "));  