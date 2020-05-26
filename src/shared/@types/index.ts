// ====================================================================================
// No context Types

import { Color } from '../../components/color'

// ====================================================================================
export type Range = [number, number]

// ====================================================================================
// Library Types
// ====================================================================================

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

export type PublicPropertyCustomPaletteConfig = {
  r: [number, number]
  g: [number, number]
  b: [number, number]
}

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

export type LibraryInputCustomPalette = {
  r: [number, number]
  g: [number, number]
  b: [number, number]
}

export type PublicPropertyPaletteOptions = {
  range: number
}

export type LibraryInputForPalette = Color

export type LibraryInputForPaletteOptions = { range: number }

export type PublicPropertyPaletteState = [Color, Color]
