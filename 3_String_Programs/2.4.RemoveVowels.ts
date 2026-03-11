function removeVowels(str: string): string {
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let result: string = "";

    for (const char of str) {
        if (!vowels.has(char)) {
            result += char;
        }
    }
    return result;

}   
console.log(removeVowels("Hello, TypeScript!")); // Output: Hll, TpScrpt!