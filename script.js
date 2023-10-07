// Exercise 1 for String Methods - Reversing a string

function reverseString(string) {
  let newString = string.split("").reverse().join("");
  return newString;
}

console.log(reverseString("NUF si SJ gninraeL"));

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
  let reversedString = inputString.split("").reverse().join("");

  if (inputString === reversedString) {
    return true;
  } else {
    return false;
  }
}

const myPassion = "racecar";
console.log(palindrome(myPassion));

// firstly I do the reversed string, how it should be and then in the if statement I compare the strings

// an improvement for this exercise would be to remove non-alphanumeric chars and convert it to lowercase

function isPalindrome(inputString) {
  const cleanString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the clean string
  const reversedString = cleanString.split("").reverse().join("");

  // it can be written shortly the comparison between the clean string with its reverse, this is a direct ' return', but ofc it can be used the implicit one
  return cleanString === reversedString;
}

const testString2 = "hello world";
console.log(isPalindrome(testString2)); // Should print false

// Exercise 3, what if you need to reverse the order of the words from a sentence

function reverseWords(sentence) {
  reversedSentence = sentence.split(" ").reverse().join(" ");
  return reversedSentence;
  // need to split considering between each word there will be a space
}
console.log(reverseWords("mere pere"));
// if inputSentence = "mere pere", reversedSentence = "pere mere"

// Exercise 4, count how many times a character appears in a string
function countOccurrence(inputString, char) {
  let numberOfOccurrences = 0; // keep track of how many times the specified char appears in the string

  const characters = inputString.split(""); // need to convert it in an array of chars so we can iterate afterwards through each char

  for (let i = 0; i < characters.length; i++) {
    // use for to iterate through each char in the string
    if (characters[i] === char) {
      // verify if the char is the one that we search for
      numberOfOccurrences++; // if the character is found we place it and count in this variable
    }
  }
  return numberOfOccurrences; // how many times was found?
}

console.log(countOccurrence("anca", "a"));
// if you call inputSentence('anca', a) should return 2

// Exercise 5 - Truncate text - if the string exceeds the maxLength, truncate the string and add '...' at the end

function truncateText(inputString, maxLength) {
  if (inputString.length > maxLength) {   // we have the property of length on a string, we use it to compare with maxLength allowed
    inputString = inputString.slice(0, maxLength);  // with slice() we can cut off the string from specific indexes
    return `${inputString}...`;  // use object literal to retrieve the string if it exceeds 20 chars
  } else {
    return inputString; // otherwise, return it as it is
  }
}

console.log(
  truncateText(
    "this is a long text with more than 20 characters"
  ,20)
);


// Exercise 5 - check for substring

function containsSubstring(inputString, substring) {
    if(inputString.includes(substring)){
        return true;
    } else{
        return false;
    }
}
console.log(containsSubstring('Hello Anca', "test"))