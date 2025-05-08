const { evaluateAnswer } = require('../challengeEngine');

const testCases = [
  { input: 'hello', solution: 'hello', expected: true },
  { input: ' Hello ', solution: 'hello', expected: true },
  { input: 'HELLO', solution: 'hello', expected: true },
  { input: 'hi', solution: 'hello', expected: false },
];

testCases.forEach(({ input, solution, expected }, i) => {
  const result = evaluateAnswer(input, { solution });
  console.log(`Test ${i + 1}:`, result === expected ? '✅ pass' : '❌ fail');
});
