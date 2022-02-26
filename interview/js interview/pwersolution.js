function power(base, exponent) {
    if (exponent === 0) return 1
    console.log(base)
    console.log(exponent)
    return base * power(base, exponent - 1)
}

result = power(2, 10)
console.log(result)