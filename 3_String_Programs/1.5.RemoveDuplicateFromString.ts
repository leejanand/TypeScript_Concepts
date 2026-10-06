function RemoveDuplicateFromString(str: string): string {
    let result: string = "";
    const seen: Set<string> = new Set();    
    for (const c of str) {
        if (!seen.has(c)) {
            seen.add(c);
            result += c;
        }
    }
    return result;
}
console.log(RemoveDuplicateFromString("hello world")); // Output: helo wrd
console.log(RemoveDuplicateFromString("TypeScript is fun")); // Output: TypeScri nfu

// Remove duplicate words from a string

function RemoveDuplicatewordsFromString(sentence:string):string
{
    const words = sentence.toLowerCase().split(' ');
    let result:string[]=[]
    
    const seen:Set<string> = new Set();
    
    for(let w of words )
    {
        if(!seen.has(w))
        {
            seen.add(w);
            result.push(w);
        }
    }
    return result.join(' ');
}

console.log(RemoveDuplicatewordsFromString("this is a test this is only a test"))