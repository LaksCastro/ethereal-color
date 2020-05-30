import {
  Hsl,
  Rgb,
  Hex,
  InputForColor,
  PrivatePropertyColorState,
} from './color'

import {
  PropPaletteState,
  PropPaletteOptions,
  InputForPalette,
} from './palette'

import { PropGradientOptions, PropGradientState } from './gradient'

import { Utils } from './utils'
import { Converter } from './converter'
import { Color } from './color'
import { Palette } from './palette'

type ColorInput = { from: InputForColor }

type PaletteInput = {
  from: InputForPalette
  options: PropPaletteOptions
}

type GradientInput = {
  from: Palette
  options: PropGradientOptions
}

export type Input = {
  normalizeColor: (
    colorInAnyFormat: ColorInput,
  ) => PrivatePropertyColorState
  normalizePalette: (baseColor: PaletteInput) => PropPaletteState
  normalizeGradient: (basePalette: GradientInput) => PropGradientState
}

export function Input(): Input {
  const utils = Utils()
  const converter = Converter()

  const percentToRgb = utils.interpolate([0, 100], [0, 255])

  const { getValueInRange } = utils

  function normalizeColor({
    from: colorInAnyFormat,
  }: ColorInput): PrivatePropertyColorState {
    let isHex: boolean = false
    let isRgb: boolean = false
    let isHsl: boolean = false

    let hex: Hex
    let rgb: Rgb
    let hsl: Hsl

    if (typeof colorInAnyFormat === 'string') {
      colorInAnyFormat = colorInAnyFormat
        .replace(/\s+/g, '')
        .toLowerCase()

      isHex = Boolean(colorInAnyFormat.match(/^#/))
      isRgb = Boolean(colorInAnyFormat.match(/^rgb/))
      isHsl = Boolean(colorInAnyFormat.match(/^hsl/))

      if (!(isHex || isRgb || isHsl)) {
        throw new Error(
          'Invalid color string, must be a RGB, Hexadecimal or HSL format',
        )
      }

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
          throw new Error(
            'Opacity is not supported, try to use #FFF or #FFFFFF format',
          )
        }

        hex = { r: r as string, g: g as string, b: b as string }
        rgb = converter.hexToRgb(hex)
        hsl = converter.rgbToHsl(rgb)
      } else if (isRgb) {
        const [
          redValue,
          greenValue,
          blueValue,
        ] = colorInAnyFormat
          .replace(/(\()|(\))|(rgb)/g, '')
          .split(',')

        const percentOccurrences = colorInAnyFormat.match(/%/g)

        if (percentOccurrences && percentOccurrences.length < 3) {
          throw new Error(
            'You must use only percentage or only numbers in the color configuration',
          )
        }

        const usePercent = Boolean(percentOccurrences)

        r = usePercent
          ? percentToRgb(Number(redValue.replace(/%/g, '')))
          : Number(redValue)
        g = usePercent
          ? percentToRgb(Number(greenValue.replace(/%/g, '')))
          : Number(greenValue)
        b = usePercent
          ? percentToRgb(Number(blueValue.replace(/%/g, '')))
          : Number(blueValue)

        rgb = { r: r as number, g: g as number, b: b as number }
        hex = converter.rgbToHex(rgb)
        hsl = converter.rgbToHsl(rgb)
      } else if (isHsl) {
        const [
          hueValue,
          saturationValue,
          brightnessValue,
        ] = colorInAnyFormat
          .replace(/(\()|(\))|(hsl)|(%)/g, '')
          .split(',')

        const h = Number(hueValue)
        const s = Number(saturationValue)
        const l = Number(brightnessValue)

        hsl = {
          h,
          s,
          l,
        }
        rgb = converter.hslToRgb(hsl)
        hex = converter.rgbToHex(rgb)
      } else {
        throw new Error(
          'Only theses formats are valid: RGB, Hexadecimal and HSL',
        )
      }
    } else {
      isHex = typeof (colorInAnyFormat as Hex).r === 'string'
      isRgb = typeof (colorInAnyFormat as Rgb).r === 'number'
      isHsl = typeof (colorInAnyFormat as Hsl).h === 'number'

      if (!isHex && !isRgb && !isHsl) {
        throw new Error(
          'The input must be a valid color string or a valid "Color" object',
        )
      }

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
        hsl: hslString,
      },
      object: { rgb, hex, hsl },
    }
  }

  function normalizePalette({
    from: paletteInAnyFormat,
    options: { range },
  }: PaletteInput): PropPaletteState {
    const useRange =
      typeof (paletteInAnyFormat as Color).random === 'function'
    const useCustomRange =
      typeof (paletteInAnyFormat as PropPaletteState).map ===
      'function'

    let baseColor: Color

    if (useRange) {
      baseColor = paletteInAnyFormat as Color
    } else if (useCustomRange) {
      return paletteInAnyFormat as PropPaletteState
    } else {
      throw new Error(
        'The Palette param must be a Color or Array of Colors',
      )
    }

    const colorRef = baseColor.get('rgb').object as Rgb

    const colorOne = {
      r: getValueInRange({
        increment: -range,
        range: [0, 255],
        value: colorRef.r,
      }),
      g: getValueInRange({
        increment: -range,
        range: [0, 255],
        value: colorRef.g,
      }),
      b: getValueInRange({
        increment: -range,
        range: [0, 255],
        value: colorRef.b,
      }),
    }

    const colorTwo = {
      r: getValueInRange({
        increment: range,
        range: [0, 255],
        value: colorRef.r,
      }),
      g: getValueInRange({
        increment: range,
        range: [0, 255],
        value: colorRef.g,
      }),
      b: getValueInRange({
        increment: range,
        range: [0, 255],
        value: colorRef.b,
      }),
    }

    return [Color(colorOne), Color(colorTwo)]
  }

  function normalizeGradient({
    from: basePalette,
    options: { count },
  }: GradientInput): PropGradientState {
    const initialColor = basePalette.get()[0].get('rgb').object as Rgb
    const finalColor = basePalette.get()[1].get('rgb').object as Rgb

    const difR = finalColor.r - initialColor.r
    const difG = finalColor.g - initialColor.g
    const difB = finalColor.b - initialColor.b

    const incrementR = difR / (count - 1)
    const incrementG = difG / (count - 1)
    const incrementB = difB / (count - 1)

    const colors: Color[] = []

    for (
      let i = 0,
        r = initialColor.r,
        g = initialColor.g,
        b = initialColor.b;
      i < count;
      i++, r += incrementR, g += incrementG, b += incrementB
    ) {
      const color = Color({
        r: utils.oneDecimalPlace(r),
        g: utils.oneDecimalPlace(g),
        b: utils.oneDecimalPlace(b),
      })
      colors.push(color)
    }

    return colors
  }

  const self: Input = {
    normalizeColor,
    normalizePalette,
    normalizeGradient,
  }

  return Object.freeze(self)
}
