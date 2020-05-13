function solve(matrix) {
    let rowMax = [];
    for (let i = 0; i < matrix.length; i++) {
        rowMax.push(Math.max(...matrix[i]));
    }

    return Math.max(Math.max(...rowMax));
}
