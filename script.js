/**
* randomInt:
* Returns a random positive integer from min to max
* @Parameters: min - the smallest possible number, max - largest possible number
* @Return: Int
* @Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}
