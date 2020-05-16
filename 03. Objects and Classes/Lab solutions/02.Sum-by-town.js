function solution(input) {
    let towns = {};

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let population = +input[i + 1];

        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }

        towns[town] += population;
    }

    return JSON.stringify(towns);
}