function solution(matrixAsStrings) {
    let matrix = [];

    // parse matrix from string to numbers
    for (let i = 0; i < matrixAsStrings.length; i++) {
        matrix[i] = [];
        let currentRow = matrixAsStrings[i].split(' ');

        for (let j = 0; j < currentRow.length; j++) {
            matrix[i][j] = Number(currentRow[j]);
        }
    }

    // check is diagonals sums equals
    let sumDiagonals = [0, 0];
    for (let row = 0; row < matrix.length; row++) {
        sumDiagonals[0] += matrix[row][row];
        sumDiagonals[1] += matrix[row][matrix[row].length - (1 + row)];
    }

    let isSumsEqual = sumDiagonals[0] === sumDiagonals[1];

    // print matrix
    if (isSumsEqual) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row !== col && col !== matrix.length - (1 + row)) {
                    matrix[row][col] = sumDiagonals[0];
                }
            }
        }
        matrix.forEach(e => console.log(e.join(' ')));
    } else {
        matrix.forEach(e => console.log(e.join(' ')));
    }
}

// solution([
//     '5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']
// );