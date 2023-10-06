// Exercise 1 for String Methods - Reversing a string


function reverseString(string) {
    let newString = string.split('').reverse().join('');
    return newString;
}

console.log(reverseString('NUF si SJ gninraeL'))

/**
 * Explanation:
 * 
 * in split('') I need to pass an empty string as separator because it needs to 
 * split the string into an array of chars
 * 
 * then with reverse() I'm doing the actual reverse
 * 
 * and then I need join('') also with this empty string inside as param because it needs
 * a separator to join the reversed array elems back into a string
 * and using an empty string will ensure there are no spaces or other chars in between
* 
 */

// Exercise 2 - Palindrome checks

function palindrome(inputString) {

    let reversedString = inputString.split('').reverse().join('') 

    if(inputString === reversedString ){
        return true
    } else{
        return false
    }
}

const myPassion = "racecar"
console.log(palindrome(myPassion))


// firstly I do the reversed string, how it should be and then in the if statement I compare the strings

// an improvement for this exercise would be to remove non-alphanumeric chars and convert it to lowercase

function isPalindrome(inputString) {
    const cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the clean string
    const reversedString = cleanString.split('').reverse().join('');

    // it can be written shortly the comparison between the clean string with its reverse, this is a direct ' return', but ofc it can be used the implicit one
    return cleanString === reversedString;
}

const testString2 = "hello world";
console.log(isPalindrome(testString2)); // Should print false