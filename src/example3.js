
/**
 * validateNum - validates input as valid numbers.
 *
 * @param  {Number} num input
 * @return {Number}  number or throws an error. 
 */
function validateNum(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new Error('invalid number!');
  }
  return num;
}

/**
 * sum - returns the addition of two numbers.
 *
 * @param  {Number} num1 first input number.
 * @param  {Number} num2 second input number.
 * @return {Number}
 */
function sum(num1, num2) {
  return num1 + num2;
}

/**
 * sqrNum - returns the square of a number,
 *
 * @param  {Number} num - input number
 * @return {Number}
 */
function sqrNum(num) {
  return Math.pow(num, 2);
}

/**
 * sqrRoot - returns the sqr root of a num.
 *
 * @param  {Number} num - input number
 * @return {Number}
 */
function sqrRoot(num) {
  return Math.sqrt(num);
}

/**
 * findC - based on Pythagorean theorem
 * c is equal to the square root of a square plus b square.
 *
 * @param  {Number} a - first side of the triangle.
 * @param  {Number} b - second side of the triangle
 * @return {Number} - returns c the hypotenuse.
 */
function findC(a, b) {
  const numA = validateNum(a);
  const numB = validateNum(b);
  const sumSqr = sum(sqrNum(numA), sqrNum(numB));
  return sqrRoot(sumSqr);
}

module.exports = {
  findC,
  sqrNum,
  sqrRoot,
  sum,
  validateNum
};
