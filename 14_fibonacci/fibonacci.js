const fibonacci = function(number) {
    // takes the last 2 values and sum them up

    // 0-1-1-2-3-5-8 goes like this
    
    if(number < 0){
       return 'OOPS';
    }else{
        let arr = [0, 1];
        for(let i=2; i<=number; i++){
            arr[i] = arr[i-1] + arr[i-2]; 
        }
        return arr[number]; 
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
