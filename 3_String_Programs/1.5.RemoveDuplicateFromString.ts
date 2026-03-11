function RemoveDuplicateFromString(str: string): string {
    let result: string = "";
    const seen: Set<string> = new Set();    
    for (let i = 0; i < str.length; i++) {
        if (!seen.has(str[i])) {
            seen.add(str[i]);
            result += str[i];
        }
    }
    return result;
}
console.log(RemoveDuplicateFromString("hello world")); // Output: helo wrd
console.log(RemoveDuplicateFromString("TypeScript is fun")); // Output: TypeScri nfu