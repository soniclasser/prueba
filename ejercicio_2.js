const operators = {
    '+': (a, b) => { return a + b },
    '-': (a, b) => { return a - b },
    '*': (a, b) => { return a * b },
    '/': (a, b) => { return a / b }
};

var functionFactory = (x,y,operator) => {return operators[operator](x,y)}