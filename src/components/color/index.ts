// import Utils from '../shared/utils'
// import Input from './input'
// import { PaletteUserConfig, PaletteMethods } from './palette'

// // ====================================================================================
// // Color Types
// // ====================================================================================
// export type Rgb = {
//   r: number
//   g: number
//   b: number
// }
// export type Hex = {
//   r: string
//   g: string
//   b: string
// }
// export type Hsl = {
//   h: number
//   s: number
//   l: number
// }
// export type ValidColorsTypes = Rgb | Hex | Hsl

// export type AnyColorFormat = ValidColorsTypes | string

// // ====================================================================================
// // Color Formats
// // ====================================================================================
// export enum ValidColorsFormats {
//   rgb = 'rgb',
//   hex = 'hex',
//   hsl = 'hsl'
// }

// // ====================================================================================
// // "Get" Method Types
// // ====================================================================================
// export type PublicColorObject = {
//   string: string
//   object: ValidColorsTypes
// }
// export type GetMethod = (type: ValidColorsFormats) => PublicColorObject

// // ====================================================================================
// // "Change" Method Types
// // ====================================================================================
// export type ChangeMethod = (userConfig: ColorBase) => void

// // ====================================================================================
// // "Random" Method Types
// // ====================================================================================
// export type RandomConfig = {
//   from: ColorBase | PaletteUserConfig | PaletteMethods
// }

// export type RandomMethod = (userConfig?: RandomConfig) => void

// // ====================================================================================
// // "Color" Factory Public Types
// // ====================================================================================
// export type ColorMethods = {
//   random: RandomMethod
//   get: GetMethod
// }

// export type ColorObject = {
//   rgb: Rgb
//   hsl: Hsl
//   hex: Hex
// }
// export type ColorString = {
//   rgb: string
//   hsl: string
//   hex: string
// }

// export type ColorState = {
//   colorString: ColorString
//   colorObject: ColorObject
// }

// export type ColorBase = ValidColorsTypes | string

// export type Color = (userConfig?: ColorBase) => Readonly<ColorMethods>

// // ====================================================================================
// // "Color" Factory Private Types
// // ====================================================================================
// type SetStatePrivateMethod = (newState: ColorState) => ColorState

// type GetStatePrivateMethod = () => ColorState

// // ====================================================================================
// // Implementation
// // ====================================================================================
// const Color: Color = (userConfig = '#FFFFFF') => {

//   const utils = new Utils();

//   const input = Input(userConfig)

//   let state: ColorState = input.get()

//   const setState: SetStatePrivateMethod = newState => (state = newState)

//   const getState: GetStatePrivateMethod = () => state

//   const change: ChangeMethod = userConfig => {
//     setState(input.set(userConfig))
//   }

//   const get: GetMethod = type => {
//     return {
//       object: getState().colorObject[type],
//       string: getState().colorString[type]
//     }
//   }

//   const random: RandomMethod = (userConfig) => {
//     const useBase = Boolean(userConfig)

//     if(useBase){
//       const usePalette = Boolean((userConfig as PaletteUserConfig).from)
//     }
//   }

//   const self = {
//     // random,
//     get,
//     change
//   }

//   return Object.freeze(self)
// }

// export default Color

import Utils from '../../shared/utils'
import Input from '../Input'
import { PaletteUserConfig, PaletteMethods } from '../palette'

import * as Types from "./types"

import ColorMethodsInterface from "./interface";
import Component from '../../shared/component';
import { LibraryInputAnyColorFormat } from '../../shared/@types';

export type ColorState = {
  string: ColorString
  object: ColorObject
}

class Color extends Component<ColorState> implements ColorMethodsInterface {
  private state : object = {}

  constructor(public input : LibraryInputAnyColorFormat){
    super();

    this.input = new Input(input);

    this.state
  }
  public get: Types.PublicMethodGet = function(){
    return this.state;
  }
}

// ====================================================================================
// Color Types
// ====================================================================================

// ====================================================================================
// Color Formats
// ====================================================================================
export type ValidColorsFormats= 'rgb' |'hex' |'hsl'




// ====================================================================================
// "Get" Method Types
// ====================================================================================
export type PublicColorObject = {
  string: string
  object: ValidColorsTypes
}
export type GetMethod = (type: ValidColorsFormats) => PublicColorObject

// ====================================================================================
// "Change" Method Types
// ====================================================================================
export type ChangeMethod = (userConfig: ColorBase) => void

// ====================================================================================
// "Random" Method Types
// ====================================================================================
export type RandomConfig = {
  from: ColorBase | PaletteUserConfig | PaletteMethods
}

export type RandomMethod = (userConfig?: RandomConfig) => void

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


export type ColorBase<R> = R extends true ? ValidColorsTypes | string

export type Color = (userConfig?: ColorBase) => Readonly<ColorMethods>

// ====================================================================================
// "Color" Factory Private Types
// ====================================================================================
type SetStatePrivateMethod = (newState: ColorState) => ColorState

type GetStatePrivateMethod = () => ColorState

// ====================================================================================
// Implementation
// ====================================================================================
const Color: Color = (userConfig = '#FFFFFF') => {

  const utils = new Utils();

  const input = Input(userConfig)

  let state: ColorState = input.get()

  const setState: SetStatePrivateMethod = newState => (state = newState)

  const getState: GetStatePrivateMethod = () => state

  const change: ChangeMethod = userConfig => {
    setState(input.set(userConfig))
  }

  const get: GetMethod = type => {
    return {
      object: getState().colorObject[type],
      string: getState().colorString[type]
    }
  }

  const random: RandomMethod = (userConfig) => {
    const useBase = Boolean(userConfig)

    if(useBase){
      const usePalette = Boolean((userConfig as PaletteUserConfig).from)
    }
  }

  const self = {
    // random,
    get,
    change
  }

  return Object.freeze(self)
}

export default Color
