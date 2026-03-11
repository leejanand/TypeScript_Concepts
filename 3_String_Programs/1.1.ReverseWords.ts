function ReverseEachWords(s: string): string {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(ReverseEachWords("Hello World")); // Output: "olleH dlroW"

// without using built in functions
function ReverseWordsWithoutBuiltIn(s: string): string {
    let result: string = "";
    let word: string = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result = word + ' ' + result;
            word = "";
        }

        else {
            word += s[i];
        }
    }
    result = word + ' ' + result;
    return result.trim();
}
console.log(ReverseWordsWithoutBuiltIn("Hello World")); // Output: "World Hello"

//Explanation:        
//The `ReverseWords` function takes a string `s`, splits it into an array of words using the space character as a delimiter, reverses the order of the words in the array, and then joins them back into a single string with spaces in between.

//The `ReverseWordsWithoutBuiltIn` function achieves the same result without using built-in functions. 
// It iterates through each character in the string, building words until it encounters a space. When a space is found, 
// it adds the current word to the front of the result string. Finally, it trims any extra spaces from the result before returning it.   