const calculateCheatingProbability = require('./index.js');

describe('calculateCheatingProbability', () => {
  it('should calculate cheating probabilities for example input', () => {
    const matrix = [
      ['CSE', 'ECE', 'CSE'],
      ['ECE', 'ECE', 'CSE']
    ];

    expect(calculateCheatingProbability(matrix)).toEqual([
      [0, 0.225, 0.2],
      [0.225, 0.5, 0.3]
    ]);
  });
});
