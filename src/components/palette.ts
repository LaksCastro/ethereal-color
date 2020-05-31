import { Input } from './input'
import { Color } from './color'
import { Utils } from './utils'

const utils = Utils()

const defaultOptions: PropPaletteOptions = { range: 40 }

export type PropPaletteState = [Color, Color]

export type InputForPalette = Color | PropPaletteState

export type PropPaletteOptions = {
  range: number
}

export type Palette = {
  get: () => PropPaletteState
  set: (
    userInput: InputForPalette,
    options?: PropPaletteOptions,
  ) => void
  random: () => void
}

export function Palette(
  userInput: InputForPalette = Color(),
  options: PropPaletteOptions = defaultOptions,
): Palette {
  const input = Input()

  let state: PropPaletteState = input.normalizePalette({
    from: userInput,
    options,
  })

  function get(): PropPaletteState {
    return state
  }

  function set(
    newUserInput: InputForPalette,
    newOptions: PropPaletteOptions = defaultOptions,
  ): void {
    const newState = input.normalizePalette({
      from: newUserInput,
      options: newOptions,
    })

    state = newState
  }

  function random(
    newOptions: PropPaletteOptions = {
      range: utils.randomInt(40, 255),
    },
  ): void {
    const color = Color()

    color.random()

    set(color, newOptions)
  }

  const self: Palette = {
    get,
    set,
    random,
  }

  return Object.freeze(self)
}
