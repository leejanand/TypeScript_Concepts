function countOccurrences(str: string): Map<string, number> {
    const charCount: Map<string, number> = new Map();

    for (const char of str) {
        charCount.set(char, (charCount.get(char) ?? 0) + 1);
    }

    return charCount;
}
console.log(countOccurrences("hello world")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
console.log(countOccurrences("TypeScript is fun")); 
// Output: { T: 1, y: 1, p: 1, e: 1, S: 1, c: 1, r: 1, i: 2, t: 1, ' ': 2, s: 1, f: 1, u: 1, n: 1 }

//using object instead of map

function countOccurrencesUsingObject(str: string): Record<string, number> {
    const charCount: Record<string, number> = {};

    for (const char of str) {
        charCount[char] = (charCount[char] ?? 0) + 1;
    }

    return charCount;
}
console.log(countOccurrencesUsingObject("hello world")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }