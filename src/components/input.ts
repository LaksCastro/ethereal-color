import {
  Hsl,
  Rgb,
  Hex,
  LibraryInputForColor,
  PrivatePropertyColorState,
  PublicPropertyPaletteState
} from '../shared/@types'

import { Utils } from '../shared/utils'
import { Converter } from './converter'
import { Color } from './color'

type PaletteInput = { from: Color; options: { range: number } }

export type Input = {
  normalizeColor: (colorInAnyFormat: LibraryInputForColor) => PrivatePropertyColorState
  normalizePalette: (paletteInAnyFormat: PaletteInput) => PublicPropertyPaletteState
}

export function Input(): Input {
  const utils = Utils()
  const converter = Converter()

  const percentToHsl = utils.interpolate([0, 100], [0, 360])
  const percentToRgb = utils.interpolate([0, 100], [0, 255])

  const { getValueInRange } = utils

  function normalizeColor(colorInAnyFormat: LibraryInputForColor): PrivatePropertyColorState {
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

        rgb = { r: r as number, g: g as number, b: b as number }
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
        throw new Error('The input must be a valid color string or a valid "Color" object')

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

    return {
      string: {
        hex: hexString,
        rgb: rgbString,
        hsl: hslString
      },
      object: { rgb, hex, hsl }
    }
  }

  function normalizePalette({
    from,
    options: { range }
  }: PaletteInput): PublicPropertyPaletteState {
    const colorBase = from.get('rgb').object as Rgb

    const colorOne = {
      r: getValueInRange({ increment: -range, range: [0, 255], value: colorBase.r }),
      g: getValueInRange({ increment: -range, range: [0, 255], value: colorBase.g }),
      b: getValueInRange({ increment: -range, range: [0, 255], value: colorBase.b })
    }

    const colorTwo = {
      r: getValueInRange({ increment: range, range: [0, 255], value: colorBase.r }),
      g: getValueInRange({ increment: range, range: [0, 255], value: colorBase.g }),
      b: getValueInRange({ increment: range, range: [0, 255], value: colorBase.b })
    }

    return [Color(colorOne), Color(colorTwo)]
  }

  const self: Input = {
    normalizeColor,
    normalizePalette
  }

  return Object.freeze(self)
}
