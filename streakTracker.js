function updateStreak(user) {
  const now = Date.now();
  const oneDay = 1000 * 60 * 60 * 24;
  const diff = now - user.lastChallenge;

  if (diff < oneDay * 1.5) {
    user.streak += 1;
  } else {
    user.streak = 1;
  }

  user.lastChallenge = now;
  return user;
}

module.exports = { updateStreak };
