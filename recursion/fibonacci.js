// should return the value of a position from fibonacci sequentice
// 1, 1, 2, 3, 5, 8, 13...
function fib(n) {
  if (n <= 2) return 1

  return fib(n - 1) + fib(n - 2)
}

console.log(fib(7))