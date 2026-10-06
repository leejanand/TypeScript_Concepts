function Reverseorderofwords(s:string):string
{
    const words = s.split(" ")
    const reversed:string[] =[];
    words.map((word,index) =>
    {
        reversed[words.length-1-index] = word;
    });
    return reversed
    .join(" ")

}

console.log(Reverseorderofwords("leej anand no"))



