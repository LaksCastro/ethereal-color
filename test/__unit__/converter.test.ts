import { Rgb, Hex, Hsl } from '../../src/components/color'
import Converter from '../../src/components/converter'
import data, { SampleColor } from '../shared/color-swatch'

describe('Tests the "Converter" factory', () => {
  test('works if "Converter" factory is defined and return a no-undefined value', () => {
    expect(Converter()).toBeDefined()
  })
})
describe('Tests the "Converter" methods, using sample colors data', () => {
  test('works if you can convert rgb to hexadecimal', () => {
    const converter = Converter()

    for (const item of data) {
      const color: SampleColor = { ...item, hexString: item.hexString.toLocaleLowerCase() }

      const rgb: Rgb = {
        r: color.rgb.r,
        g: color.rgb.g,
        b: color.rgb.b
      }

      const hex: Hex = {
        r: color.hexString[1] + color.hexString[2],
        g: color.hexString[3] + color.hexString[4],
        b: color.hexString[5] + color.hexString[6]
      }

      const colorInHexadecimal = converter.rgbToHex(rgb)
      const colorInRgb = converter.hexToRgb(hex)

      const { r: hexR, g: hexG, b: hexB } = colorInHexadecimal
      const { r, g, b } = colorInRgb

      const colorInHexadecimalAreValid = hexR === hex.r && hexG === hex.g && hexB === hexB
      const colorInRgbAreValid = r === rgb.r && g === rgb.g && b === rgb.b

      expect(colorInHexadecimalAreValid).toBeTruthy()
      expect(colorInRgbAreValid).toBeTruthy()
    }
  })
})
