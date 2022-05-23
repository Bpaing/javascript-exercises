const leapYears = function(year) {
    const ruleOne = year % 4 == 0;
    const ruleTwo = year % 100 != 0;
    const ruleThree = year % 400 == 0;
    return ruleOne && (ruleTwo || ruleThree);
};

// Do not edit below this line
module.exports = leapYears;
