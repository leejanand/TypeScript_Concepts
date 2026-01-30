function checkAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string): string =>
        str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(checkAnagrams("listen", "silent")); // Output: true
console.log(checkAnagrams("hello", "world"));   // Output: false