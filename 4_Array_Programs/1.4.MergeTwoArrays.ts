function MergeTwoArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArray: number[] = [];
  let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
console.log(MergeTwoArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(MergeTwoArrays([10, 20, 30], [15, 25, 35])); // Output: [10, 15, 20, 25, 30, 35]
