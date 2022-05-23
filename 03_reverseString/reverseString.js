const reverseString = function(str) {
    let arr = str.split("");
    let output = '';
    for (let i = arr.length-1; i > -1; i--) {
        let temp = output.concat(arr[i]);
        output = temp;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
