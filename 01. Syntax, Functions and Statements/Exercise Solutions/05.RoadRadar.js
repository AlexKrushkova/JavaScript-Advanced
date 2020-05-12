function solve(array) {
  let number = Number(array[0]);
  let road = array[1];
  let limit = 0;

  switch (road) {
    case "motorway":
      limit = 130;
      break;
    case "interstate":
      limit = 90;
      break;
    case "city":
      limit = 50;
      break;
    case "residential":
      limit = 20;
      break;
  }

  if (number - limit > 40){
      console.log(`reckless driving`);
  }
  else if(number - limit > 20){
      console.log(`excessive speeding`);
  }
  else if (number - limit > 0){
      console.log(`speeding`)
  }
  else {
      console.log(``);
  }
}

// console.log(solve([21, 'residential']));
