import { Rgb, Hex, Hsl } from '../../shared/@types'

export type PublicMethodRgbToHsl = (color: Rgb) => Hsl
export type PublicMethodHslToRgb = (color: Hsl) => Rgb
export type PublicMethodRgbToHex = (color: Rgb) => Hex
export type PublicMethodHexToRgb = (color: Hex) => Rgb
