function solution(m, n) {
    let matrix = [];

    for (let i = 0; i < m; i++) {
        matrix[i] = [];

        for (let j = 0; j < n; j++) {
            matrix[i][j] = undefined;
        }
    }

    // Initialize value to be filled in matrix
    let val = 1;

    /*  k - starting row index
        m - ending row index
        l - starting column index
        n - ending column index
    */
    let k = 0;
    let l = 0;

    while (k < m && l < n) {
        /* Print the first row from the remaining rows */
        for (let i = l; i < n; ++i) {
            matrix[k][i] = val++;
        }

        k++;

        /* Print the last column from the remaining columns */
        for (let i = k; i < m; ++i) {
            matrix[i][n - 1] = val++;
        }

        n--;

        /* Print the last row from the remaining rows */
        if (k < m) {
            for (let i = n - 1; i >= l; --i) {
                matrix[m - 1][i] = val++;
            }
            m--;
        }

        /* Print the first column from the remaining columns */
        if (l < n) {
            for (let i = m - 1; i >= k; --i) {
                matrix[i][l] = val++;
            }
            l++;
        }
    }

    matrix.forEach(e => console.log(e.join(' ')));
}

// solution(5, 5);