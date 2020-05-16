function juiceFactory(data) {
  let parseData = {};
  let juice = {};


  for (let i = 0; i < data.length; i++) {
    let tempParsedJuice = data[i].split(" => ");
    if (parseData[tempParsedJuice[0]]) {
      parseData[tempParsedJuice[0]] =
        parseData[tempParsedJuice[0]] + Number(tempParsedJuice[1]);
    } else {
      parseData[tempParsedJuice[0]] = Number(tempParsedJuice[1]);
    }
    let bottleQ = Math.floor(parseData[tempParsedJuice[0]]/1000);
    if (bottleQ > 0){
        juice[tempParsedJuice[0]] = bottleQ;
    }

  }

    let finalParsedData = Object.entries(juice);
    for (let i = 0; i<finalParsedData.length; i++){
        console.log(finalParsedData[i].join(' => '))
    }
}

// juiceFactory(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']
// );
