const user = require('./user');
const challenges = require('./challenges');
const { handleChallengeResult } = require('./index');

const selected = challenges[0]; // pick first challenge
const userAnswer = 'hello'; // mock input

console.log(`Challenge: ${selected.prompt}`);
console.log(`User Answer: "${userAnswer}"`);

const result = handleChallengeResult(user, userAnswer, selected);

console.log('\nResult:');
console.log(result);
console.log(`Updated streak: ${user.streak}`);
