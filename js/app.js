'use strict';

let score = 0;

let visitor = prompt('Hello, what is your name?');
alert(`Welcome ${visitor}, let's play a guessing game. Please answer "Yes" or "No" to the following questions.`);

let questArray = [
  `Is breakfast my favorite meal of the day?`, //0
  `Was I born in France?`, //1
  `Have I ever been skydiving?`, //2
  `Is my favorite music genre "country"?`, //3
  `Was "No Country For Old Men" my favorite movie of 2007?`] //4

let respArray = [
  null, //0
  `You are correct! I love me some breakfast.`, //1
  `Sorry, that's incorrect. Breakfast is the best.`, //2
  `Sorry, that's incorrect. I was born in CA.`, //3
  `Correct! I was NOT born in France, I was born in California`, //4
  `Nope, never been. I'm not a fan of heights.`, //5
  `That's right. I'm not jumping out of a plane unless it's on fire.`, //6
  `Sorry, that's incorrect.`, //7
  `That's correct. I'm more of an alternative rock guy.`, //8
  `That's correct, ${visitor}! Although 2007 was a strong year for movies, that one was my favorite.`, //9
  `Sorry ${visitor}, that's incorrect. You're probably thinking it was "There Will Be Blood" but that was actually my 2nd favorite.`, //10
  `Sorry ${visitor}, please answer with a valid response (Yes or No)!`] //11

let n = 2;

function guessGame() {
  for (let i = 0; i < 5; i++) {
    let question = prompt(questArray[i]).toLowerCase();

    if (question === 'yes' || question === 'y') {
      score = score + 1;
      alert(respArray[n - 1]);
    } else if (question === 'no' || question === 'n') {
      alert(respArray[n]);
    } else {
      alert(respArray[11]);
    }
    n = n + 2;
  }
}
guessGame(questArray, respArray);

function q6() {
  // assigns myNum as a random number between 1 and 10
  let myNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
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
  let myFoods = ['pancakes', 'steak', 'cereal', 'bbq', 'waffles', 'pad thai', 'sesame chicken'];

  for (let i = 0; i < 6; i++) {
    let questionSeven = prompt(`What is one of my favorite foods ? You get 6 tries...`).toLowerCase();
    for (let f = 0; f < myFoods.length; f++) {
      if (questionSeven === myFoods[f]) {
        score = score + 1;
        alert(`That's correct!`);
        i = 6;
      }
    }
  }
  alert(`I would have accepted any of the following answers: ${myFoods[0]}, ${myFoods[1]}, ${myFoods[2]}, ${myFoods[3]}, ${myFoods[4]}, ${myFoods[5]}, or ${myFoods[6]}.`);
}
q7();

alert(`You guessed ${score} out of 7 questions correctly!`);

