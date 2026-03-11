function minMax(arr: number[]) {
  let min = Infinity, max = -Infinity;
  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return { min, max };
} 

console.log(minMax([3, 1, 4, 1, 5, 9, 2, 6, 5])); // Output: { min: 1, max: 9 }
