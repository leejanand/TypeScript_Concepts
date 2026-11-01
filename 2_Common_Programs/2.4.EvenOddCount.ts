function evenoddcount(num:number):{evencount:number,oddcount:number}
{
    let evencount = 0;
    let oddcount = 0;

while(num>0)
{
    let digit = num%10
    if(digit%2===0)
    {
        evencount++
    }
    else
    {
        oddcount++
    }
    num = Math.floor(num/10)
}
return {evencount,oddcount} 

}

console.log(evenoddcount(58329));