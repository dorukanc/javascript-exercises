const repeatString = function(string, num) {

    let totalStr = ''; // init empty string

    if(num < 0){
       return 'ERROR'; 
    }else{
        while(num != 0){
        totalStr += `${string}`; 
        num--;
        }
        return totalStr;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
