import { AnyColorFormat, Rgb, ColorState } from './color'
import Input from './input'

// ====================================================================================
// Palette Types
// ====================================================================================
export type CustomConfig = {
  r: [number, number]
  g: [number, number]
  b: [number, number]
}

// ====================================================================================
// All Method Types
// ====================================================================================
export type RandomMethod = (userConfig?: PaletteConfig) => void

// ====================================================================================
// "Input" Factory Public Types
// ====================================================================================
export type PaletteUserConfig = {
  from?: AnyColorFormat | CustomConfig
  range?: number
}

export type PaletteDefaultConfig = {
  from: AnyColorFormat | CustomConfig
  range: number
}

export type PaletteMethods = {
  random: RandomMethod
}

export type PaletteConfig = PaletteUserConfig | PaletteDefaultConfig

export type Palette = (userConfig?: PaletteUserConfig) => Readonly<PaletteMethods>

// ====================================================================================
// "Input" Factory Private Types
// ====================================================================================

// ====================================================================================
// Implementation
// ====================================================================================
const Palette: Palette = (userConfig = {}) => {
  const defaultConfig: PaletteDefaultConfig = { from: 'rgb(127.5, 127.5, 127.5)', range: 40 }

  let { from, range } = Object.assign({}, defaultConfig, userConfig)

  const useCustom = Array.isArray((from as CustomConfig).r)

  let colorOne: ColorState
  let colorTwo: ColorState

  let colorString: AnyColorFormat

  if (!useCustom) {
    colorString = from as AnyColorFormat

    const colorBase = Input(colorString).get().colorObject.rgb

    colorOne = Input({
      r: getValueInRange({ increment: -range, range: [0, 255], value: colorBase.r }),
      g: getValueInRange({ increment: -range, range: [0, 255], value: colorBase.g }),
      b: getValueInRange({ increment: -range, range: [0, 255], value: colorBase.b })
    }).get()

    colorTwo = Input({
      r: getValueInRange({ increment: range, range: [0, 255], value: colorBase.r }),
      g: getValueInRange({ increment: range, range: [0, 255], value: colorBase.g }),
      b: getValueInRange({ increment: range, range: [0, 255], value: colorBase.b })
    }).get()
  } else {
    const color = from as CustomConfig

    colorString = `rgb(${color.r[0]}, ${color.g[0]}, ${color.b[0]})`

    colorOne = Input(colorString).get()

    colorString = `rgb(${color.r[1]}, ${color.g[1]}, ${color.b[1]})`

    colorTwo = Input(colorString).get()
  }

  const self = {}

  return Object.freeze(self)
}

export default Palette
