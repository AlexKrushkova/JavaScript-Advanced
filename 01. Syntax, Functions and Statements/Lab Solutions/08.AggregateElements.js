function aggregateElements(data) {
    let res1 = 0;
    let res2 = 0;
    let res3 = '';

    for (let i = 0; i < data.length; i++) {
        res1 += +data[i];
        res2 += 1 / +data[i];
        res3 += `${data[i]}`;
    }

    console.log(res1);
    console.log(res2);
    console.log(res3);
}