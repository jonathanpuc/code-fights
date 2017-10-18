/* Task: Given an array of integers, find the pair of adjacent elements that
 has the largest product and return that product.*/

 /* Example: For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.*/

function adjacentElementsProduct(inputArray) {
  // Initialize max to compare
  var max = inputArray[0] * inputArray[1];

  for(var j= 0; j < inputArray.length-1; j++){
    // compare current max against the product of next pair in loop
    // highest one stored into max value
    max = Math.max(max, inputArray[j] * inputArray[j+1]);
  }
  return max;
}
