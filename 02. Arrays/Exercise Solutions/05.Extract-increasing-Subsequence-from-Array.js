function solve(array) {
    let result = [];

    if (array.length > 0) {
        result[0] = [array[0]];
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] >= result[result.length - 1]) {
            result.push(array[i]);
        }
    }

    return result.join('\n').trim();
}
