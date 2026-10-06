
// Check if two strings are anagrams of each other

function anagramcheck(a: string, b: string): boolean {
  
  if (a.length !== b.length) return false;

  const map: Record<string, number> = {};
  for (const c of a) 
    {
      map[c] = (map[c] ?? 0) + 1;
    }
  for (const c of b){
    if (!map[c])
    return false;
    map[c]--;
  }

  return true;
}

console.log(anagramcheck("listen", "silent")); // Output: true

// find all anagrams of a string in an array of strings

function findAnagrams(word: string, candidates: string[]): string[] {
    const sortedWord = word.split('').sort().join('');
    return candidates.filter(candidate => candidate.split('').sort().join('') === sortedWord);
}
console.log(findAnagrams("listen", ["enlist", "google", "inlets", "banana"])); // Output: ["enlist", "inlets"]
