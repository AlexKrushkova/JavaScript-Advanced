function solution(array) {
    const command = (function () {
        let arr = [];

        return {
            add: (element) => arr.push(element),
            remove: (element) => arr = arr.filter(item => item !== element),
            print: () => console.log(arr.join(','))
        }
    })();

    array.forEach(element => {
        const tokens = element.split(/\s+/g).filter(i => i !== '');
        command[tokens[0]](tokens.length > 1 ? tokens[1] : undefined);
    })
}
