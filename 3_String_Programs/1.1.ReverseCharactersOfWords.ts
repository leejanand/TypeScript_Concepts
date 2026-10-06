function ReverseEachWords(s: string): string {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(ReverseEachWords("Hello World")); // Output: "olleH dlroW"

// without using built in functions
function ReverseWordsWithoutBuiltIn(s: string): string {
    return s
    .split(' ')
    .map(word => {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;
    })
    .join(' ');
}

console.log(ReverseWordsWithoutBuiltIn("Hello World")); // Output: "olleH dlroW"

//Explanation:        
//The `ReverseWords` function takes a string `s`, splits it into an array of words using the space character as a delimiter, reverses the order of the words in the array, and then joins them back into a single string with spaces in between.