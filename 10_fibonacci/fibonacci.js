const fibonacci = function(n) {
    const num = parseInt(n);
    return num < 0 ? 'OOPS'
        : num < 1 ? 0 
        : num <= 2 ? 1
        : fibonacci(num-1) + fibonacci(num-2);

};

// Do not edit below this line
module.exports = fibonacci;
