function sortanArray(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
console.log(sortanArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

console.log(sortanArray([10, -2, 33, 0, 5])); // Output: [-2, 0, 5, 10, 33]

