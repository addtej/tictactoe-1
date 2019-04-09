export default function checkWinner(plays){
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

  for (let [index, win] of winningCombinations.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      return true;
    }
  }
  return false;
}
