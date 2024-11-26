"use strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");

// Function to increment the count
function incrementCount() {
    count++;
}

// Function to decrement the count
function decrementCount() {
    count--;
}

// Function to reset the count
function resetCount() {
    count = 0;
}

// Function to render the updated count on the screen
function renderUpdatedCount() {
    countElement.innerText = count;
}

// Event listener for increment button
incrementBtn.addEventListener("click", function () {
    incrementCount(); // Increment the count
    renderUpdatedCount(); // Update the UI with the new count
});

// Event listener for reset button
resetBtn.addEventListener("click", function () {
    resetCount(); // Reset the count to 0
    renderUpdatedCount(); // Update the UI with the new count
});

// Event listener for decrement button
decrementBtn.addEventListener("click", function () {
    decrementCount(); // Decrement the count
    renderUpdatedCount(); // Update the UI with the new count
});
