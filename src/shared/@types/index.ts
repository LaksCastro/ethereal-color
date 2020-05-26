// ====================================================================================
// No context Types

import { Color } from '../../components/color'
import { Palette } from '../../components/palette'

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

export type PublicPropertyColorFormat = 'rgb' | 'hex' | 'hsl'

export type PublicPropertyColorType = Rgb | Hex | Hsl

export type LibraryInputForColor = PublicPropertyColorType | string

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

export type PublicPropertyColorState = {
  object: PublicPropertyColorType
  string: string
}

// ====================================================================================
// "Palette" Component
// ====================================================================================

export type PublicPropertyPaletteState = [Color, Color]

export type LibraryInputForPalette = Color | PublicPropertyPaletteState

export type PublicPropertyPaletteOptions = {
  range: number
}

// ====================================================================================
// "Gradient" Component
// ====================================================================================

export type PublicPropertyGradientOptions = {
  count: number
  use: 'linear' | 'exponential' | 'square'
}

export type LibraryInputForGradient = Palette

export type PublicPropertyGradientState = Color[]
