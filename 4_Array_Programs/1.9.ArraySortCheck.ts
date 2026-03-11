function ArraySortCheck(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];
console.log(ArraySortCheck(arr1)); // Output: true
console.log(ArraySortCheck(arr2)); // Output: false
