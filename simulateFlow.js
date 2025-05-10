const user = require('./user');
const challenges = require('./challenges');
const { handleChallengeResult } = require('./index');
const { getChallengeDifficulty } = require('./difficultyScaler');
const { t } = require('./localization');

const lang = 'es'; // user UI language

const selected = challenges[0];
const userAnswer = 'hello';

console.log(`--- ${t(lang, 'challengeComplete')} ---`);
console.log(`Prompt: ${selected.prompt}`);
console.log(`User Answer: "${userAnswer}"`);

const result = handleChallengeResult(user, userAnswer, selected);
const difficulty = getChallengeDifficulty(user.streak);

console.log('\nResult:');
console.log(`${t(lang, 'streak')}: ${user.streak}`);
console.log(`${t(lang, 'xp')}: +${result.reward} XP`);
console.log(`Difficulty Level: ${difficulty}`);
console.log(`\n→ ${t(lang, 'claim')}`);
