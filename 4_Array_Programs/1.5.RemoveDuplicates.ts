// Method 1: Using Set
const numbers: number[] = [1, 2, 3, 2, 4, 1, 5];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

const strings: string[] = ["apple", "banana", "apple", "orange", "banana"];

const uniqueStrings = [...new Set(strings)];
console.log(uniqueStrings.join(",")); // Output: apple, banana, orange

// Method 2 
function removeDuplicates(arr: number[]): number[] {
  const result: number[] = [];
  for (const num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(removeDuplicates([2,7,8,10,4,8,7,10]));