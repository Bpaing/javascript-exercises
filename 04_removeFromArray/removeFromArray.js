const removeFromArray = function(arr, ...argsToRemove) {
    let values = Array.from(argsToRemove);
    let output = arr;
    for (let i = 0; i < values.length; i++) {
        output = output.filter(num => num !== values[i]);
    }
    return output;
};


// Do not edit below this line
module.exports = removeFromArray;
