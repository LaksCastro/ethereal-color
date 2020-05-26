import { Color } from '../../src/components/color'
import { Palette } from '../../src/components/palette'
import { Gradient } from '../../src/components/gradient'
import { Rgb, Hex, Hsl } from '../../src/shared/@types'
import data, { SampleColor } from '../shared/color-swatch'

describe('Gradient Factory', () => {
  describe('stupid errors', () => {
    it('is callable', () => {
      expect(Gradient.bind(undefined, Palette(Color()))).not.toThrow()
    })

    it('not return undefined', () => {
      expect(Gradient.bind(undefined, Palette(Color()))).toBeDefined()
    })
  })
  describe('basic work, using (X) method', () => {
    it('[X] = "toStringArray"', () => {
      const color = Color('rgb(120, 120, 120)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient(palette)

      const gradientString = gradient.toStringArray('rgb')

      expect(gradientString).toEqual([
        'rgb(110, 110, 110)',
        'rgb(115, 115, 115)',
        'rgb(120, 120, 120)',
        'rgb(125, 125, 125)',
        'rgb(130, 130, 130)'
      ])
    })
    it('[X] = "toStringArray" - with custom options', () => {
      const color = Color('rgb(120, 120, 120)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient(palette, { count: 2, use: 'linear' })

      const gradientString = gradient.toStringArray('rgb')

      expect(gradientString).toEqual(['rgb(110, 110, 110)', 'rgb(130, 130, 130)'])
    })
  })
})
