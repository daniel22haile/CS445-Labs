function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let fiboCatch = {}

function fiboProxy(n) {
    if (n <= 1) {
        return 1
    }
    if (!fiboCatch[n]) {
        fiboCatch[n] = fiboProxy(n - 1) + fiboProxy(n - 2);
    }
    return fiboCatch[n];
}

console.time("normal fibonacci");
console.log(fibonacci(20));
console.timeEnd("normal fibonacci");
console.log("--------------------")
console.time("advanced fibonacci");
console.log(fiboProxy(20));
console.timeEnd("advanced fibonacci");


// function fibonacci(n,memo) {
//     memo = memo || {}
//     if (memo[n]) {
//         return memo[n]
//     }
//     if (n <= 1) {
//         return 1
//     }
//     return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
// }