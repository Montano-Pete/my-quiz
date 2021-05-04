export function countAsYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'y';
}