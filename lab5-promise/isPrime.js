"use strict"

const prompt = require("prompt-sync")();
/*
Change isPrime() that takes in a single number parameter and returns a new promise.
Using setTimeout and after 500 milliseconds, the promise will either resolove or reject.
if the input is prime number, the promise resolves with {prime: true}.
if the input is not a prime number, it rejects with {prime: false}.

Write code and call your promisified function and test it for both scenarios (resolve and reject)

You may use the following function to determine if the number is prime or not
*/
const input = +prompt("Enter an integer number: ");
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}
const promise = new Promise(function(resolve, reject) {
    if (isPrime(input)) {
        setTimeout(() => resolve("{prime: true}"), 500);
    } else {
        setTimeout(() => reject(new Error("{prime: false}")), 500);
    }
});

//TODO -test
console.log('start');
promise.then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');