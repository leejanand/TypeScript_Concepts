function findoccurenceofallelements(arr: number[]):Record<number,number>
{
    const count:Record<number,number> = {}

    for( const num of arr)
    {
        if(count[num])
        {
            count[num]++
        }
        else{
            count[num] = 1
        }
    }
    return count
}
    
console.log(findoccurenceofallelements([1, 2, 2, 3, 1, 4, 2, 3]));