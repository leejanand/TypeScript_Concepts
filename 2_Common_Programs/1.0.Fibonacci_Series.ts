function fibonacciSeries(n: number): number[] {
    const series: number[] = [0,1];
    for (let i = 2; i < n; i++) {

        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}   
console.log(fibonacciSeries(5));  // Output: [0, 1, 1, 2, 3]
console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]