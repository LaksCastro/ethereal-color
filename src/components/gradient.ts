import { Palette } from './palette'
import { Color } from './color'
import { Input } from './input'

import {
  PublicPropertyGradientOptions,
  PublicPropertyGradientState,
  PublicPropertyColorFormat,
} from '../shared/@types'

const defaultOptions: PublicPropertyGradientOptions = { count: 5 }

export type Gradient = {
  toStringArray: (format: PublicPropertyColorFormat) => string[]
  toObjectArray: (format: PublicPropertyColorFormat) => object[]
  toColorArray: () => Color[]
  set: (
    userInput: Palette,
    options?: PublicPropertyGradientOptions,
  ) => void
  random: () => void
}

export function Gradient(
  userInput: Palette = Palette(Color()),
  options: PublicPropertyGradientOptions = defaultOptions,
): Gradient {
  const input = Input()

  let state: PublicPropertyGradientState = input.normalizeGradient({
    from: userInput,
    options,
  })

  function toStringArray(
    format: PublicPropertyColorFormat,
  ): string[] {
    return state.map(color => color.get(format).string)
  }

  function toObjectArray(
    format: PublicPropertyColorFormat,
  ): object[] {
    return state.map(color => color.get(format).object)
  }

  function toColorArray() {
    return state
  }

  function set(
    newUserInput: Palette,
    newOptions: PublicPropertyGradientOptions = defaultOptions,
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
