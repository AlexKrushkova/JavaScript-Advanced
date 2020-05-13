  
function solve(array) {
    let countRotates = Number(array.pop()) % array.length;

    for (let i = 0; i < countRotates; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    return array.join(' ');
}

// console.log(solve([
//     '1',
//     '2',
//     '3',
//     '4',
//     '2']
// ));