import Utils from '../shared/utils'
import Converter from './converter'

// ====================================================================================
// Color Types
// ====================================================================================
export type Rgb = {
  r: number
  g: number
  b: number
}
export type Hex = {
  r: string
  g: string
  b: string
}
export type Hsl = {
  h: number
  s: number
  l: number
}
export type ValidColorsTypes = Rgb | Hex | Hsl

// ====================================================================================
// Color Formats
// ====================================================================================
export enum ValidColorsFormats {
  rgb = 'rgb',
  hex = 'hex',
  hsl = 'hsl'
}

// ====================================================================================
// "Random" Method Types
// ====================================================================================
export type RandomMethod = (userConfig?: object) => ValidColorsTypes

// ====================================================================================
// "Get" Factory Types
// ====================================================================================
export type GetColorObject = {
  string: string
  object: ValidColorsTypes
}
export type GetMethod = (type: ValidColorsFormats) => GetColorObject

// ====================================================================================
// "Color" Factory Public Types
// ====================================================================================
export type ColorMethods = {
  random: RandomMethod
  get: GetMethod
}

export type ColorObject = {
  rgb: Rgb
  hsl: Hsl
  hex: Hex
}
export type ColorString = {
  rgb: string
  hsl: string
  hex: string
}

export type ColorBase = ValidColorsTypes | string

export type Color = (userConfig?: ColorBase) => Readonly<ColorMethods>

// ====================================================================================
// "Color" Factory Private Types
// ====================================================================================
type ColorState = {
  colorString: ColorString
  colorObject: ColorObject
}

type SetStatePrivateMethod = (newState: () => ColorState | ColorState) => object

type GetStatePrivateMethod = () => ColorState

const Color: Color = (userConfig = '#FFFFFF') => {
  const utils = Utils()
  const converter = Converter()

  const percentToHsl = utils.interpolate([0, 100], [0, 360])
  const percentToRgb = utils.interpolate([0, 100], [0, 255])

  let state: ColorState

  const setState: SetStatePrivateMethod = newState => {
    state = typeof newState === 'function' ? newState() : newState

    return state
  }

  const getState: GetStatePrivateMethod = () => state

  const initilize = () => {
    let isHex: boolean = false
    let isRgb: boolean = false
    let isHsl: boolean = false

    let hex: Hex
    let rgb: Rgb
    let hsl: Hsl

    if (typeof userConfig === 'string') {
      userConfig = userConfig.replace(/\s+/g, '').toLowerCase()

      isHex = Boolean(userConfig.match(/^#/))
      isRgb = Boolean(userConfig.match(/^rgb/))
      isHsl = Boolean(userConfig.match(/^hsl/))

      if (!(isHex || isRgb || isHsl))
        throw new Error('Invalid color string, must be a RGB, Hexadecimal or HSL format')

      let r: string | number
      let g: string | number
      let b: string | number

      if (isHex) {
        const { length } = userConfig

        if (length === 4) {
          r = userConfig[1] + userConfig[1]
          g = userConfig[2] + userConfig[2]
          b = userConfig[3] + userConfig[3]
        } else if (length === 7) {
          r = userConfig[1] + userConfig[2]
          g = userConfig[3] + userConfig[4]
          b = userConfig[5] + userConfig[6]
        } else {
          throw new Error('Opacity is not supported, try to use #FFF or #FFFFFF format')
        }

        hex = { r, g, b }
        rgb = converter.hexToRgb(hex)
        hsl = converter.rgbToHsl(rgb)
      } else if (isRgb) {
        const [redValue, greenValue, blueValue] = userConfig
          .replace(/(\()|(\))|(rgb)/g, '')
          .split(',')

        const percentOccurrences = userConfig.match(/%/g)

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
        const [hueValue, saturationValue, brightnessValue] = userConfig
          .replace(/(\()|(\))|(hsl)/g, '')
          .split(',')

        const percentOccurrences = userConfig.match(/%/g)

        if (percentOccurrences && percentOccurrences.length < 3)
          throw new Error('You must use only percentage or only numbers in the color configuration')

        const usePercent = Boolean(percentOccurrences)

        const h = usePercent ? percentToHsl(Number(hueValue.replace(/%/g, ''))) : Number(hueValue)
        const s = usePercent
          ? percentToHsl(Number(saturationValue.replace(/%/g, '')))
          : Number(saturationValue)
        const l = usePercent
          ? percentToHsl(Number(brightnessValue.replace(/%/g, '')))
          : Number(brightnessValue)

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
      try {
        const config = userConfig as Hex
        isHex = typeof config.r === 'string'
      } catch (error) {
        try {
          const config = userConfig as Rgb
          isRgb = typeof config.r === 'number'
        } catch (error) {
          try {
            const config = userConfig as Hsl
            isHsl = typeof config.h === 'number'
          } catch (error) {
            throw new Error('The input must be a valid color string or a valid color object')
          }
        }
      }
      if (isRgb) {
        rgb = userConfig as Rgb
        hex = converter.rgbToHex(rgb)
        hsl = converter.rgbToHsl(rgb)
      } else if (isHex) {
        hex = userConfig as Hex
        rgb = converter.hexToRgb(hex)
        hsl = converter.rgbToHsl(rgb)
      } else {
        hsl = userConfig as Hsl
        rgb = converter.hslToRgb(hsl)
        hex = converter.rgbToHex(rgb)
      }
    }

    const hexString = `#${hex.r}${hex.g}${hex.b}`
    const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    const hslString = `hsl(${hsl.h}, ${hsl.s}, ${hsl.l})`

    setState(() => ({
      colorString: {
        hex: hexString,
        rgb: rgbString,
        hsl: hslString
      },
      colorObject: { rgb, hex, hsl }
    }))
  }

  initilize()

  const get: GetMethod = type => {
    const result: GetColorObject = {
      object: getState().colorObject[type],
      string: getState().colorString[type]
    }

    return result
  }

  const random: RandomMethod = userConfig => ({ r: 255, b: 255, g: 4555 })

  const self = {
    random,
    get
  }

  return Object.freeze(self)
}

export default Color
