const getPrimeFibonacciNumbersUpTo = require('./index.js');

describe('getPrimeFibonacciNumbersUpTo', () => {
  it('should get the first 3 prime fibs', () => {
    expect(getPrimeFibonacciNumbersUpTo(3)).toEqual([2, 3, 5]);
  });

  it('should get the first 5 prime fibs', () => {
    expect(getPrimeFibonacciNumbersUpTo(5)).toEqual([2, 3, 5, 13, 89]);
  });

  it('can only get the first 11 prime fibs in JavaScript', () => {
    expect(getPrimeFibonacciNumbersUpTo(11)).toEqual([
      2,
      3,
      5,
      13,
      89,
      233,
      1597,
      28657,
      514229,
      433494437,
      2971215073
    ]);
  });
});
