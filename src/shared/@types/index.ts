// ====================================================================================
// No context Types

import { Color } from '../../components/color'

// ====================================================================================
// No context Types
// ====================================================================================
export type Range = [number, number]

// ====================================================================================
// "Color" Component
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

export type PropColorFormat = 'rgb' | 'hex' | 'hsl'

export type PropColorType = Rgb | Hex | Hsl

export type InputForColor = PropColorType | string

export type PrivatePropertyColorState = {
  object: {
    rgb: Rgb
    hex: Hex
    hsl: Hsl
  }
  string: {
    rgb: string
    hex: string
    hsl: string
  }
}

export type PropColorState = {
  object: PropColorType
  string: string
}

// ====================================================================================
// "Palette" Component
// ====================================================================================

export type PropPaletteState = [Color, Color]

export type InputForPalette = Color | PropPaletteState

export type PropPaletteOptions = {
  range: number
}

// ====================================================================================
// "Gradient" Component
// ====================================================================================

export type PropGradientOptions = {
  count: number
}

export type PropGradientState = Color[]
