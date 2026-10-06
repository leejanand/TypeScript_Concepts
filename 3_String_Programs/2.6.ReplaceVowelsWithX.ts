function ReplaceVowelsWithX(str:string):string
{
    const vowels:Set<string> = new Set(['a','e','i','o','u','A','E','I','O','U'])
    
    let result:string ="";
    
    for(const c of str)
    {
        if(vowels.has(c))
        {
            result+='X';
        }
        else{
            result+=c;
        }
    }
    return result

}

console.log(ReplaceVowelsWithX("leejanand")); // Output: lXXjXnXnd