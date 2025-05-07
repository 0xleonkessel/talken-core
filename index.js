// talken-core entry point
// todo: implement quiz engine, reward logic, lenny's fury

const { getDailyReward } = require('./rewardSystem');
const { updateStreak } = require('./streakTracker');
const { evaluateAnswer } = require('./challengeEngine');

function handleChallengeResult(user, answer, challenge) {
  const isCorrect = evaluateAnswer(answer, challenge);
  if (isCorrect) {
    updateStreak(user);
    return getDailyReward(user);
  } else {
    return { reward: 0, correct: false };
  }
}

module.exports = { handleChallengeResult };
