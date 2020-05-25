import * as Types from './types'

import { Hsl, Rgb, Hex } from '../../shared/@types'

import Utils from '../../shared/utils'

import Converter from '../converter'

const percentToHsl = Utils.interpolate([0, 100], [0, 360])
const percentToRgb = Utils.interpolate([0, 100], [0, 255])

class Input {
  public static normalize: Types.PublicStaticMethodNormalize = function(colorInAnyFormat) {
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
        rgb = Converter.hexToRgb(hex)
        hsl = Converter.rgbToHsl(rgb)
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

        rgb = { r: r as number, g: g as number, b: b as number }
        hex = Converter.rgbToHex(rgb)
        hsl = Converter.rgbToHsl(rgb)
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
        rgb = Converter.hslToRgb(hsl)
        hex = Converter.rgbToHex(rgb)
      } else {
        throw new Error('Only theses formats are valid: RGB, Hexadecimal and HSL')
      }
    } else {
      isHex = typeof (colorInAnyFormat as Hex).r === 'string'
      isRgb = typeof (colorInAnyFormat as Rgb).r === 'number'
      isHsl = typeof (colorInAnyFormat as Hsl).h === 'number'

      if (!isHex && !isRgb && !isHsl)
        throw new Error('The input must be a valid color string or a valid "Color" object')

      if (isRgb) {
        rgb = colorInAnyFormat as Rgb
        hex = Converter.rgbToHex(rgb)
        hsl = Converter.rgbToHsl(rgb)
      } else if (isHex) {
        hex = colorInAnyFormat as Hex
        rgb = Converter.hexToRgb(hex)
        hsl = Converter.rgbToHsl(rgb)
      } else {
        hsl = colorInAnyFormat as Hsl
        rgb = Converter.hslToRgb(hsl)
        hex = Converter.rgbToHex(rgb)
      }
    }

    const hexString = `#${hex.r}${hex.g}${hex.b}`
    const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`

    return {
      string: {
        hex: hexString,
        rgb: rgbString,
        hsl: hslString
      },
      object: { rgb, hex, hsl }
    }
  }
}

export default Input
