function uniqcharac(str:string):string[]
{
const freq:Record<string,number> = {};

for (const ch of str)
{
freq[ch] = (freq[ch] || 0) + 1;
}

const result:string[] =[];

for(const ch of str)
{
if(freq[ch]===1)
{
result.push(ch);
}
}
return result;

}

console.log(uniqcharac("leej")); // Output: ['l', 'j']