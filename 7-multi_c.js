const x = Number(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");  // 1st possible console.log
} else {
  let output = "";

  for (let i = 0; i < x; i++) {
    output += "C is fun";
    if (i < x - 1) output += "\n";
  }

  console.log(output);  // 2nd possible console.log
}
