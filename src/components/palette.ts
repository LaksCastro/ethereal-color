import {
  PublicPropertyPaletteState,
  PublicPropertyPaletteOptions,
  LibraryInputForPalette
} from '../shared/@types'

import { Input } from './input'
import { Color } from './color'

const defaultOptions: PublicPropertyPaletteOptions = { range: 40 }

export type Palette = {
  get: () => PublicPropertyPaletteState
  set: (
    userInput: LibraryInputForPalette,
    options?: PublicPropertyPaletteOptions
  ) => PublicPropertyPaletteState
  random: () => PublicPropertyPaletteState
}

export function Palette(
  colorInput: LibraryInputForPalette = Color(),
  options: PublicPropertyPaletteOptions = defaultOptions
): Palette {
  const input = Input()

  let state: PublicPropertyPaletteState = input.normalizePalette({ from: colorInput, options })

  function get(): PublicPropertyPaletteState {
    return state
  }

  function set(
    colorInput: LibraryInputForPalette,
    options: PublicPropertyPaletteOptions = defaultOptions
  ): PublicPropertyPaletteState {
    return (state = input.normalizePalette({ from: colorInput, options: options || { range: 40 } }))
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
    random
  }

  return Object.freeze(self)
}

export default Palette
