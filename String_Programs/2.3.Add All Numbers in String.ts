function AddAllNumbersInString(str:string):number
{
let sum:number =0;
for(const ch of str)
{
if(ch>='0' && ch<='9')
{
sum+=parseInt(ch);
}
}

return sum;
}

console.log(AddAllNumbersInString("abc123def")); // Output: 6