function FirstUniqueCharacter(str:string):string | null
{
const freq:Record<string,number> = {};

for (const ch of str)
{
freq[ch] = (freq[ch] || 0) + 1;
}


for(const ch of str)
{
if(freq[ch]===1)
{
return ch;
}
}
return null;

}

console.log(FirstUniqueCharacter("leej")); // Output: 'l'   
console.log(FirstUniqueCharacter("aabbcc")); // Output: null