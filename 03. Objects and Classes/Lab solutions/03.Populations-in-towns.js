function solution(input) {
    let map = new Map();
    let regex = /\s*<->\s*/;

    for (let line of input) {
        let tokens = line.split(regex);
        let town = tokens[0];
        let population = +tokens[1];

        if (!map.has(town)) {
            map.set(town, 0);
        }

        map.set(town, map.get(town) + population);
    }

    for (let town of map) {
        console.log(`${town[0]} : ${town[1]}`);
    }
}
