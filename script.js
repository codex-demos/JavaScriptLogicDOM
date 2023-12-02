'use strict';

const messageArea = document.querySelector('#content');
const button = document.querySelector('button');
const inputElement = document.querySelector('#user-input');

function displayOutput(message) {
  const p = document.createElement('p');
  p.textContent = message;
  messageArea.appendChild(p);
}

button.addEventListener('click', function () {
  if (inputElement.value === 12) {
    displayOutput(inputElement.value);
    displayOutput('You are correct! ');
  } else if (inputElement.value < 12) {
    displayOutput(inputElement.value);
    displayOutput('Higher! ');
  } else if (inputElement.value > 12) {
    displayOutput(inputElement.value);
    displayOutput('Lower! ');
  } else {
    displayOutput(inputElement.value);
    displayOutput('Invalid Input! Guess a number! ');
  }
});
