const example2 = require('../../src/example2');
const { findC, sqrNum, sqrRoot, sum } = example2;

describe('findC', () => {
  /**
   * Off the top of my head 3^2+4^2=5^2
   */
  describe('when passing 3 and 4', () => {
    it('should return 5', () => {
      const c = findC(3, 4);
      expect(c).toEqual(5);
    });
  });
});

/**
 * Note in real life we wouldn't test language methods or other libraries.
 * This is just for illustration purposes.
 */
describe('sum', () => {
  it('should be greater than the first input', () => {
    const num1 = 44869696887;
    const num2 = 898898899889;

    const add = sum(num1, num2);
    expect(add).toBeGreaterThan(num1);
  });

  it('should be greater than the second input', () => {
    const num1 = 44869696887;
    const num2 = 898898899889;

    const add = sum(num1, num2);
    expect(add).toBeGreaterThan(num2);
  });

  it('order operation should not matter', () => {
    const num1 = 44869696887;
    const num2 = 898898899889;

    const add1 = sum(num1, num2);
    const add2 = sum(num2, num1);
    expect(add1).toEqual(add2);
  });

  it('adding by 0 should return the same number', () => {
    const num = 44869696887;

    const add = sum(num, 0);
    expect(add).toEqual(num);
  });
});

describe('sqrNum', () => {
  it('should be equal than multiplying by itself', () => {
    const num = 398876765;
    const sqr = sqrNum(num);
    expect(sqr).toEqual(num * num);
  });

  it('should be greater than itself', () => {
    const num = 398876765;
    const sqr = sqrNum(num);
    expect(sqr).toBeGreaterThan(num);
  });
});

describe('sqrRoot', () => {
  it('sqrNum should cancel out the sqrRoot', () => {
    const num = 9;
    const numSqrd = sqrNum(num);
    expect(num).toEqual(sqrRoot(numSqrd));
  });
});
