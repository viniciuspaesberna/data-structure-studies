const fact = (n) => {
  if (n < 0) return NaN
  if (n <= 1) return 1

  return n * fact(n - 1)
}

console.log('4! is equal to ' + fact(4))
console.log('3! is equal to ' + fact(3))
console.log('2! is equal to ' + fact(2))
console.log('1! is equal to ' + fact(1))
console.log('0! is equal to ' + fact(0))
console.log('-1! is equal to ' + fact(-1))
