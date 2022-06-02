const palindromes = function (str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '').split('');
    const forward = cleaned.join();
    const backward = cleaned.reverse().join();
    return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
