import {
  reverseString,
  palindrome,
  reverseWords,
  countOccurrence,
  truncateText,
  containsSubstring,
} from "./script.js";

// define exercises in a list of objects
const exercises = [
  {
    name: "Exercise 1",
    requirement: "Write a JS function to reverse the characters from a word",
    function: reverseString,
  },
  {
    name: "Exercise 2",
    requirement:
      "Write a JS function using string methods to check if a given word is a palindrome",
    function: palindrome,
  },
  {
    name: "Exercise 3",
    requirement:
      "Write a JavaScript function to reverse the order of the words from a sentence.",
    function: reverseWords,
  },
  {
    name: "Exercise 4",
    requirement:
      "Write a JavaScript function to check how many times a character appears in a string.",
    function: countOccurrence,
  },
  {
    name: "Exercise 5",
    requirement:
      "Write a JavaScript function to truncate text if the string exceeds a maxLength you provide.",
    function: truncateText,
  },
  {
    name: "Exercise 6",
    requirement:
      "Write a JavaScript function to check if a substring exists in a given string.",
    function: containsSubstring,
  },
];

// function to add exercises to the DOM
function addExercisesToDOM() {
  const exerciseList = document.getElementById("exercises-list");

  exercises.forEach((exercise) => {
    const exerciseItem = document.createElement("li");

    const result = exercise.function()

    exerciseItem.innerHTML = `
            <h2>${exercise.name}</h2>
            <p><strong>Requirement:</strong> ${exercise.requirement}</p>
            <p><strong>Result:</strong> ${result}</p>
        `;
    exerciseList.appendChild(exerciseItem);
  });
}

addExercisesToDOM();
