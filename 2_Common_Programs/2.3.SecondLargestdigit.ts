function secondLargestDigit(num: number): number {
   
    let largest = -1;
    let secondLargest = -1;

    while (num > 0) {
        let digit = num % 10;

        if (digit > largest) {
            secondLargest = largest;
            largest = digit;
        }
        else if (digit < largest && digit > secondLargest) {
            secondLargest = digit;
        }

        num = Math.floor(num / 10);
    }

    return secondLargest;
}

console.log(secondLargestDigit(58329));