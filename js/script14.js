'use strict';

function User(name, id) {
this.name = name;
this.id = id;
this.human = true;
this.hello = function() {
    console.log(`Hello ${this.name}`);
};
}

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello! ${this.name}`)
    }
    exit() {
        console.log(`User ${this.name} exit`)
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} exit`);
};

const ivan = new User ('Ivan', 24);
const alex = new User ('Alex', 31);

ivan.exit();

console.log(ivan);
console.log(alex);