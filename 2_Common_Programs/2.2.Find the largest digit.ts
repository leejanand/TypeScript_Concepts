 function largestdigit(num:number):number
 {
    let largest = 0;

    while(num>0)
    {
        let digit = num%10

        if(digit>largest)
        {
            largest = digit;
        }
        num = Math.floor(num/10)
    }
    return largest
 }
 console.log(largestdigit(134649))