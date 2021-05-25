/*
Exercise 03 
todo - class syntax - interface - abstract - many solutions
Re-write the following code using TypeScript. Try to be as explicit as possible and add Types to everything you can. 
When you are done, transpile the TS code to JS code and inspect the JS code.
*/

// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
//     this.honk = function() {
//         console.log(` ${this.name} is saying: Toooooooooot!`);
//     };
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk(); // BMW is saying: Toooooooooot!
// console.log(car.acceleration); // 0
// car.accelerate(60);
// console.log(car.acceleration); // 60

//TODO - solution using typescript class
class Car {
    //name: string;
    public acceleration: number = 0;
    constructor(public name: string) {
        //this.name = name;
        //this.acceleration = 0
    }
    honk(): void {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
