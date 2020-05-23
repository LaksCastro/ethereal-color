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

export type ValidColorsFormat = Rgb | Hex | Hsl

export type ColorMethods = {}

export type ColorConfig = {
  color?: ValidColorsFormat
}

export type Color = (userConfig: ColorConfig) => Readonly<ColorMethods>

const Color: Color = userConfig => {
  const self = {}

  return Object.freeze(self)
}
