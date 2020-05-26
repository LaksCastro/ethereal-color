import { Color } from '../../src/components/color'
import { Rgb, Hex, Hsl } from '../../src/shared/@types'
import data, { SampleColor } from '../shared/color-swatch'

describe('Color Factory', () => {
  describe('stupid errors', () => {
    it('is callable', () => {
      expect(Color.bind(undefined, '#fff')).not.toThrow()
    })

    it('not return undefined', () => {
      expect(Color('#fff')).toBeDefined()
    })
  })
  describe('basic work', () => {
    describe('if is possible create a color with (X) and get the same format (X)', () => {
      it('[X] = "Hedecimal"', () => {
        const color = Color('#fff')

        const { string } = color.get('hex')

        expect(string).toEqual('#ffffff')
      })

      it('[X] = "Rgb"', () => {
        const color = Color('rgb(50%, 50%, 50%)')

        const { string } = color.get('rgb')

        expect(string).toEqual('rgb(127.5, 127.5, 127.5)')
      })

      it('[X] = "Hsl"', () => {
        const color = Color('hsl(180, 50%, 50%)')

        const { string } = color.get('hsl')

        expect(string).toEqual('hsl(180, 50%, 50%)')
      })
    })
    describe('if is possible create a color with (X) and get in the (Y) format', () => {
      it('[X] = "Hexadecimal" | [Y] = "Rgb"', () => {
        const color = Color('#000')

        const { string } = color.get('rgb')

        expect(string).toEqual('rgb(0, 0, 0)')
      })
      it('[x] = "Hsl" | [Y] = "Rgb"', () => {
        const color = Color('hsl(60,100%,50%)')

        const { string } = color.get('rgb')

        expect(string).toEqual('rgb(255, 255, 0)')
      })
    })
    it('should convert Hsl, Rgb and Hexadecimal color formats', () => {
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
  describe('basic work but now using set() method', () => {
    describe('if is possible create a color with (X) and get the same format (X)', () => {
      it('[X] = "Hedecimal"', () => {
        const color = Color()

        color.set('#fff')

        const { string } = color.get('hex')

        expect(string).toEqual('#ffffff')
      })

      it('[X] = "Rgb"', () => {
        const color = Color()

        color.set('rgb(50%, 50%, 50%)')

        const { string } = color.get('rgb')

        expect(string).toEqual('rgb(127.5, 127.5, 127.5)')
      })

      it('[X] = "Hsl"', () => {
        const color = Color()

        color.set('hsl(180, 50%, 50%)')

        const { string } = color.get('hsl')

        expect(string).toEqual('hsl(180, 50%, 50%)')
      })
    })
    describe('if is possible create a color with (X) and get in the (Y) format', () => {
      it('[X] = "Hexadecimal" | [Y] = "Rgb"', () => {
        const color = Color()

        color.set('#000')

        const { string } = color.get('rgb')

        expect(string).toEqual('rgb(0, 0, 0)')
      })
      it('[x] = "Hsl" | [Y] = "Rgb"', () => {
        const color = Color('hsl(60,100%,50%)')

        const { string } = color.get('rgb')

        expect(string).toEqual('rgb(255, 255, 0)')
      })
    })
    it('should convert Hsl, Rgb and Hexadecimal color formats', () => {
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

        const colorInstanceWithHsl = Color()
        colorInstanceWithHsl.set(trueFont.hsl)

        const colorInstanceWithHexString = Color()
        colorInstanceWithHexString.set(color.hexString)

        const colorInstanceWithRgb = Color()
        colorInstanceWithRgb.set(trueFont.rgb)

        const colorInstanceWithHex = Color()
        colorInstanceWithHex.set(trueFont.hex)

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
})
