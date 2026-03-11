function movezero(num:number[]):number[]
{
    let result:number[] =[];
    
    for(const n of num)
    {
    if(n!==0)
    {
        result.push(n);
    }
    }
    while(result.length < num.length)
    {
        result.push(0);
    }
    return result;
}

console.log(movezero([0,1,0,3,12])); // Output: [1, 3, 12, 0, 0]