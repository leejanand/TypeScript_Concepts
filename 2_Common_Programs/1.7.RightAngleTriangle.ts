function rightAngleTriangle(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // print spaces
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }

    // print stars
    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

rightAngleTriangle(5);