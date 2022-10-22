const findTheOldest = function(people) {
    let tempname;
    let age = 0;
    const today = new Date()

    for (let name of people){

        if (name.yearOfDeath === undefined){
            name.yearOfDeath = today.getFullYear();
        }

        let tempAge = name.yearOfDeath-name.yearOfBirth;
        if(tempAge>age){
            age = tempAge;
            tempname = name;
        }
    }
    return tempname;
};

// Do not edit below this line
module.exports = findTheOldest;
