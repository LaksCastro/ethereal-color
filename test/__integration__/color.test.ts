import { Color } from '../../src/components/color'
import { Rgb, Hex, Hsl } from '../../src/shared/@types'
import data, { SampleColor } from '../shared/color-swatch'

describe('Basic "Color" factory operations', () => {
  it('works if factory "Color" is callable', () => {
    expect(Color.bind(undefined, '#fff')).not.toThrow()
  })

  it('works if library factory "Color" return a no-undefined value', () => {
    expect(Color('#fff')).toBeDefined()
  })

  it('works if library factory "Color" create correctly a color instance', () => {
    const color = Color('#fff')

    const { string } = color.get('hex')

    expect(string).toEqual('#ffffff')
  })

  it('works if library factory "Color" create correctly a color instance with a RGB base string color', () => {
    const color = Color('rgb(50%, 50%, 50%)')

    const { string } = color.get('rgb')

    expect(string).toEqual('rgb(127.5, 127.5, 127.5)')
  })

  it('works if library factory "Color" create correctly a color instance with a Hexadecimal base string color', () => {
    const color = Color('#000')

    const { string } = color.get('rgb')

    expect(string).toEqual('rgb(0, 0, 0)')
  })

  it('works if library factory "Color" create correctly a color instance with a Hexadecimal base string color', () => {
    const color = Color('hsl(50%, 100%, 100%)')

    const { string } = color.get('rgb')

    expect(string).toEqual('rgb(0, 0, 0)')
  })
})

describe('Brute test for "Color" Factory converter operations', () => {
  test('works if you can convert "rgb", "hexadecimal" and "hsl" using "Color" factory', () => {
    for (const item of data) {
      const color: SampleColor = { ...item, hexString: item.hexString.toLowerCase() }

      type TrueFont = {
        rgb: Rgb
        hex: Hex
        hsl: Hsl
      }

      const trueFont: TrueFont = {
        rgb: {
          r: color.rgb.r,
          g: color.rgb.g,
          b: color.rgb.b
        },
        hex: {
          r: color.hexString[1] + color.hexString[2],
          g: color.hexString[3] + color.hexString[4],
          b: color.hexString[5] + color.hexString[6]
        },
        hsl: {
          h: color.hsl.h,
          s: color.hsl.s,
          l: color.hsl.l
        }
      }

      const colorInstanceWithHsl = Color(trueFont.hsl)
      const colorInstanceWithHexString = Color(color.hexString)
      const colorInstanceWithRgb = Color(trueFont.rgb)
      const colorInstanceWithHex = Color(trueFont.hex)

      // Instance with HSL Instance
      expect(colorInstanceWithHsl.get('hex').object).toEqual(trueFont.hex)
      expect(colorInstanceWithHsl.get('hex').string).toEqual(color.hexString.toLowerCase())
      expect(colorInstanceWithHsl.get('rgb').object).toEqual(trueFont.rgb)
      expect(colorInstanceWithHsl.get('hsl').object).toEqual(trueFont.hsl)

      // Instance with Hex String Instance
      expect(colorInstanceWithHexString.get('hex').object).toEqual(trueFont.hex)
      expect(colorInstanceWithHexString.get('hex').string).toEqual(color.hexString.toLowerCase())
      expect(colorInstanceWithHexString.get('rgb').object).toEqual(trueFont.rgb)
      expect(colorInstanceWithHexString.get('hsl').object).toEqual(trueFont.hsl)

      // Instance with Rgb Instance
      expect(colorInstanceWithRgb.get('hex').object).toEqual(trueFont.hex)
      expect(colorInstanceWithRgb.get('hex').string).toEqual(color.hexString.toLowerCase())
      expect(colorInstanceWithRgb.get('rgb').object).toEqual(trueFont.rgb)
      expect(colorInstanceWithRgb.get('hsl').object).toEqual(trueFont.hsl)

      // Instance with Hexadecimal Instance
      expect(colorInstanceWithHex.get('hex').object).toEqual(trueFont.hex)
      expect(colorInstanceWithHex.get('hex').string).toEqual(color.hexString.toLowerCase())
      expect(colorInstanceWithHex.get('rgb').object).toEqual(trueFont.rgb)
      expect(colorInstanceWithHex.get('hsl').object).toEqual(trueFont.hsl)
    }
  })
})
