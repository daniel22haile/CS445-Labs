"use strict";

/*
Create a method named removeDuplicates() method which will remove duplicates in an Array. 
Make sure this method is available for only Array objects which means can call like code below. 
In the code below, this removeDuplicates()  method runs synchronously.
*/
Array.prototype.removeDuplicates = function() {

    console.log([...new Set(this)])
};

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates();
console.log(`end`);

// Output:
// start
// [4, 1, 5, 7, 2, 3, 6]
// end

//todo - Rewrite an asynchronous version of it removeDuplicatedAsync() as following:
Array.prototype.removeDuplicatesAsync = function() {

    setTimeout(() => { console.log([...new Set(this)]) }, 1000)
};
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]