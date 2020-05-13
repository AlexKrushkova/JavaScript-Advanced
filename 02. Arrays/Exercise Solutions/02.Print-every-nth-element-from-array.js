function solve(array) {
    let indicator = Number(array.pop());

    for (let i = 0; i < array.length; i += indicator) {
        console.log(array[i]);
    }
}
