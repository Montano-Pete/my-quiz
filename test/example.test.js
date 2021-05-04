// IMPORT MODULES under test here:
import { countAsYes } from '../utils.js';

const test = QUnit.test;




test('if user input beings with y, return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countAsYes('Yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('if user input begins with n, return false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countAsYes('No');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
