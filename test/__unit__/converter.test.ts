import { Rgb, Hex, Hsl } from '../../src/shared/@types'
import { Converter } from '../../src/components/converter'
import data, { SampleColor } from '../shared/color-swatch'

describe('Tests the "Converter" factory', () => {
  test('works if "Converter" factory is defined and return a no-undefined value', () => {
    expect(Converter()).toBeDefined()
  })
})

describe('Tests the "Converter" methods, using sample colors data', () => {
  test('works if you can convert "rgb", "hexadecimal" and "hsl"', () => {
    const converter = Converter()

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

      const colorHexfromRgb = converter.rgbToHex(trueFont.rgb)
      const colorRgbFromHex = converter.hexToRgb(trueFont.hex)
      const colorRgbFromHsl = converter.hslToRgb(trueFont.hsl)
      const colorHslFromRgb = converter.rgbToHsl(trueFont.rgb)

      expect(colorHexfromRgb).toEqual(trueFont.hex)
      expect(colorRgbFromHex).toEqual(trueFont.rgb)
      expect(colorRgbFromHsl).toEqual(trueFont.rgb)
      expect(colorHslFromRgb).toEqual(trueFont.hsl)
    }
  })
})
