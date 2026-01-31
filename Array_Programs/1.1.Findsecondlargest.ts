function secondLargest(arr: number[]) {
  let max = -Infinity, second = -Infinity;
  for (const n of arr) {
    if (n > max) 
      { second = max;
         max = n; 
        }
    else if (n > second && n !== max) 
      second = n;
  }
  return second;
}

console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6, 5])); // Output: 6