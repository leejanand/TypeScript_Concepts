function findmissingnumber(arr: number[], n: number): number {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}   
const arr = [1, 2, 4, 5];
const n = 5;
console.log(findmissingnumber(arr, n)); // Output: 3
