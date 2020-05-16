function lowestPrice(input) {
    let cheapestProducts = new Map();

    for (let line of input) {
        [town, product, price] = line.split(" | ").filter(e => e != "");

        if (!cheapestProducts.has(product)) {
            cheapestProducts.set(product, new Map());
        }
        cheapestProducts.get(product).set(town, Number(price));
    }

    for (let [product, inMap] of cheapestProducts) {
        let lowestPrice = Infinity;
        let townLowestPrice = "";
        for (let [town, price] of inMap) {
            if (price < lowestPrice) {
                lowestPrice = price;
                townLowestPrice = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${townLowestPrice})`)
    }
}