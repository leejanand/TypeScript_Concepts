function secondLargestWord(sentence: string): string {
  const words = sentence.split(" ");
  let largest = "", second = "";
  for (const word of words) {
    if (word.length > largest.length) {
      second = largest;
      largest = word;
    } else if (word.length > second.length && word !== largest) {
      second = word;
    }
  }
  return second;
}

console.log(secondLargestWord("The quick brown fox jumps over the lazy dog")); // Output: "brown"