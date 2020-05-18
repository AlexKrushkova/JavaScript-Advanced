function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  if (input === null || output === null) {
    throw new Error(`Something is wrong...`);
  }

  // input.innerHTML.split(".").forEach((x) => {
  //   let p = document.createElement("p");
  //   p.innerHTML = x + ".";
  //   output.appendChild(p);
  // });

  let sentences = input.innerHTML.split(".").filter((x) => x !== "");

  for (let i = 0; i < sentences.length; i++) {
    let p = document.createElement("p");
    let str = "";
    for (let j = 0; j < 3; j++) {
      if (i + j < sentences.length) {
        str += sentences[i + j] + ".";
      }
    }
    p.innerHTML = `${sentences[i]}. ${sentences[i + 1]}. ${sentences[i + 2]}`;
    output.appendChild(p);
  }
}
