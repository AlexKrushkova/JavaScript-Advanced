function solve(array) {
    let delimiter = array[array.length - 1];
    array.pop();

    return array.join(delimiter);
}