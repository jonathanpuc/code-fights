/* Task: Given a sequence of integers as an array, determine whether it is possible
to obtain a strictly increasing sequence by removing no more than one element from the array. */

/* Example: For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true. */

function almostIncreasingSequence(sequence) {
    var count = 0;

    for (var i = 0, n = sequence.length; i < n; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
                return false;
            }
        }
    }
    return count <= 1
}
