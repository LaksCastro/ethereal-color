import { Palette } from '../../src/components/palette'
import { Color } from '../../src/components/color'

describe('Palette Factory', () => {
  describe('stupid errors', () => {
    it('is callable', () => {
      expect(Palette.bind(undefined, Color('#fff'))).not.toThrowError()
    })
    it('not return undefined', () => {
      expect(Palette(Color('#fff'))).toBeDefined()
    })
  })
  describe('basic work', () => {
    describe('create a correctly palette based on (X) color object with (Y) specification', () => {
      it('[X] = "rgb(150, 150, 150) | [Y] = "basic work, without options"', () => {
        const color = Color('rgb(150, 150, 150)')

        const palette = Palette(color)

        const [colorOne, colorTwo] = palette.get()

        expect(colorOne.get('rgb').string).toBe('rgb(110, 110, 110)')
        expect(colorTwo.get('rgb').string).toBe('rgb(190, 190, 190)')
      })
      it('[X] = "rgb(150, 150, 150) | [Y] = "sending a object with options"', () => {
        const color = Color('rgb(150, 150, 150)')

        const palette = Palette(color, { range: 100 })

        const [colorOne, colorTwo] = palette.get()

        expect(colorOne.get('rgb').string).toBe('rgb(50, 50, 50)')
        expect(colorTwo.get('rgb').string).toBe('rgb(250, 250, 250)')
      })
    })
  })
  describe('basic work but now with set() method', () => {
    describe('create a correctly palette based on (X) color object with (Y) specification', () => {
      it('[X] = "rgb(150, 150, 150) | [Y] = "basic work, without options"', () => {
        const color = Color('rgb(150, 150, 150)')

        const palette = Palette()
        palette.set(color)

        const [colorOne, colorTwo] = palette.get()

        expect(colorOne.get('rgb').string).toBe('rgb(110, 110, 110)')
        expect(colorTwo.get('rgb').string).toBe('rgb(190, 190, 190)')
      })
      it('[X] = "rgb(150, 150, 150) | [Y] = "sending a object with options"', () => {
        const color = Color('rgb(150, 150, 150)')

        const palette = Palette()
        palette.set(color, { range: 100 })

        const [colorOne, colorTwo] = palette.get()

        expect(colorOne.get('rgb').string).toBe('rgb(50, 50, 50)')
        expect(colorTwo.get('rgb').string).toBe('rgb(250, 250, 250)')
      })
    })
  })
})
