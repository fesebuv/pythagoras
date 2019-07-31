const { findC } = require('../../src');

describe('pythagoras test', () => {
  describe('finding C', () => {
    it('should return 5', () => {
      const c = findC(3,4);
      expect(5).toBe(c);
    });
  });
});
