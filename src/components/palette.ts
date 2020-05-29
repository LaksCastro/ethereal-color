import {
  PublicPropertyPaletteState,
  PublicPropertyPaletteOptions,
  LibraryInputForPalette,
} from '../shared/@types'

import { Input } from './input'
import { Color } from './color'

const defaultOptions: PublicPropertyPaletteOptions = { range: 40 }

export type Palette = {
  get: () => PublicPropertyPaletteState
  set: (
    userInput: LibraryInputForPalette,
    options?: PublicPropertyPaletteOptions,
  ) => PublicPropertyPaletteState
  random: () => PublicPropertyPaletteState
}

export function Palette(
  userInput: LibraryInputForPalette = Color(),
  options: PublicPropertyPaletteOptions = defaultOptions,
): Palette {
  const input = Input()

  let state: PublicPropertyPaletteState = input.normalizePalette({
    from: userInput,
    options,
  })

  function get(): PublicPropertyPaletteState {
    return state
  }

  function set(
    newUserInput: LibraryInputForPalette,
    newOptions: PublicPropertyPaletteOptions = defaultOptions,
  ): PublicPropertyPaletteState {
    return (state = input.normalizePalette({
      from: newUserInput,
      options: newOptions,
    }))
  }

  function random(): PublicPropertyPaletteState {
    const color = Color()

    color.random()

    set(color)

    return get()
  }

  const self: Palette = {
    get,
    set,
    random,
  }

  return Object.freeze(self)
}
