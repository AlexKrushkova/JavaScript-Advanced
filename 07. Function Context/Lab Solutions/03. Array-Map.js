// function arrMap(arr, fn){
//     return arr.reduce((a,b) => [...a, fn(b)], []);
// }

function arrayMap(arr, fn){
    let newArr = new Array (arr.length);
    for (let i = 0; i < newArr.length; i++) {
       newArr[i] = fn(arr[i]);
    }
    return newArr;
}


let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]

let letters = ["a","b","c"];
console.log(arrayMap(letters,(l)=>l.toLocaleUpperCase())) // [ 'A', 'B', 'C' ]
