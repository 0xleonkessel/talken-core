const progress = {};

function updateProgress(userId, language, xp) {
  if (!progress[userId]) {
    progress[userId] = {};
  }
  if (!progress[userId][language]) {
    progress[userId][language] = 0;
  }

  progress[userId][language] += xp;
  return progress[userId][language];
}

module.exports = { updateProgress, progress };
