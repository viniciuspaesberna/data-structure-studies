// should return the value of a position from fibonacci sequentice
// 1, 1, 2, 3, 5, 8, 13...
function tib(n) {
  if (n <= 2) return 1

  return tib(n - 1) + tib(n - 2)
}

console.log(tib(7))