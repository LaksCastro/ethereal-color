import { Color } from '../../components/color'
import { Palette } from '../../components/palette'
import { Gradient } from '../../components/gradient'

import { Utils } from '../../shared/utils'

const utils = Utils()

describe('Gradient Factory', () => {
  describe('stupid errors', () => {
    it('is callable', () => {
      expect(Gradient.bind(undefined, Palette(Color()))).not.toThrow()
    })

    it('not return undefined', () => {
      expect(Gradient.bind(undefined, Palette(Color()))).toBeDefined()
    })
  })
  describe('basic work, using (X) method and (Y) specification', () => {
    it('[X] = "toStringArray" | [Y] = "with default options"', () => {
      const color = Color('rgb(120, 120, 120)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient(palette)

      const gradientString = gradient.toStringArray('rgb')

      expect(gradientString).toEqual([
        'rgb(110, 110, 110)',
        'rgb(115, 115, 115)',
        'rgb(120, 120, 120)',
        'rgb(125, 125, 125)',
        'rgb(130, 130, 130)',
      ])
    })
    it('[X] = "toStringArray" | [Y] = with custom options #1', () => {
      const color = Color('rgb(120, 120, 120)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient(palette, { count: 2 })

      const gradientString = gradient.toStringArray('rgb')

      expect(gradientString).toEqual([
        'rgb(110, 110, 110)',
        'rgb(130, 130, 130)',
      ])
    })
    it('[X] = "toStringArray" | with custom options #2', () => {
      const color = Color('rgb(120, 120, 120)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient(palette, { count: 20 })

      const gradientString = gradient.toStringArray('rgb')

      let value = 110

      expect(gradientString).toEqual(
        Array.from({ length: 20 }).map(() => {
          const str = `rgb(${utils.oneDecimalPlace(
            value,
          )}, ${utils.oneDecimalPlace(
            value,
          )}, ${utils.oneDecimalPlace(value)})`
          value += 20 / 19
          return str
        }),
      )
    })
    it('[X] = "toObjectArray" | with dif R|G|B values', () => {
      const gradientCount = 5

      const color = Color('rgb(100, 120, 200)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient(palette)

      const gradientObject = gradient.toObjectArray('rgb')

      let valueR = 90
      let valueG = 110
      let valueB = 190

      expect(gradientObject).toEqual(
        Array.from({ length: gradientCount }).map(() => {
          const color = Color({
            r: utils.oneDecimalPlace(valueR),
            g: utils.oneDecimalPlace(valueG),
            b: utils.oneDecimalPlace(valueB),
          })

          valueR += 20 / (gradientCount - 1)
          valueG += 20 / (gradientCount - 1)
          valueB += 20 / (gradientCount - 1)

          return color.get('rgb').object
        }),
      )
    })
  })
  describe('basic work, using (X) method and (Y) specification but with set() method', () => {
    it('[X] = "toStringArray" | [Y] = "with default options"', () => {
      const color = Color('rgb(120, 120, 120)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient()
      gradient.set(palette)

      const gradientString = gradient.toStringArray('rgb')

      expect(gradientString).toEqual([
        'rgb(110, 110, 110)',
        'rgb(115, 115, 115)',
        'rgb(120, 120, 120)',
        'rgb(125, 125, 125)',
        'rgb(130, 130, 130)',
      ])
    })
    it('[X] = "toStringArray" | [Y] = with custom options #1', () => {
      const color = Color('rgb(120, 120, 120)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient()
      gradient.set(palette, { count: 2 })

      const gradientString = gradient.toStringArray('rgb')

      expect(gradientString).toEqual([
        'rgb(110, 110, 110)',
        'rgb(130, 130, 130)',
      ])
    })
    it('[X] = "toStringArray" | with custom options #2', () => {
      const color = Color('rgb(120, 120, 120)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient()
      gradient.set(palette, { count: 20 })

      const gradientString = gradient.toStringArray('rgb')

      let value = 110

      expect(gradientString).toEqual(
        Array.from({ length: 20 }).map(() => {
          const str = `rgb(${utils.oneDecimalPlace(
            value,
          )}, ${utils.oneDecimalPlace(
            value,
          )}, ${utils.oneDecimalPlace(value)})`
          value += 20 / 19
          return str
        }),
      )
    })
    it('[X] = "toObjectArray" | with dif R|G|B values', () => {
      const gradientCount = 5

      const color = Color('rgb(100, 120, 200)')

      const palette = Palette(color, { range: 10 })

      const gradient = Gradient()
      gradient.set(palette)

      const gradientObject = gradient.toObjectArray('rgb')

      let valueR = 90
      let valueG = 110
      let valueB = 190

      expect(gradientObject).toEqual(
        Array.from({ length: gradientCount }).map(() => {
          const color = Color({
            r: utils.oneDecimalPlace(valueR),
            g: utils.oneDecimalPlace(valueG),
            b: utils.oneDecimalPlace(valueB),
          })

          valueR += 20 / (gradientCount - 1)
          valueG += 20 / (gradientCount - 1)
          valueB += 20 / (gradientCount - 1)

          return color.get('rgb').object
        }),
      )
    })
  })
})
