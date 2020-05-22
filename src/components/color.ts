export type Color = {
  toString: () => string
  toObject: () => {
    r: number
    g: number
    b: number
    a: number
  }
}
