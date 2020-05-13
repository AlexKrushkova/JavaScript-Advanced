function solve(array) {
    return array
        .filter((e, index) => index % 2 !== 0)
        .reverse()
        .map(e => e * 2)
        .join(' ');
}
