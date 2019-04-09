import checkWinner from '@/models/checkWinner';

describe('checkWinner.js', () => {
  it('checkWinner exists', () => {
    expect(typeof checkWinner).toEqual('function');
  })

  it('check if the play [0, 1, 2] wins', () => {
    expect(checkWinner([0, 1, 2])).toBeTruthy()
  })
  it('check if the play [0, 9, 2] wins', () => {
    expect(checkWinner([0, 9, 2])).toBeFalsy()
  })
})
