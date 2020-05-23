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

export type Xyz = {
  x: number
  y: number
  z: number
}

export type Lab = {
  l: number
  a: number
  b: number
}

export type Lchab = {
  l: number
  c: number
  h: number
}
export type ValidColorsFormat = Rgb | Hex | Hsl | Xyz | Lab | Lchab

export type ColorMethods = {}

export type ColorConfig = {
  color?: ValidColorsFormat
}

export type Color = (userConfig: ColorConfig) => Readonly<ColorMethods>

const Color: Color = userConfig => {
  const self = {}

  return Object.freeze(self)
}
