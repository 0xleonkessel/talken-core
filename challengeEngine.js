function evaluateAnswer(answer, challenge) {
  return answer.trim().toLowerCase() === challenge.solution.toLowerCase();
}

module.exports = { evaluateAnswer };
