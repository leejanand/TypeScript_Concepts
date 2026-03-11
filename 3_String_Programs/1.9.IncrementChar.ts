function incrementCharacters(str: string): string {
  let result = "";
  for (const ch of str) {
    result += String.fromCharCode(ch.charCodeAt(0) + 1);
  }
  return result;
}

console.log(incrementCharacters("fsdf")); // Output: gtet