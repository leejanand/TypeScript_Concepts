function findmissingnumber(arr1: number[], n1: number): number {
    const expectedSum = (n1 * (n1 + 1)) / 2;
    let actualSum = 0;
    for (const n of arr1)
    {
        actualSum += n;
    }
    return expectedSum - actualSum;
}   
const arr1 = [1, 2, 4, 5];
const n1 = 5;
console.log(findmissingnumber(arr1, n1)); // Output: 3

function findmissingallnumbers(arr2:number[],n2:number):number[]
{
    let missingnumber:number[] =[]
    for(let i=0;i<=n2;i++)
    {
        if(!arr2.includes(i))
        {
            missingnumber.push(i)
        }
    }
    return missingnumber
}

const arr2 = [1, 3, 5, 7];
const n2 = 7;
console.log(findmissingallnumbers(arr2, n2)); 