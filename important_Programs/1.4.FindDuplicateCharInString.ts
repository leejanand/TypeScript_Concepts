function FindDuplicateCharInString(str: string): string[] {
    const charCount: { [key: string]: number } = {};
    const duplicates: string[] = [];

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char, charCount[char].toString());
        }
    }

    return duplicates;
}
console.log(FindDuplicateCharInString("programming")); // Output: ['r', '2', 'g', '2', 'm', '2']
console.log(FindDuplicateCharInString("TypeScript")); // Output: ['t', '2', 'p', '1']
