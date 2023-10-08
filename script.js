// basics, most common methods

const string01 = "let's see the length of characters";
const lengthOfString01 = string01.length;

console.log(lengthOfString01);

const string02 =
  "with this one we return the character at a specific index in the string";
const someCharacterOfString02 = string02.charAt(2);

console.log(someCharacterOfString02);

const string03 =
  "with substring() we return a specific substring of the string, need to specify start and end indexes";
const someSubstringOfString03 = string03.substring(22, 30);

console.log(someSubstringOfString03);

const string04 =
  "with slice() you can return a portion of the string between some specified start and end";
const sliceSomeOfString04 = string04.slice(27, 48);
console.log(sliceSomeOfString04);

// const string05 = "with indexOf(substring) and 'lastIndexOf(substring)' you return the index of the first or last occurrence of that substring in the string"
const string05 = "abcdefghijgadaddadgbb";
const firstStringOfString05 = string05.indexOf("b");
const lastStringOfString05 = string05.lastIndexOf("g");

console.log(firstStringOfString05);
console.log(lastStringOfString05);

const string06 =
  "startsWith(addPrefix) and endsWith(addSuffix) - this checks if the string starts with some specified substring";
const startWithYesTheString06 = string06.startsWith("yes");
const endsWithNoTheString06 = string06.endsWith("no");

// or to make it true use this
const startWithSomeStringMakeItTrue = string06.startsWith("start");
console.log(`This string really starts with that string: ${startWithSomeStringMakeItTrue}.
And the other above doesn't!`);

console.log(startWithYesTheString06);
console.log(endsWithNoTheString06);

const replaceSomeValueFromString =
  "replace all occurrences(cutMe) of a substring with another string";
const newStringWhereYouReplacedSomething = replaceSomeValueFromString.replace(
  "(cutMe)",
  ""
);

console.log(newStringWhereYouReplacedSomething);

const string07 =
  "         let's remove trailing whitespaces from a string, if they are at the beginning or at the and of it   ";
const trimString07 = string07.trim();

console.log(trimString07);

// Exercise 1 for String Methods - Reversing a string

const string08 =
  "let's split a string into an ARRAY of substrings based on the separator you mention";
const splittedString08 = string08.split(" ");

console.log(splittedString08);
export function reverseString(string) {
  let newString = string.split("").reverse().join("");
  return newString;
}

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

export function palindrome(inputString) {
  let reversedString = inputString.split("").reverse().join("");

  if (inputString === reversedString) {
    return true;
  } else {
    return false;
  }
}

const myPassion = "racecar";
palindrome(myPassion);

// firstly I do the reversed string, how it should be and then in the if statement I compare the strings

// an improvement for this exercise would be to remove non-alphanumeric chars and convert it to lowercase

export function isPalindrome(inputString) {
  const cleanString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the clean string
  const reversedString = cleanString.split("").reverse().join("");

  // it can be written shortly the comparison between the clean string with its reverse, this is a direct ' return', but ofc it can be used the implicit one
  return cleanString === reversedString;
}

const testString2 = "hello world";
// console.log(isPalindrome(testString2)); // Should print false

// Exercise 3, what if you need to reverse the order of the words from a sentence

export function reverseWords(sentence) {
  const reversedSentence = sentence.split(" ").reverse().join(" ");
  return reversedSentence;
  // need to split considering between each word there will be a space
}
reverseWords("mere pere");
// if inputSentence = "mere pere", reversedSentence = "pere mere"

// Exercise 4, count how many times a character appears in a string
export function countOccurrence(inputString, char) {
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

// if you call inputSentence('anca', a) should return 2

// Exercise 5 - Truncate text - if the string exceeds the maxLength, truncate the string and add '...' at the end

export function truncateText(inputString, maxLength) {
  if (inputString.length > maxLength) {
    // we have the property of length on a string, we use it to compare with maxLength allowed
    inputString = inputString.slice(0, maxLength); // with slice() we can cut off the string from specific indexes
    return `${inputString}...`; // use object literal to retrieve the string if it exceeds 20 chars
  } else {
    return inputString; // otherwise, return it as it is
  }
}

// Exercise 6 - check for substring

export function containsSubstring(inputString, substring) {
  if (inputString.includes(substring)) {
    return true;
  } else {
    return false;
  }
}

// Additional exercises

function processName(namesList) {
  let result = ""; // here we store the result
  const namesArray = namesList.split(","); // split the list into an array

  for (let i = 0; i < namesArray.length; i++) {
    const trimmedName = namesArray[i].trim(); // trim any space within a name
    const replacedName = trimmedName.replace("John", "Jane"); // replace a name in the TRIMMED result of names
    if (i === 0) {
      result += replacedName;
    } else {
      result += ", " + replacedName;
    }
  }
  return result;
}

const inputNames = "   John,   Alice,  Bob,   John, Jane ";

console.log(processName(inputNames));
