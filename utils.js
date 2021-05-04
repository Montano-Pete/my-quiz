export function countAsYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'y';
}

export function countAsNo(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'n';
}