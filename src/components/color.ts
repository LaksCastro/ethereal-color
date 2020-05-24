import Utils from '../shared/utils'
import Converter from './converter'
import Input from './input'

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

export type AnyColorFormat = ValidColorsTypes | string

// ====================================================================================
// Color Formats
// ====================================================================================
export enum ValidColorsFormats {
  rgb = 'rgb',
  hex = 'hex',
  hsl = 'hsl'
}

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
  // random: Color
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

export type ColorState = {
  colorString: ColorString
  colorObject: ColorObject
}

export type ColorBase = ValidColorsTypes | string

export type Color = (userConfig?: ColorBase) => Readonly<ColorMethods>

// ====================================================================================
// "Color" Factory Private Types
// ====================================================================================
type SetStatePrivateMethod = (newState: ColorState) => object

type GetStatePrivateMethod = () => ColorState

// ====================================================================================
// Implementation
// ====================================================================================
const Color: Color = (userConfig = '#FFFFFF') => {
  // const percentToHsl = utils.interpolate([0, 100], [0, 360])
  // const percentToRgb = utils.interpolate([0, 100], [0, 255])
  const input = Input(userConfig)

  let state: ColorState = input.get()

  const setState: SetStatePrivateMethod = newState => (state = newState)

  const getState: GetStatePrivateMethod = () => state

  // const change = () =>

  const get: GetMethod = type => {
    return {
      object: getState().colorObject[type],
      string: getState().colorString[type]
    }
  }

  // const random: Color = userConfig => Color(`rgb(${utils.random})`)

  const self = {
    // random,
    get
  }

  return Object.freeze(self)
}

export default Color
