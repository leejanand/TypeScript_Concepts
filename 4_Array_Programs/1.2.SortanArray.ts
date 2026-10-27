function sortanArray(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
console.log(sortanArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

console.log(sortanArray([10, -2, 33, 0, 5])); // Output: [-2, 0, 5, 10, 33]

// another way to sort an array without using built-in functions
function sortArrayWithoutBuiltIn(arr: number[]): number[] {
  const n = arr.length; 
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArrayWithoutBuiltIn([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

function ascendingOrder(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(ascendingOrder([10, -2, 33, 0, 5])); // Output: [-2, 0, 5, 10, 33]


function descendingOrder(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(descendingOrder([10, -2, 33, 0, 5])); // Output: [33, 10, 5, 0, -2]

