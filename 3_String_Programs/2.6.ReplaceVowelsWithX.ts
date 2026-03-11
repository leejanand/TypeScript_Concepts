function ReplaceVowelsWithX(str: string): string {
    const vowels = "aeiouAEIOU";
    let result = "";

    for (const char of str) {

        if (vowels.indexOf(char) !== -1) {
            result += 'X';
        } else {
            result += char;
        }
    }
    return result;
}
console.log(ReplaceVowelsWithX("Hello, TypeScript!")); // Output: HXllX, TXpXScrXpt!