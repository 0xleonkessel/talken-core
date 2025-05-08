const { getDailyReward } = require('../rewardSystem');

const testUsers = [
  { name: 'lowStreak', streak: 2 },
  { name: 'midStreak', streak: 10 },
  { name: 'highStreak', streak: 30 },
];

testUsers.forEach((user) => {
  const result = getDailyReward(user);
  console.log(`${user.name}: ${result.reward} TLKN`);
});
