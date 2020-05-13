function solve(array) {
    return array.filter((e, index) => index % 2 === 0).join(' ');
}
