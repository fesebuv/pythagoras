/**
 * findC - based on Pythagorean theorem
 * c is equal to the square root of a square plus b square.
 *
 * @param  {Number} a - first side of the triangle.
 * @param  {Number} b - second side of the triangle
 * @return {Number} - returns c the hypotenuse.
 */
function findC(a, b) {
  const sumSqr = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(sumSqr);
}

module.exports = {
  findC
};
