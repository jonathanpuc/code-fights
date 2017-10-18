/* Task: Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking
 the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. */

/* Example: For n = 2, the output should be shapeArea(n) = 5;
For n = 3, the output should be shapeArea(n) = 13. */

function shapeArea(n) {
var area = 1;

    for(var i = 1; i < n; i++ ) {
        area+= 4 * i;
    }
    return area;
}
