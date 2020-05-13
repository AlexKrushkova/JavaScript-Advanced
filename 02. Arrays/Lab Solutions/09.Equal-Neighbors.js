function solve(matrix) {
    let equalPairsCount = 0;

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] === matrix[row][col + 1]) {
                equalPairsCount++
            }

            if (row < matrix.length - 1 && matrix[row][col] === matrix[row + 1][col]) {
                equalPairsCount++
            }
        }
    }

    return equalPairsCount;
}