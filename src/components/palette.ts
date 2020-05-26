import {
  LibraryInputForPalette,
  PublicPropertyPaletteState,
  PublicPropertyPaletteOptions
} from '../shared/@types'

import { Input } from './input'
import { Utils } from '../shared/utils'

export type Palette = {
  get: () => PublicPropertyPaletteState
  set: (
    userInput: LibraryInputForPalette,
    options: PublicPropertyPaletteOptions
  ) => PublicPropertyPaletteState
}

export function Palette(
  userInput: LibraryInputForPalette,
  options: PublicPropertyPaletteOptions = { range: 40 }
): Palette {
  const utils = Utils()
  const input = Input()

  let state: PublicPropertyPaletteState = input.normalizePalette({ from: userInput, options })

  function get(): PublicPropertyPaletteState {
    return state
  }

  function set(
    userInput: LibraryInputForPalette,
    options: PublicPropertyPaletteOptions = { range: 40 }
  ): PublicPropertyPaletteState {
    return (state = input.normalizePalette({ from: userInput, options }))
  }

  const self = {
    get,
    set
  }

  return Object.freeze(self)
}

export default Palette
