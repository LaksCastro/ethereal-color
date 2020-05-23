import Color, { ValidColorsFormats } from '../../src/components/color'

describe('Basic "Color" factory operations', () => {
  it('works if factory "Color" is callable', () => {
    expect(Color).not.toThrow()
  })
  it('works if library factory "Color" return a no-undefined value', () => {
    expect(Color()).toBeDefined()
  })

  it('works if library factory "Color" create correctly a color instance', () => {
    const color = Color()

    const { string } = color.get(ValidColorsFormats.hex)

    expect(string).toEqual('#ffffff')
  })

  it('works if library factory "Color" create correctly a color instance with a RGB base string color', () => {
    const color = Color('rgb(50%, 50%, 50%)')

    const { string } = color.get(ValidColorsFormats.rgb)

    expect(string).toEqual('rgb(127.5, 127.5, 127.5)')
  })

  it('works if library factory "Color" create correctly a color instance with a Hexadecimal base string color', () => {
    const color = Color('#000')

    const { string } = color.get(ValidColorsFormats.rgb)

    expect(string).toEqual('rgb(0, 0, 0)')
  })
})
