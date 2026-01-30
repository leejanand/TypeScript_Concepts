function CountVowelsandConsonants(str: string): { vowels: number; consonants: number } {
    let vowelsCount: number = 0;
    let consonantsCount: number = 0;
    const vowels: string = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        const char: string = str[i];

        if (vowels.indexOf(char) !== -1) {

            vowelsCount++;
        } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            consonantsCount++;
        }
    }
    return { vowels: vowelsCount, consonants: consonantsCount };
}
console.log(CountVowelsandConsonants("Hello, TypeScript!")); // Output: { vowels: 4, consonants: 10 }
console.log(CountVowelsandConsonants("Programming is fun.")); // Output: { vowels: 5, consonants: 11 }
console.log(CountVowelsandConsonants("12345!@#")); // Output: { vowels: 0, consonants: 0 }