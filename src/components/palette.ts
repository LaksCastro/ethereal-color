import {
  LibraryInputForPalette,
  PublicPropertyPaletteState,
  PublicPropertyPaletteOptions
} from '../shared/@types'

import { Input } from './input'
import { Color } from './color'

export type Palette = {
  get: () => PublicPropertyPaletteState
  set: (
    userInput: LibraryInputForPalette,
    options?: PublicPropertyPaletteOptions
  ) => PublicPropertyPaletteState
}

export function Palette(
  colorInput: LibraryInputForPalette = Color(),
  options: PublicPropertyPaletteOptions = { range: 40 }
): Palette {
  const input = Input()

  let state: PublicPropertyPaletteState = input.normalizePalette({ from: colorInput, options })

  function get(): PublicPropertyPaletteState {
    return state
  }

  function set(
    colorInput: LibraryInputForPalette,
    options?: PublicPropertyPaletteOptions
  ): PublicPropertyPaletteState {
    return (state = input.normalizePalette({ from: colorInput, options: options || { range: 40 } }))
  }

  function random(): PublicPropertyPaletteState {
    const color = Color()

    color.random()

    set(color)

    return get()
  }

  const self = {
    get,
    set,
    random
  }

  return Object.freeze(self)
}

export default Palette
