'use strict';

let score = 0;

let visitor = prompt('Hello, what is your name?');
alert(`Welcome ${visitor}, let's play a guessing game. Please answer "Yes" or "No" to the following questions.`);

function q1() {
  let questionOne = prompt('Is breakfast my favorite meal of the day?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    score = score + 1;
    alert('You are correct! I love me some breakfast.');
  } else if (questionOne === 'no' || questionOne === 'n') {
    alert('Sorry, that\'s incorrect. Breakfast is the best.');
  } else {
    alert('Please answer with a valid response (Yes or No)!');
  }
}
q1();

function q2() {
  let questionTwo = prompt('Was I born in France?').toLowerCase();

  if (questionTwo === 'yes' || questionTwo === 'y') {
    alert('Sorry, that\'s incorrect. I was born in CA.');
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    score = score + 1;
    alert('Correct! I was NOT born in France, I was born in California');
  } else {
    alert('Please answer with a valid response (Yes or No)!');
  }
}
q2();

function q3() {
  let questionThree = prompt('Have I ever been skydiving?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y') {
    alert('Nope, never been. I\'m not a fan of heights.');
  } else if (questionThree === 'no' || questionThree === 'n') {
    score = score + 1;
    alert('That\'s right. I\'m not jumping out of a plane unless it\'s on fire.');
  } else {
    alert('Please answer with a valid response (Yes or No)!');
  }
}
q3();

function q4() {
  let questionFour = prompt('Is my favorite music genre "country"?').toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y') {
    alert('Sorry, that\'s incorrect.');
  } else if (questionFour === 'no' || questionFour === 'n') {
    score = score + 1;
    alert('That\'s correct. I\'m more of an alternative rock guy.');
  } else {
    alert('Please answer with a valid response (Yes or No)!');
  }
}
q4();

function q5() {
  let questionFive = prompt('Was "No Country For Old Men" my favorite movie of 2007?').toLowerCase();

  if (questionFive === 'yes' || questionFive === 'y') {
    score = score + 1;
    alert(`That's correct, ${visitor}! Although 2007 was a strong year for movies, that one was my favorite.`);
  } else if (questionFive === 'no' || questionFive === 'n') {
    alert(`Sorry ${visitor}, that's incorrect. You're probably thinking it was "There Will Be Blood" but that was actually my 2nd favorite.`);
  } else {
    alert(`Sorry ${visitor}, please answer with a valid response (Yes or No)!`);
  }
}
q5();

function q6() {
  let myNum = 9;
  for (let i = 0; i < 4; i++) {

    let questionSix = parseInt(prompt('Please guess a number between 1 and 10'));
    if (questionSix === myNum) {
      score = score + 1;
      alert('That\'s correct!');
      break;
    } else if ((questionSix < myNum) && (i <= 2)) {
      alert('Your number is too low! Please try again.');
    } else if ((questionSix > myNum) && (i <= 2)) {
      alert('Your number is too high! Please try again.');
    } else if ((questionSix !== myNum) && (i === 3)) {
      alert('Sorry, you are out of attempts! The correct answer was 9.');
    }
  }
}
q6();

function q7() {
  let myFoods = ['pancakes', 'steak', 'cereal'];

  for (let i = 0; i < 6; i++) {
    let questionSeven = prompt(`What is one of my favorite foods? You get 6 tries...`).toLowerCase();
    for (let f = 0; f < myFoods.length; f++) {
      if (questionSeven === myFoods[f]) {
        score = score + 1;
        alert(`That's correct!`);
        i = 6;
      }
    }
  }
  alert(`I would have accepted any of the following answers: ${myFoods[0]}, ${myFoods[1]}, or ${myFoods[2]}.`);
}
q7();

alert(`You guessed ${score} out of 7 questions correctly!`);
