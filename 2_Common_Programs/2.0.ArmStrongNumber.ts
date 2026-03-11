function ArmStrongNumber(num: number): boolean {
    const strNum = num.toString();
    const numDigits = strNum.length;
    let sum = 0;
    for (const digit of strNum) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    return sum === num;
}   
console.log(ArmStrongNumber(153)); // Output: true