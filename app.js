// import functions and grab DOM elements
import { countAsYes } from '../utils.js';

const quizButton = document.getElementById('button');
const results = document.getElementById('results')

// initialize state

// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {

    alert('Welcome to the Power Rangers quiz!')

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

    if (countAsYes(firstAnswer)) {
        points = points++;
    }

    if (countAsYes(secondAnswer)) {
        points = points++;
    }

    if (!countAsYes(thirdAnswer)) {
        points = points++;
    }


    results.textContent = `Yo ${firstName} ${lastName}! You finised the quiz with a score of ${points} out of 3.`;


    
});