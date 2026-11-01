function movezeroend(num:number[]):number[]
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

console.log(movezeroend([0,1,0,3,12])); // Output: [1, 3, 12, 0, 0]

function movezerobegin(num:number[]):number[]
{
    let result:number[] =[];
    
    for(const n of num)
    {
    if(n==0)
    {
        result.unshift(n);
    }
    else
    {
        result.push(n)
    }
}
    return result;
}

console.log(movezerobegin([0,1,0,3,12])); // Output: [1, 3, 12, 0, 0]

