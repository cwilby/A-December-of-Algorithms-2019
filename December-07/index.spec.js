const reprioritize = require('./index.js');

describe('reprioritize', () => {
  it('should reprioritize example input', () => {
    const queue = [
      { token: '1', id: 'a' },
      { token: '2', id: 'b' },
      { token: '3', id: 'c' },
      { token: '4', id: 'd' },
      { token: '5', id: 'e' },
    ];

    const prioritizedQueue = [
      { token: '3', id: 'c' },
      { token: '1', id: 'a' },
      { token: '2', id: 'b' },
      { token: '4', id: 'd' },
      { token: '5', id: 'e' },
    ];

    expect(reprioritize(queue, 'c')).toEqual(prioritizedQueue);
  }); 
});
