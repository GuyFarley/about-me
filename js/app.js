'use strict';

let visitor = prompt('Hello, what is your name?');
alert(`Welcome ${visitor}, let's play a guessing game. Please answer Yes or No to the following questions.`);

// prompt and alert #1
let questionOne = prompt('Is breakfast my favorite meal of the day?').toLowerCase();

if (questionOne === 'yes' || questionOne === 'y') {
  // console.log(`User\'s response to Q1 was '${questionOne}'. Response to user: 'You are correct! I love me some breakfast.'`);
  alert('You are correct! I love me some breakfast.');
} else if (questionOne === 'no' || questionOne === 'n') {
  // console.log(`User\'s response to Q1 was '${questionOne}'. Response to user: 'Sorry, that\'s incorrect. Breakfast is the best.'`);
  alert('Sorry, that\'s incorrect. Breakfast is the best.');
} else {
  // console.log(`User\'s response to Q1 was '${questionOne}'. Response to user: 'Please answer with a valid response (Yes or No)!'`);
  alert('Please answer with a valid response (Yes or No)!');
}

// prompt and alert #2
let questionTwo = prompt('Was I born in France?').toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y') {
  // console.log(`User\'s response to Q2 was '${questionTwo}'. Response to user: 'Sorry, that\'s incorrect. I was born in CA.'`);
  alert('Sorry, that\'s incorrect. I was born in CA.');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  // console.log(`User\'s response to Q2 was '${questionTwo}'. Response to user: 'Correct! I was not born in France, I was born in California'`);
  alert('Correct! I was NOT born in France, I was born in California');
} else {
  // console.log(`User\'s response to Q2 was '${questionTwo}'. Response to user: 'Please answer with a valid response (Yes or No)!'`);
  alert('Please answer with a valid response (Yes or No)!');
}

// prompt and alert #3
let questionThree = prompt('Have I ever been skydiving?').toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  // console.log(`User\'s response to Q3 was '${questionThree}'. Response to user: 'Nope, never been. I\'m not a fan of heights.'`);
  alert('Nope, never been. I\'m not a fan of heights.');
} else if (questionThree === 'no' || questionThree === 'n') {
  // console.log(`User\'s response to Q3 was '${questionThree}'. Response to user: 'That\'s right. I\'m not jumping out of a plane unless it\'s on fire.'`);
  alert('That\'s right. I\'m not jumping out of a plane unless it\'s on fire.');
} else {
  // console.log(`User\'s response to Q3 was '${questionThree}'. Response to user: 'Please answer with a valid response (Yes or No)!'`);
  alert('Please answer with a valid response (Yes or No)!');
}

// prompt and alert #4
let questionFour = prompt('Is my favorite music genre "country"?').toLowerCase();

if (questionFour === 'yes' || questionFour === 'y') {
  // console.log(`User\'s response to Q4 was '${questionFour}'. Response to user: 'Sorry, that\'s incorrect.'`);
  alert('Sorry, that\'s incorrect.');
} else if (questionFour === 'no' || questionFour === 'n') {
  // console.log(`User\'s response to Q4 was '${questionFour}'. Response to user: 'That\'s correct. I\'m more of an alternative rock guy.'`);
  alert('That\'s correct. I\'m more of an alternative rock guy.');
} else {
  // console.log(`User\'s response to Q4 was '${questionFour}'. Response to user: 'Please answer with a valid response (Yes or No)!'`);
  alert('Please answer with a valid response (Yes or No)!');
}

// prompt and alert #5
let questionFive = prompt('Was "No Country For Old Men" my favorite movie of 2007?').toLowerCase();

if (questionFive === 'yes' || questionFive === 'y') {
  // console.log(`User\'s response to Q5 was '${questionFive}'. Response to user: 'That's correct, ${visitor}! Although 2007 was a strong year for movies, that one was my favorite.'`);
  alert(`That's correct, ${visitor}! Although 2007 was a strong year for movies, that one was my favorite.`);
} else if (questionFive === 'no' || questionFive === 'n') {
  // console.log(`User\'s response to Q5 was '${questionFive}'. Response to user: 'Sorry ${visitor}, that\'s incorrect. You\'re probably thinking it was "There Will Be Blood" but that was actually my 2nd favorite.'`);
  alert(`Sorry ${visitor}, that's incorrect. You're probably thinking it was "There Will Be Blood" but that was actually my 2nd favorite.`);
} else {
  // console.log(`User\'s response to Q5 was '${questionFive}'. Response to user: 'Please answer with a valid response (Yes or No)!'`);
  alert(`Sorry ${visitor}, please answer with a valid response (Yes or No)!`);
}
