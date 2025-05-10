function getChallengeDifficulty(streak) {
  if (streak >= 10) return 'hard';
  if (streak >= 5) return 'medium';
  return 'easy';
}

module.exports = { getChallengeDifficulty };
