import { Hsl, Rgb, Hex } from '../shared/@types'

type ConverterFunction<I, O> = (color: I) => O

export type Converter = {
  rgbToHsl: ConverterFunction<Rgb, Hsl>
  hslToRgb: ConverterFunction<Hsl, Rgb>
  rgbToHex: ConverterFunction<Rgb, Hex>
  hexToRgb: ConverterFunction<Hex, Rgb>
}

export function Converter(): Converter {
  function rgbToHsl({ r, g, b }: Rgb): Hsl {
    const r1 = r / 255
    const g1 = g / 255
    const b1 = b / 255

    const maxColor = Math.max(r1, g1, b1)
    const minColor = Math.min(r1, g1, b1)

    let L = (maxColor + minColor) / 2
    let S = 0
    let H = 0

    if (maxColor !== minColor) {
      if (L < 0.5) S = (maxColor - minColor) / (maxColor + minColor)
      else S = (maxColor - minColor) / (2.0 - maxColor - minColor)

      if (r1 === maxColor) H = (g1 - b1) / (maxColor - minColor)
      else if (g1 === maxColor) H = 2.0 + (b1 - r1) / (maxColor - minColor)
      else H = 4.0 + (r1 - g1) / (maxColor - minColor)
    }

    L = L * 100
    S = S * 100
    H = H * 60

    if (H < 0) H += 360

    const result = {
      h: Math.abs(Number(H.toFixed(2))),
      l: Math.abs(Number(L.toFixed(2))),
      s: Math.abs(Number(S.toFixed(2)))
    }

    return result
  }

  function hslToRgb({ h, s, l }: Hsl): Rgb {
    let r: number
    let g: number
    let b: number
    let m: number
    let c: number
    let x: number

    if (!isFinite(h)) h = 0

    if (!isFinite(s)) s = 0

    if (!isFinite(l)) l = 0

    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs(2 * l - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
      r = c
      g = x
      b = 0
    } else if (h < 2) {
      r = x
      g = c
      b = 0
    } else if (h < 3) {
      r = 0
      g = c
      b = x
    } else if (h < 4) {
      r = 0
      g = x
      b = c
    } else if (h < 5) {
      r = x
      g = 0
      b = c
    } else {
      r = c
      g = 0
      b = x
    }

    m = l - c / 2
    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return {
      r: Math.abs(r),
      g: Math.abs(g),
      b: Math.abs(b)
    }
  }

  function rgbToHex({ r, g, b }: Rgb): Hex {
    const componentToHex = (component: number): string => {
      const hex = component.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }

    return {
      r: componentToHex(r),
      g: componentToHex(g),
      b: componentToHex(b)
    }
  }

  function hexToRgb({ r, g, b }: Hex): Rgb {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

    const hex = `#${r}${g}${b}`.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)

    const format = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || '#FFFFFF'

    if (!format) throw new Error(`Impossible to convert: 'rgb(${r}, ${g}, ${b})' to Hexadecimal`)

    return {
      r: Math.abs(parseInt(format[1], 16)),
      g: Math.abs(parseInt(format[2], 16)),
      b: Math.abs(parseInt(format[3], 16))
    }
  }

  const self: Converter = {
    rgbToHsl,
    hslToRgb,
    rgbToHex,
    hexToRgb
  }

  return Object.freeze(self)
}

export default Converter
