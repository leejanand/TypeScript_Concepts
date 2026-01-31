function CountOccurenceOfAllChar(str: string): { [key: string]: number } {
    const charCount: { [key: string]: number } = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }

    }
    return charCount;
}
console.log(CountOccurenceOfAllChar("hello world"));
console.log(CountOccurenceOfAllChar("TypeScript is fun")); // Output: { T: 1, y: 1, p: 1, e: 1, S: 1, c: 1, r: 1, i: 2, t: 1,  : 2, s: 1, f: 1, u: 1, n: 1 