function solve(text) {
    return text.match(/\w+/gim)
        .map(x => x.toUpperCase()).join(", ");
}

// console.log(solve("Hi, how are you?"));
// console.log(solve("hello"));