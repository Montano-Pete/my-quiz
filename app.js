import { countAsYes } from '../utils.js';
import { countAsNo } from '../utils.js';

const quizButton = document.getElementById('button');
const results = document.getElementById('results');

quizButton.addEventListener('click', () => {

    alert('Welcome to the Power Rangers quiz!');

    const engageQuiz = confirm('Proceed to quiz?');
    
    if (engageQuiz === false) {
        return;
    }

    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');

    const firstAnswer = prompt('Is Power Rangers a wholly original show?');
    const secondAnswer = prompt('The giant assault machines Power Rangers operates are called Zords?');
    const thirdAnswer = prompt('Red, Blue, and Yellow rangers are the only three colors to appear in every ranger team?');


    let points = 0;

    if (countAsNo(firstAnswer)) {
        points = points + 1;
    }

    if (countAsYes(secondAnswer)) {
        points = points + 1;
    }

    if (countAsNo(thirdAnswer)) {
        points = points + 1;
    }

    results.textContent = `Yo ${firstName} ${lastName}! You finised the quiz with a score of ${points} out of 3.`;

    console.log(points);
});