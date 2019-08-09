
/**
 * findC - based on Pythagorean theorem
 * c is equal to the square root of a square plus b square.
 * Note this function has a bug.
 *
 * @param  {Number} a - first side of the triangle.
 * @param  {Number} b - second side of the triangle
 * @return {Number} - returns c, the hypotenuse.
 */
function findC(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(a, 2));
}

module.exports = {
  findC
};
