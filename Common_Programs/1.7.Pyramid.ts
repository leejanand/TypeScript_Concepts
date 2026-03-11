function pyramid(n: number): void {
    for (let i = 1; i <= n; i++) {
        let pattern = "";

        // print spaces
        for (let j = 1; j <= n - i; j++) {
            pattern += " ";
        }
        // print stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}
pyramid(5);
