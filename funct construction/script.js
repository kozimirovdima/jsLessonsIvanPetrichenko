function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
User.prototype.exit = function() {
    console.log(`user ${this.name} exit`);
};
const ivan = new User('Ivan', 25);
const diman = new User('Dima', 20);

ivan.exit();
diman.exit();
console.log(ivan);
console.log(diman);