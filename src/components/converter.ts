import { Rgb, Hex, Hsl, Xyz, Lab, Lchab } from './color'

// ====================================================================================
// All available color types
// ====================================================================================
export enum ValidTypes {
  rgb = 'rgb',
  hex = 'hex',
  hsl = 'hsl',
  xyz = 'xyz',
  lab = 'lab',
  lchab = 'lchab'
}

// ====================================================================================
// All converter methods
// ====================================================================================
export type RgbToHslMethod = (color: Rgb) => Hsl
export type HslToRgbMethod = (color: Hsl) => Rgb
export type RgbToHexMethod = (color: Rgb) => Hex
export type HexToRgbMethod = (color: Hex) => Rgb
export type RgbToXyzMethod = (color: Rgb) => Xyz
export type XyzToRgbMethod = (color: Xyz) => Rgb
export type XyzToLabMethod = (color: Xyz) => Lab
export type LabToXyzMethod = (color: Lab) => Xyz
export type LabToLchabMethod = (color: Lab) => Lchab
export type LchabToLabMethod = (color: Lchab) => Lab

// ====================================================================================
// "Converter" Factory Types
// ====================================================================================
export type ConverterMethods = {
  rgbToHsl: RgbToHslMethod
  hslToRgb: HslToRgbMethod
  rgbToHex: RgbToHexMethod
  hexToRgb: HexToRgbMethod
  rgbToXyz: RgbToXyzMethod
  xyzToRgb: XyzToRgbMethod
  xyzToLab: XyzToLabMethod
  labToXyz: LabToXyzMethod
  labToLchab: LabToLchabMethod
  lchabToLab: LchabToLabMethod
}

export type Converter = () => Readonly<ConverterMethods>

// ====================================================================================
// Implementation
// ====================================================================================
const Converter: Converter = () => {
  const rgbToHsl: RgbToHslMethod = ({ r, g, b }) => {
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

    return {
      h: H,
      l: L,
      s: S
    }
  }

  const hslToRgb: HslToRgbMethod = ({ h, s, l }) => {
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
      r,
      g,
      b
    }
  }

  const rgbToHex: RgbToHexMethod = ({ r, g, b }) => {
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

  const hexToRgb: HexToRgbMethod = ({ r, g, b }) => {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

    const hex = `#${r}${g}${b}`.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)

    const format = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || '#FFFFFF'

    if (!format) throw new Error('Impossible to convert: ' + r + b + b + ' to Hexadecimal')

    const result: Rgb = {
      r: parseInt(format[1], 16),
      g: parseInt(format[2], 16),
      b: parseInt(format[3], 16)
    }

    return result
  }

  const rgbToXyz: RgbToXyzMethod = ({ r, g, b }) => {
    const cR = r / 255
    const cG = g / 255
    const cB = b / 255

    const invCompand = (compand: number): number =>
      compand <= 0.04045 ? compand / 12.92 : Math.pow((compand + 0.055) / 1.055, 2.4)

    const invR = invCompand(cR)
    const invG = invCompand(cG)
    const invB = invCompand(cB)

    const x = 0.4124 * invR + 0.3576 * invG + 0.1805 * invB
    const y = 0.2126 * invR + 0.7152 * invG + 0.0722 * invB
    const z = 0.0193 * invR + 0.1192 * invG + 0.9505 * invB

    const result: Xyz = {
      x: x * 100,
      y: y * 100,
      z: z * 100
    }

    return result
  }

  const xyzToRgb: XyzToRgbMethod = ({ x, y, z }) => {
    x = x / 100
    y = y / 100
    z = z / 100

    const invR = 3.2406254773200533 * x - 1.5372079722103187 * y - 0.4986285986982479 * z
    const invG = -0.9689307147293197 * x + 1.8757560608852415 * y + 0.041517523842953964 * z
    const invB = 0.055710120445510616 * x + -0.2040210505984867 * y + 1.0569959422543882 * z

    const compand = (c: number): number =>
      c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055

    const cR = compand(invR)
    const cG = compand(invG)
    const cB = compand(invB)

    const result = {
      r: Math.round(cR * 255),
      g: Math.round(cG * 255),
      b: Math.round(cB * 255)
    }

    return result
  }

  const xyzToLab: XyzToLabMethod = ({ x, y, z }) => {
    const d65White = [95.05, 100, 108.9]
    const xR = x / d65White[0]
    const yR = y / d65White[1]
    const zR = z / d65White[2]
    const eps = 216 / 24389
    const kap = 24389 / 27

    const fwdTrans = (c: number): number => (c > eps ? Math.pow(c, 1 / 3) : (kap * c + 16) / 116)

    const fX = fwdTrans(xR)
    const fY = fwdTrans(yR)
    const fZ = fwdTrans(zR)

    const l = 116 * fY - 16
    const a = 500 * (fX - fY)
    const b = 200 * (fY - fZ)

    const result: Lab = {
      l,
      a,
      b
    }

    return result
  }

  const labToXyz: LabToXyzMethod = ({ l, a, b }) => {
    const d65White = [95.05, 100, 108.9]
    const eps = 216 / 24389
    const kap = 24389 / 27

    const fY = (l + 16) / 116
    const fZ = fY - b / 200
    const fX = a / 500 + fY

    const xR = Math.pow(fX, 3) > eps ? Math.pow(fX, 3) : (116 * fX - 16) / kap
    const yR = l > kap * eps ? Math.pow((l + 16) / 116, 3) : l / kap
    const zR = Math.pow(fZ, 3) > eps ? Math.pow(fZ, 3) : (116 * fZ - 16) / kap

    const result: Xyz = {
      x: xR * d65White[0],
      y: yR * d65White[1],
      z: zR * d65White[2]
    }

    return result
  }

  const labToLchab: LabToLchabMethod = ({ l, a, b }) => {
    const c = Math.sqrt(a * a + b * b)
    const h =
      Math.atan2(b, a) >= 0
        ? (Math.atan2(b, a) / Math.PI) * 180
        : (Math.atan2(b, a) / Math.PI) * 180 + 360

    const result: Lchab = {
      l,
      c,
      h
    }

    return result
  }

  const lchabToLab: LchabToLabMethod = ({ l, c, h }) => {
    const a = c * Math.cos((h / 180) * Math.PI)
    const b = c * Math.sin((h / 180) * Math.PI)

    const result: Lab = {
      l,
      a,
      b
    }
    return result
  }

  const self = {
    rgbToHsl,
    hslToRgb,
    rgbToHex,
    hexToRgb,
    rgbToXyz,
    xyzToRgb,
    xyzToLab,
    labToXyz,
    labToLchab,
    lchabToLab
  }

  return Object.freeze(self)
}

export default Converter
