function sovle(...args){
    Object.entries(args.reduce((acc, current) => {
        let typeOfArg = typeof current;
        console.log(`${typeOfArg}: ${current}`)

        if(!acc.hasOwnProperty(typeOfArg)){
            acc[typeOfArg] = 0;
        }

        acc[typeOfArg]++;

        return acc;
     
    }, {})
    )
    .map(([type, count])=> `${type} = ${count}`)
    .sort((a,b)=> b[1] - a[1])
    .forEach((el) => console.log(el))
}