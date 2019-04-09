import getWinningCombination from '@/models/getWinningCombination';

describe('getWinningCombination.js', () => {
  it('getWinningCombination exists', () => {
    expect(typeof getWinningCombination).toEqual('function');
  })

  it('check if the play [0, 1, 2] wins', () => {
    expect(getWinningCombination([0, 1, 2])).toEqual([0, 1, 2])
  })
  it('check if the play [7, 1, 4, 2] wins', () => {
    expect(getWinningCombination([7, 1, 4, 2])).toEqual([1, 4, 7])
  })
  it('check if the play [0, 9, 2] wins', () => {
    expect(getWinningCombination([0, 9, 2])).toEqual([])
  })
})
