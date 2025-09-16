// const reverseString = function(str) {
    
//     let splitStr = str.split(''); // split the string into characters
//     let reversedStr = ''; // init empty string

//     // loop over characters in reverse then add to empty string
//     for(let i = splitStr.length - 1; i >= 0; i--){
//         reversedStr += splitStr[i];
//     }
//     return reversedStr;
// };


const reverseString = function(str) {
    
    let reversedStr = ''; // init empty string

    // loop over characters in reverse then add to empty string
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
