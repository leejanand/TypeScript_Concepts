function findDuplicates(str: string) {
  const map: Record<string, number> = {};
  const result: Record<string, number> = {};

  for (const c of str) {
    map[c] = (map[c] ?? 0) + 1;
  }

  for (const c in map) {
    if (map[c] > 1) result[c] = map[c];
  }

  return result;
}

console.log(findDuplicates("programming"));

 
// Find duplicate words in a string

function duplicatewords(sentence:string):string[]
{
    const words = sentence.toLowerCase().split(" ")
    const map:Record<string,number>={};
    const result:string[]=[];
    
    for(const w of words)
    {
        map[w] = (map[w]??0)+1
    }
    
    for(const w in map)
    if(map[w]>1)
    {
        result.push(w);
    }
    
    return result;
}

console.log(duplicatewords("this is a test this is only a test"))
