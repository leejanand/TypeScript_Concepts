function ReverseString(str: string): string {
    let reversed: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;    
}
console.log(ReverseString("Hello, TypeScript!")); // Output: !tpircSepyT ,olleHnpx tsx ReverseString.ts