/* Task: After they became famous, the CodeBots all decided to move to a new building and live together.
 The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room.
  Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them.
   That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

Help the bots calculate the total price of all the rooms that are suitable for them.

Example

For
matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]

the output should be
matrixElementsSum(matrix) = 9.
*/

function matrixElementsSum(matrix) {
    var priceTotal = 0;
    
    var bannedIndex = [];
    // iterate through row
    for (let i = 0, n = matrix.length; i < n; i ++) {
        // iterate through column
        for (let j = 0; j < matrix[i].length; j++) {
            // if element is equal to 0
            if(matrix[i][j] === 0) {
                // add its column index to banned
                bannedIndex.push(j)
                // if its column index is not banned, add elements price to priceTotal
            } else if(bannedIndex.indexOf(j) === -1) {
                    priceTotal += matrix[i][j];
            }
        }    
    }
    return priceTotal;
}
