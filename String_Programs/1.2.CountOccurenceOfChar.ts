function CountOccurrenceOfChar(str: string, char: string): number {
    let count: number = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }   
    return count;
}

console.log(CountOccurrenceOfChar("hello world", "o")); // Output: 2
console.log(CountOccurrenceOfChar("TypeScript is fun", "t")); // Output: 2  gin