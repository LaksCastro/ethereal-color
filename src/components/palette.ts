import { AnyColorFormat, Rgb, ColorState } from './color'
import Input from './input'
import Utils from '../shared/utils'

// ====================================================================================
// Palette Types
// ====================================================================================
export type PaletteOfColors = [ColorState, ColorState]

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

export type PaletteConfig = PaletteUserConfig & PaletteDefaultConfig

export type Palette = (userConfig?: PaletteUserConfig) => Readonly<PaletteMethods>

// ====================================================================================
// "Input" Factory Private Types
// ====================================================================================
export type DefinePalettePrivateMethod = (config: PaletteConfig) => PaletteOfColors

// ====================================================================================
// Implementation
// ====================================================================================
const Palette: Palette = (userConfig = {}) => {
  const { getValueInRange } = Utils()

  const definePalette: DefinePalettePrivateMethod = ({ from, range }) => {
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
    return [colorOne, colorTwo]
  }

  const defaultConfig: PaletteDefaultConfig = { from: 'rgb(127.5, 127.5, 127.5)', range: 40 }

  let config = Object.assign({}, defaultConfig, userConfig)

  let state: PaletteOfColors = definePalette(config)

  const random: RandomMethod = () => {}

  const self = {
    random
  }

  return Object.freeze(self)
}

export default Palette
