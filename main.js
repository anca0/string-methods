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
    input: "NUF si SJ gninraeL",
  },
  {
    name: "Exercise 2",
    requirement:
      "Write a JS function using string methods to check if a given word is a palindrome",
    function: palindrome,
    input: "racecar",
  },
  {
    name: "Exercise 3",
    requirement:
      "Write a JavaScript function to reverse the order of the words from a sentence.",
    function: reverseWords,
    input: "apples berries",
  },
  {
    name: "Exercise 4",
    requirement:
      "Write a JavaScript function to check how many times a character appears in a string.",
    function: countOccurrence,
    input: "anaaremere",
    character: "a",
  },
  {
    name: "Exercise 5",
    requirement:
      "Write a JavaScript function to truncate text if the string exceeds a maxLength you provide.",
    function: truncateText,
    input: "this is a long text, with more than 20 characters",
    maxLength: 20,
  },
  {
    name: "Exercise 6",
    requirement:
      "Write a JavaScript function to check if a substring exists in a given string.",
    function: containsSubstring,
    input: "Hello, Anca",
    substring: "Anca",
  },
];

// function to add exercises to the DOM
function addExercisesToDOM() {
  const exerciseContainer = document.getElementById("exercises-container");

  exercises.forEach((exercise, index) => {
    const exerciseDiv = document.createElement("div");
    exerciseDiv.classList.add("exercise");

    // add exercise name
    const nameElement = document.createElement("h3");
    nameElement.textContent = `Exercise ${index + 1}: ${exercise.name}`;
    exerciseDiv.appendChild(nameElement);

    // show requirement
    const requirementElement = document.createElement("p");
    requirementElement.textContent = `Requirement: ${exercise.requirement}`;
    exerciseDiv.appendChild(requirementElement);

    const resultElement = document.createElement("p");
    // Call the function with exercise-specific input
    const result = exercise.function(exercise.input, exercise.character, exercise.maxLength, exercise.substring);
    resultElement.textContent = `Result: ${result}`;
    exerciseDiv.appendChild(resultElement);

    exerciseContainer.appendChild(exerciseDiv);
  });
}

addExercisesToDOM();
