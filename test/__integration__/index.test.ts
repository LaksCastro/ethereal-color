import color from '../../src'

describe('Basic library operations', () => {
  it('works if library is callable', () => {
    expect(color).not.toThrow()
  })
})
