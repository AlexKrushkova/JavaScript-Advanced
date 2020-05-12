function solve(x, y, operator) {
    let result;
    switch (operator) {
        case "+": result = x + y;
            break;
        case "-": result = x - y;
            break;
        case "/": result = x / y;
            break;
        case "*": result = x * y;
            break;
        case "%": result = x % y;
            break;
        case "**": result = x ** y;
            break;
    }

    return result;
}
// console.log(
//     solve(5, 6, "+")
// );