function catalogue(data){
    let parseData = data.reduce((acc, productLine) => {
        let [name, price] = productLine.split(":").map(x => x.trim());
        if(acc[name[0]]){
            acc[name[0]] = [...acc[name[0]],productLine];
        }
        else{
            acc[name[0]]=[productLine];
        }
        return acc;
    },{})

    Object.keys(parseData).sort().map(x => {
        console.log(x);
        parseData[x].sort().map(product =>{
            console.log(` ${product.split(" : ").join(": ")}`);
        })
    });
}
