function solve(array){
    let arr = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == "add"){
            arr.push(index+1);
        }
        else {
            arr.pop();
        }
    }
    if (arr.length<=0) {
        console.log(`Empty`)
    }
    else {
        arr.forEach(element => 
            console.log(element))
    }
}
