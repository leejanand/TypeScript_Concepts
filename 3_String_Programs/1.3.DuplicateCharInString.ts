function DuplicateCharInString(str: string): string {
    let result: string = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

console.log(DuplicateCharInString("hello")); // Output: hheelllloo
console.log(DuplicateCharInString("TypeScript")); // Output: TTyypp eeSSccrriipptt
console.log(DuplicateCharInString("12345")); // Output: 1122334455
console.log(DuplicateCharInString("!@#")); // Output: !!@@##
console.log(DuplicateCharInString(" ")); // Output:
console.log(DuplicateCharInString("")); // Output:
console.log(DuplicateCharInString("A")); // Output: AA
console.log(DuplicateCharInString("AB")); // Output: AABB
console.log(DuplicateCharInString("😊👍")); // Output: 😊😊👍👍
