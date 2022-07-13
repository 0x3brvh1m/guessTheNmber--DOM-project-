/* coded by: Ebrahim El-Sayed
   Twitter: @ebrahim_py
   GitHub: 0x3brvh1m
*/

'use strict';
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
let score = 20;
let randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
let guess = Number(document.querySelector('.guess').value);

/*    
       Start With Buttons
       */

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⚠️No Number⚠️';
    } else if (guess === randomNumber) {
      document.querySelector('body').style.backgroundColor = '#32CD32';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = randomNumber;
      displayMessage('Correct Guess🎉🎉');
      if (score > document.querySelector('.highscore').textContent) {
        document.querySelector('.highscore').textContent = score;
      }
      /* coded by: Ebrahim El-Sayed
   Twitter: @ebrahim_py
   GitHub: 0x3brvh1m
*/
    } else if (guess !== randomNumber) {
      guess > randomNumber
        ? displayMessage('too high')
        : displayMessage('too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (score <= 1) {
    document.querySelector('.score').textContent = 0;
    displayMessage('game Over ☹️☹️');
  }
});
/* coded by: Ebrahim El-Sayed
   Twitter: @ebrahim_py
   GitHub: 0x3brvh1m
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing..');
  randomNumber = Number(Math.trunc(Math.random() * 20));
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
