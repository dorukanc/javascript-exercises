const findTheOldest = function(arr) {
    const date = new Date(); // get the recent date for missing ones
    const ages = arr.map(person => {
        if(typeof(person.yearOfDeath) !== 'number'){
            return ({ 
                name: person.name,
                age: date.getFullYear() - person.yearOfBirth
            });
        }else{
            return ({ 
                name: person.name,
                age: person.yearOfDeath - person.yearOfBirth});
        }
    });

    // sort the ages from descending order
    const oldestToYoungest = ages.sort((a,b) => b.age-a.age);
    return oldestToYoungest[0]; // return the oldest person
    
};

// Do not edit below this line
module.exports = findTheOldest;
