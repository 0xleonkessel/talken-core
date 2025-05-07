function getDailyReward(user) {
  const baseReward = 5;
  const streakBonus = Math.min(user.streak * 0.5, 10);
  return {
    reward: baseReward + streakBonus,
    correct: true,
  };
}

module.exports = { getDailyReward };

