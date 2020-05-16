function autoCompanu(input) {
    let catalogue = new Map();
    for (let i = 0; i < input.length; i++) {
        let [carBrand, carModel, size] = input[i].split(" | ");
        size = Number(size);
        if (!catalogue.has(carBrand)) {
            catalogue.set(carBrand, new Map());
        }
        if (!catalogue.get(carBrand).has(carModel)) {
            catalogue.get(carBrand).set(carModel, 0);
        }
        catalogue.get(carBrand).set(carModel, catalogue.get(carBrand).get(carModel) + size);
    }
    for (let [brand, modelAndNumbers] of catalogue) {
        console.log(brand);
        for (let [model, number] of modelAndNumbers) {
            console.log(`###${model} -> ${number}`);
        }
    }

}