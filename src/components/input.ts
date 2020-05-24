import { AnyColorFormat, ColorState, Rgb, Hex, Hsl } from './color'
import Converter from './converter'
import Utils from '../shared/utils'

// ====================================================================================
// All Method Types
// ====================================================================================
export type GetMethod = () => ColorState

export type SetMethod = (color: AnyColorFormat) => ColorState

// ====================================================================================
// "Input" Factory Public Types
// ====================================================================================
export type InputMethods = {
  get: GetMethod
  set: SetMethod
}
export type Input = (color: AnyColorFormat) => Readonly<InputMethods>

// ====================================================================================
// "Input" Factory Private Types
// ====================================================================================
type AnyFormatToStateMethod = (colorInAnyFormat: AnyColorFormat) => ColorState

// ====================================================================================
// Implementation
// ====================================================================================
const Input: Input = color => {
  const utils = Utils()
  const converter = Converter()

  const percentToHsl = utils.interpolate([0, 100], [0, 360])
  const percentToRgb = utils.interpolate([0, 100], [0, 255])

  const anyFormatToState: AnyFormatToStateMethod = colorInAnyFormat => {
    let isHex: boolean = false
    let isRgb: boolean = false
    let isHsl: boolean = false

    let hex: Hex
    let rgb: Rgb
    let hsl: Hsl

    if (typeof colorInAnyFormat === 'string') {
      colorInAnyFormat = colorInAnyFormat.replace(/\s+/g, '').toLowerCase()

      isHex = Boolean(colorInAnyFormat.match(/^#/))
      isRgb = Boolean(colorInAnyFormat.match(/^rgb/))
      isHsl = Boolean(colorInAnyFormat.match(/^hsl/))

      if (!(isHex || isRgb || isHsl))
        throw new Error('Invalid color string, must be a RGB, Hexadecimal or HSL format')

      let r: string | number
      let g: string | number
      let b: string | number

      if (isHex) {
        const { length } = colorInAnyFormat

        if (length === 4) {
          r = colorInAnyFormat[1] + colorInAnyFormat[1]
          g = colorInAnyFormat[2] + colorInAnyFormat[2]
          b = colorInAnyFormat[3] + colorInAnyFormat[3]
        } else if (length === 7) {
          r = colorInAnyFormat[1] + colorInAnyFormat[2]
          g = colorInAnyFormat[3] + colorInAnyFormat[4]
          b = colorInAnyFormat[5] + colorInAnyFormat[6]
        } else {
          throw new Error('Opacity is not supported, try to use #FFF or #FFFFFF format')
        }

        hex = { r: r as string, g: g as string, b: b as string }
        rgb = converter.hexToRgb(hex)
        hsl = converter.rgbToHsl(rgb)
      } else if (isRgb) {
        const [redValue, greenValue, blueValue] = colorInAnyFormat
          .replace(/(\()|(\))|(rgb)/g, '')
          .split(',')

        const percentOccurrences = colorInAnyFormat.match(/%/g)

        if (percentOccurrences && percentOccurrences.length < 3)
          throw new Error('You must use only percentage or only numbers in the color configuration')

        const usePercent = Boolean(percentOccurrences)

        r = usePercent ? percentToRgb(Number(redValue.replace(/%/g, ''))) : Number(redValue)
        g = usePercent ? percentToRgb(Number(greenValue.replace(/%/g, ''))) : Number(greenValue)
        b = usePercent ? percentToRgb(Number(blueValue.replace(/%/g, ''))) : Number(blueValue)

        rgb = { r, g, b }
        hex = converter.rgbToHex(rgb)
        hsl = converter.rgbToHsl(rgb)
      } else if (isHsl) {
        const [hueValue, saturationValue, brightnessValue] = colorInAnyFormat
          .replace(/(\()|(\))|(hsl)/g, '')
          .split(',')

        const usePercent = Boolean(hueValue.match(/%/g))

        const h = usePercent ? percentToHsl(Number(hueValue.replace(/%/g, ''))) : Number(hueValue)
        const s = Number(saturationValue)
        const l = Number(brightnessValue)

        hsl = {
          h,
          s,
          l
        }
        rgb = converter.hslToRgb(hsl)
        hex = converter.rgbToHex(rgb)
      } else {
        throw new Error('Only theses formats are valid: RGB, Hexadecimal and HSL')
      }
    } else {
      isHex = typeof (colorInAnyFormat as Hex).r === 'string'

      isRgb = typeof (colorInAnyFormat as Rgb).r === 'number'
      isHsl = typeof (colorInAnyFormat as Hsl).h === 'number'

      if (!isHex && !isRgb && !isHsl)
        throw new Error('The input must be a valid color string or a valid colorInAnyFormat object')

      if (isRgb) {
        rgb = colorInAnyFormat as Rgb
        hex = converter.rgbToHex(rgb)
        hsl = converter.rgbToHsl(rgb)
      } else if (isHex) {
        hex = colorInAnyFormat as Hex
        rgb = converter.hexToRgb(hex)
        hsl = converter.rgbToHsl(rgb)
      } else {
        hsl = colorInAnyFormat as Hsl
        rgb = converter.hslToRgb(hsl)
        hex = converter.rgbToHex(rgb)
      }
    }

    const hexString = `#${hex.r}${hex.g}${hex.b}`
    const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`

    const result: ColorState = {
      colorString: {
        hex: hexString,
        rgb: rgbString,
        hsl: hslString
      },
      colorObject: { rgb, hex, hsl }
    }

    return result
  }

  let state: ColorState = anyFormatToState(color)

  const get: GetMethod = () => state

  const set: SetMethod = color => (state = anyFormatToState(color))

  const self = {
    get,
    set
  }

  return Object.freeze(self)
}

export default Input
