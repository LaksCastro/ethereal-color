import { Palette } from './palette'
import { Color } from './color'
import { Input } from './input'

import { PropColorFormat } from './color'

const defaultOptions: PropGradientOptions = { count: 5 }

export type PropGradientOptions = {
  count: number
}

export type PropGradientState = Color[]

export type Gradient = {
  toStringArray: (format: PropColorFormat) => string[]
  toObjectArray: (format: PropColorFormat) => object[]
  toColorArray: () => Color[]
  set: (userInput: Palette, options?: PropGradientOptions) => void
  random: () => void
}

export function Gradient(
  userInput: Palette = Palette(Color()),
  options: PropGradientOptions = defaultOptions,
): Gradient {
  const input = Input()

  let state: PropGradientState = input.normalizeGradient({
    from: userInput,
    options,
  })

  function toStringArray(format: PropColorFormat): string[] {
    return state.map(color => color.get(format).string)
  }

  function toObjectArray(format: PropColorFormat): object[] {
    return state.map(color => color.get(format).object)
  }

  function toColorArray() {
    return state
  }

  function set(
    newUserInput: Palette,
    newOptions: PropGradientOptions = defaultOptions,
  ): void {
    state = input.normalizeGradient({
      from: newUserInput,
      options: newOptions,
    })
  }

  function random() {
    const color = Color()

    color.random()

    const palette = Palette(color)

    set(palette)
  }

  const self: Gradient = {
    toStringArray,
    toObjectArray,
    toColorArray,
    set,
    random,
  }

  return Object.freeze(self)
}
