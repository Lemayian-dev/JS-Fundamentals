const size = Number(process.argv[2]);

// if statement
if (isNaN(size)) {
  console.log("Missing size");
} else {
  let row = "X".repeat(size);

  for (let i = 0; i < size; i++) {
    console.log(row);
  }
};
