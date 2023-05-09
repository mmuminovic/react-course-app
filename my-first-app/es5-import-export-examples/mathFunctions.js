function sum(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// exports.sum = sum;
// ...

module.exports = {
    sum: sum,
    divide: divide,
    substract: substract,
    multiply: multiply,
    PI: 3.14,
};
