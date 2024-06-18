// should return the value of a position from fibonacci sequence
// 1, 1, 2, 3, 5, 8, 13...
function fib(n) {
  if (n <= 2) return 1

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))