import { Rgb, Hex, Hsl } from '../../src/components/color'
import Converter from '../../src/components/converter'
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

      let colorHexfromRgb = converter.rgbToHex(trueFont.rgb)
      let colorRgbFromHex = converter.hexToRgb(trueFont.hex)
      let colorRgbFromHsl = converter.hslToRgb(trueFont.hsl)
      let colorHslFromRgb = converter.rgbToHsl(trueFont.rgb)

      // to round large decimal places, for example: 21.098989956 turns 21.1
      colorRgbFromHex = {
        ...colorRgbFromHex,
        r: Math.abs(Number(colorRgbFromHex.r.toFixed(2))),
        g: Math.abs(Number(colorRgbFromHex.g.toFixed(2))),
        b: Math.abs(Number(colorRgbFromHex.b.toFixed(2)))
      }
      colorRgbFromHsl = {
        ...colorRgbFromHsl,
        r: Math.abs(Number(colorRgbFromHsl.r.toFixed(2))),
        g: Math.abs(Number(colorRgbFromHsl.g.toFixed(2))),
        b: Math.abs(Number(colorRgbFromHsl.b.toFixed(2)))
      }
      colorHslFromRgb = {
        ...colorHslFromRgb,
        h: Math.abs(Number(colorHslFromRgb.h.toFixed(2))),
        s: Math.abs(Number(colorHslFromRgb.s.toFixed(2))),
        l: Math.abs(Number(colorHslFromRgb.l.toFixed(2)))
      }

      expect(colorHexfromRgb).toEqual(trueFont.hex)
      expect(colorRgbFromHex).toEqual(trueFont.rgb)
      expect(colorRgbFromHsl).toEqual(trueFont.rgb)
      expect(colorHslFromRgb).toEqual(trueFont.hsl)
    }
  })
})
