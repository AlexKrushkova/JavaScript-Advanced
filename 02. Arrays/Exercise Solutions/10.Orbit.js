function solution(array) {
    let rows = array[0];
    let cols = array[1];
    let startRow = array[2];
    let startCol = array[3];

    let matrix = [];

    // make matrix with center
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];

        for (let col = 0; col < cols; col++) {
            if (row === startRow && col === startCol) {
                matrix[row][col] = 1;
            } else {
                matrix[row][col] = undefined;
            }
        }
    }

    // fill the matrix with correct values
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = Math.max(Math.abs(startRow - row), Math.abs(startCol - col)) + 1;
        }
    }

    // print matrix
    matrix.forEach(e => console.log(e.join(' ')));

}

// solution([3, 3, 2, 2]);