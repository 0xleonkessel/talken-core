const user = {
  id: 'user_001',
  name: 'alice',
  streak: 3,
  lastChallenge: Date.now() - 1000 * 60 * 60 * 24 * 1.1, // ~1.1 days ago
};

module.exports = user;
