function palindromeOrNot(str: string): boolean {
    const len: number = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }   
    return true;
}
console.log(palindromeOrNot("racecar")); // Output: true
console.log(palindromeOrNot("hello"));   // Output: false