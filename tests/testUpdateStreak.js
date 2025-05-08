const { updateStreak } = require('../streakTracker');

let user = {
  streak: 2,
  lastChallenge: Date.now() - 1000 * 60 * 60 * 24 * 1.1, // ~1.1 days ago
};

user = updateStreak(user);
console.log(`New streak: ${user.streak} (expected 3)`);

user.lastChallenge = Date.now() - 1000 * 60 * 60 * 24 * 3; // 3 days ago
user = updateStreak(user);
console.log(`Reset streak: ${user.streak} (expected 1)`);
