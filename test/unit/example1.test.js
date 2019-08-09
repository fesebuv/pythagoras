const example1 = require('../../src/example1');
const { findC } = example1;

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
