function combinations(n) {
    if (n < 0 || n > 52) return 0;

    if (n > 26) {
        n = 52 - n;
    }
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * (52 - n + i) / i;
    }
    
    return Math.round(result);
}
console.log(combinations(40))
