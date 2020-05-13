function solve(matrix) {
    let sumDiagonals = [0, 0];

    for (let row = 0; row < matrix.length; row++) {
        sumDiagonals[0] += matrix[row][row];
        sumDiagonals[1] += matrix[row][matrix[row].length - (1 + row)];
    }

    return sumDiagonals.join(' ');
}