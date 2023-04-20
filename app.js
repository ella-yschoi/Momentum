const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
};

const plusResult = calculator.plus(2, 3); // 5
const minusResult = calculator.minus(plusResult, 10); // -5
const timesResult = calculator.times(10, minusResult); // 
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(plusResult);