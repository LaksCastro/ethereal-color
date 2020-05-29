import { Color } from '../../components/color'
import { Palette } from '../../components/palette'
import { Rgb } from '../../shared/@types'

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
  })
  describe('test feature to generate random colors with (X) specification', () => {
    it('[X] = "basic randomic color generator"', () => {
      const colors: Color[] = Array.from({ length: 100 }).map(() => {
        const color = Color()

        color.random()

        return color
      })

      const randomColors = colors.filter(
        color => color.get('rgb').string !== 'rgb(255, 255, 255)',
      )

      expect(randomColors.length).not.toBe(0)
    })
    it('[X] = "basic randomic color generator using a palette"', () => {
      const range = 40

      const rValue = 150
      const gValue = 50
      const bValue = 200

      const minR = rValue - range
      const minG = gValue - range
      const minB = bValue - range

      const maxR = rValue + range
      const maxG = gValue + range
      const maxB = bValue + range

      const palette = Palette(
        Color(`rgb(${rValue}, ${gValue}, ${bValue})`),
      )

      const colors: Color[] = Array.from({ length: 100 }).map(() => {
        const color = Color()

        color.random(palette)

        return color
      })

      const invalidRandomColors = colors.filter(color => {
        const { r, g, b } = color.get('rgb').object as Rgb

        const redInvalid = r > maxR || r < minR
        const greenInvalid = g > maxG || g < minG
        const blueInvalid = b > maxB || b < minB

        return redInvalid || greenInvalid || blueInvalid
      })

      expect(invalidRandomColors.length).toBe(0)
    })
  })
})
