const findTheOldest = function(arr) {
    const ordered = arr.sort((personOne, personTwo) => {
        currentDate = (new Date().getFullYear());
        aAge =  personOne.yearOfDeath ? 
                personOne.yearOfDeath - personOne.yearOfBirth :
                currentDate - personOne.yearOfBirth;
        bAge =  personTwo.yearOfDeath ? 
                personTwo.yearOfDeath - personTwo.yearOfBirth :
                currentDate - personTwo.yearOfBirth;
        return bAge - aAge;
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
