function swapNumbers(a: number, b: number): [number, number] {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

console.log(swapNumbers(5, 10));    // Output: [10, 5]

// Swap Without Temporary Variable
function swapWithoutTemp(a: number, b: number): [number, number] {
    a = a + b; // a now holds the sum of a and b        
    b = a - b; // b now holds the original value of a
    a = a - b; // a now holds the original value of b
    return [a, b];
}
console.log(swapWithoutTemp(5, 10)); // Output: [10, 5]

