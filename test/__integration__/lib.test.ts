import Color, { Palette, Gradient, Converter } from '../../src'
import { Utils } from '../../src/shared/utils'
import { Rgb } from '../../src/shared/@types'

const utils = Utils()

describe('Basic library operations', () => {
  describe('stupid errors', () => {
    it('is callable', () => {
      expect(Color).not.toThrow()
    })
    it('not return undefined', () => {
      expect(Color()).toBeDefined()
    })
  })
  describe('basic work', () => {
    it('should work fine, without errors', () => {
      const color = Color()

      expect(color.get('hex').string === '#ffffff').toBeTruthy()

      color.set('rgb(0,0,0)')

      expect(color.get('hex').string === '#000000').toBeTruthy()

      color.random(Palette(Color('rgb(200, 200, 200)'), { range: 1 }))
      const { r, g, b } = color.get('rgb').object as Rgb

      for (const i of [r, g, b]) {
        expect(utils.itsBetween(i, [199, 201])).toBeTruthy()
      }

      const palette = Palette([Color('rgb(255,0,0)'), Color('rgb(255, 20, 150)')])

      const gradient = Gradient(palette, { count: 2 })

      const initialColor = palette.get()[0].get('rgb').string
      const finalColor = palette.get()[1].get('rgb').string

      const gradientString = gradient.toStringArray('rgb')

      expect(gradientString[0] === initialColor).toBeTruthy()
      expect(gradientString[1] === finalColor).toBeTruthy()

      const colorToConvert = Color('rgb(50%, 50%, 50%)')
      expect(colorToConvert.get('rgb').string === 'rgb(127.5, 127.5, 127.5)')

      const converter = Converter()

      const convertedColorInHsl = converter.rgbToHsl(colorToConvert.get('rgb').object as Rgb)

      expect(convertedColorInHsl.h === 0)
      expect(convertedColorInHsl.s === 0)
      expect(convertedColorInHsl.l === 50)
    })
  })
})
