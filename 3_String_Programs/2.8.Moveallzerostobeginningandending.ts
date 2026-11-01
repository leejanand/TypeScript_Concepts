function Moveallzeorostobeginning(input1:string):string
{
    let zerros ="";
    let nonzeros ="";

    for(let i=0;i<input1.length;i++)
    {
        if(input1[i]==='0')
        {
            zerros += '0'
        }
        else
        {
            nonzeros += input1[i]
        }
    }
    return zerros+nonzeros
}

const inpu1t = "09080707040";
console.log(Moveallzeorostobeginning(inpu1t));

function Moveallzeorostoending(input2:string):string
{
    let zerros ="";
    let nonzeros ="";

    for(let i=0;i<input2.length;i++)
    {
        if(input2[i]==='0')
        {
            zerros += '0'
        }
        else
        {
            nonzeros += input2[i]
        }
    }
    return nonzeros+zerros
}

const input2 = "09080707040";
console.log(Moveallzeorostoending(input2));

