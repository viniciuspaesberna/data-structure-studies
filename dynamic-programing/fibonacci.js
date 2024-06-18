// should return the value of a position from fibonacci sequence
// 1, 1, 2, 3, 5, 8, 13...
const fibonacciSequencePosition = 6

function fib(n, memo) {
  if (n <= 0) throw new Error("[Recursive fibonacci with memoizetion]: argument n must be a positive number")

  if (memo[n] !== null) {
    return memo[n]
  }

  let result

  if (n === 1 || n === 2) {
    result = 1
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo)
  }

  memo[n] = result
  return result
}

function fibMemo(n) {
  const memo = new Array(n + 1).fill(null)
  return fib(n, memo)
}

console.log(`[Recursive fibonacci with memoizetion]: value of the position ${fibonacciSequencePosition} from fibonacci sequence is ${fibMemo(fibonacciSequencePosition)}`)

// ======================================

function fibBottomUp(n) {
  if (n <= 0) throw new Error("[Bottom to up array fibonacci]: argument n must be a positive number")

  if (n === 1 || n === 2) {
    return 1
  }

  const bottomUp = new Array(n + 1).fill(null)
  bottomUp[1] = 1
  bottomUp[2] = 1

  for (let i = 3; i <= n; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2]
  }

  return bottomUp[n]
}

console.log(`[Bottom to up array fibonacci]: value of the position ${fibonacciSequencePosition} from fibonacci sequence is ${fibBottomUp(fibonacciSequencePosition)}`)
