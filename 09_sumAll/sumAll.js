const sumAll = function(num1, num2) {
    
    // check is int
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';

    // check the input
    if(num1 < 0 || typeof num1 !== 'number' && num2 < 0 || typeof num2 !== 'number'){
        return 'ERROR';
    }else{

        let total = 0;
        if(num1 > num2){
        for(let counter = num2; counter <= num1; counter++){
            total += counter;
        }   
        }else if(num1 < num2){
            for(let counter = num1; counter <= num2; counter++){
                total += counter;
            }   
        }
        return total;
    }

};

// Do not edit below this line
module.exports = sumAll;
