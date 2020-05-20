function solve() {
    let restock = function (microEle, quantity) {
       quantity = Number(quantity);
       microelements[microEle] += quantity;
       return "Success";
    }
 
    let prepare = function (recipe, quantity) {
       quantity = Number(quantity);
       let cook = true;
 
       let recipesList = {
          apple: {carbohydrate: 1, flavour: 2},
          lemonade: {carbohydrate: 10, flavour: 20},
          burger: {carbohydrate: 5, fat: 7, flavour: 3},
          eggs: {protein: 5, fat: 1, flavour: 1},
          turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
       }
 
       for (let kvp of Object.entries(recipesList[recipe])) {
          if (microelements[kvp[0]] < (kvp[1] * quantity)) {
             cook = false;
             return `Error: not enough ${kvp[0]} in stock`;
          }
       }
 
       if (cook) {
          for (let kvp of Object.entries(recipesList[recipe])) {
             microelements[kvp[0]] -= kvp[1] * quantity;
          }
          return "Success";
       }
    }
 
    let report = function (mEle) {
       return `protein=${mEle.protein} carbohydrate=${mEle.carbohydrate} fat=${mEle.fat} flavour=${mEle.flavour}`;
    }
 
    let microelements = {
       protein: 0,
       carbohydrate: 0,
       fat: 0,
       flavour: 0
    }
 
    let actionsList = {
       restock,
       prepare,
       report
    }
 
    return function (str) {
       let [command, ...others] = str.split(" ");
 
       if (command === "report") {
          return actionsList[command](microelements);
       }
       return actionsList[command](...others);
    }
 }