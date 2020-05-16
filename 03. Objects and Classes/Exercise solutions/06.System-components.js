function systemCom(input) {
    let systems = new Map();
    for (let i = 0; i < input.length; i++) {
        let [system, component, subComponent] = input[i].split(" | ");
        if (!systems.has(system)) {
            systems.set(system, new Map());
        }
        if (!systems.get(system).get(component)) {
            systems.get(system).set(component, []);
        }
        systems.get(system).get(component).push(subComponent);
    }
    let sortedSystems = Array.from(systems.keys()).sort() // sort alphabetical
        .sort((a, b) => systems.get(b).size - systems.get(a).size); // sort for size of compponent
    for (let key of sortedSystems) {
        console.log(key);
        let sortedComponents = Array.from(systems.get(key).keys()).sort((a, b) => systems.get(key).get(b).length -
            systems.get(key).get(a).length);
        for (let item of sortedComponents) {
            console.log(`|||${item}`);
            for (let subComponents of systems.get(key).get(item)) {
                console.log(`||||||${subComponents}`);
            }
        }
    }

}