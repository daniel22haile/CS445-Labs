/*
Implement the Decorator pattern to add a logger to any object (add behavior). 
A logger method will log a message to the console.
*/
class User {
    constructor(name) {
        this.name = name;
    }
}

class Decorator {
    constructor(user, id, department) {
        this.name = user.name;
        this.department = department;
        this.id = id
    };
    log() {
        console.log(`User: ${this.name}, Department: ${this.department}, Id: ${this.id}`)
    }
}

const user = new User("Daniel");
const decorator = new Decorator(user, 2021, "MSD");
decorator.log()