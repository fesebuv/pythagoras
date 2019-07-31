const example2 = require('../../src/example2');
const { sqrNum, sqrRoot, sum } = example2;


/**
 * Note in real life we wouldn't be testing language methods or other libraries.
 * This is just for illustration purposes.
 */
describe('sum', () => {
  it('should be greater than the first input', () => {
    const num1 = 44869696887;
    const num2 = 898898899889;

    const add = sum(num1,num2);
    expect(add).toBeGreaterThan(num1);
  });

  it('should be greater than the second input', () => {
    const num1 = 44869696887;
    const num2 = 898898899889;

    const add = sum(num1,num2);
    expect(add).toBeGreaterThan(num2);
  });

  it('order operation should not matter', () => {
    const num1 = 44869696887;
    const num2 = 898898899889;

    const add = sum(num1,num2);
    expect(add).toEqual(num2 + num1);
  });

  it('adding by 0 should return the same number', () => {
    const num1 = 44869696887;
    const num2 = 0;

    const add = sum(num1,num2);
    expect(add).toEqual(num1);
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
