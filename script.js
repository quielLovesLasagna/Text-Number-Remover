"use strict";

// Elements
const form = document.querySelector("form");
const inpTextArea = document.getElementById("input");
const outTextArea = document.getElementById("output");
// End of Elements

// Functions
// replace all numbers with spaces
const transformTxt = () => {
  return inpTextArea.value.replace(/\d+/g, "");
};

// update output textarea with transformed text
const createOutput = () => {
  outTextArea.value = "";
  outTextArea.value = transformTxt();
};
// End of Functions

// Event Handlers
form.addEventListener("submit", (e) => {
  e.preventDefault();
  createOutput();
});

inpTextArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    createOutput();
  }
});
// End of Event Handlers
