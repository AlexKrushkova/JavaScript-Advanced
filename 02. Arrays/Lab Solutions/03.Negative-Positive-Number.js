function solution(array) {
    let newArray = [];

    for (const arrayElement of array) {
        if (arrayElement >= 0) {
            newArray.push(arrayElement);
        } else {
            newArray.unshift(arrayElement);
        }
    }

    newArray.forEach((e) => console.log(e));
}