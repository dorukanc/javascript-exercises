const palindromes = function (str) {
    
    // cleaning part

    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');


    // first reverse the word
    // then compare
    // if it's a match then is a palindrome

    // so the question is how can i reverse a word?
    // maybe i could copy the characters in reverse to a new variable
    
    let reverseStr = ''
    for(let count = cleanedString.length - 1; count >= 0; count--){
        reverseStr += cleanedString[count];
    }
    return reverseStr === cleanedString;
    
};


// Do not edit below this line
module.exports = palindromes;
