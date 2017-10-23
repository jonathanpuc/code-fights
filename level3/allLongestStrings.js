/* Task: Given an array of strings, return another array containing all of its longest strings. */

/* Example: For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"]. */

function allLongestStrings(inputArray) {
    // start off with first element
    var largestLength = inputArray[0].length;
    
    // iterate through array to find out longest length
    inputArray.forEach(string => {
       if (string.length > largestLength) {
           largestLength = string.length
       } 
    })
    
    // filter by longest length
    const longStrings = inputArray.filter(string => string.length === largestLength);
    
    return longStrings;
}
