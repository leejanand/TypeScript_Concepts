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

function largest(arr: number[]) {
  let max = -Infinity;
  for (const n of arr) {
    if (n > max)
      max = n;
  }
  return max;
}

console.log(largest([3, 1, 4, 1, 5, 9, 2, 6, 5])); // Output: 9