const {
  getNumberish
} = require('./index');

describe('getSevenishNumber', () => {
  it('can find sevenish numbers', () => {
    expect(getNumberish(7)(1)).toBe(1);
    expect(getNumberish(7)(2)).toBe(7);
    expect(getNumberish(7)(3)).toBe(8);
    expect(getNumberish(7)(4)).toBe(49);
    expect(getNumberish(7)(5)).toBe(50);
    expect(getNumberish(7)(10)).toBe(350);
    expect(getNumberish(7)(1000)).toBe(47076750);
  });

  it('can also find tenish (binary) numbers', () => {
    expect(getNumberish(10)(1)).toBe(1);
    expect(getNumberish(10)(2)).toBe(10);
    expect(getNumberish(10)(3)).toBe(11);
    expect(getNumberish(10)(4)).toBe(100);
    expect(getNumberish(10)(5)).toBe(101);
    expect(getNumberish(10)(10)).toBe(1010);
    expect(getNumberish(10)(1000)).toBe(1111101000);
  });
});
