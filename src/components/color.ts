import { Input } from './input'

import {
  LibraryInputForColor,
  PrivatePropertyColorState,
  PublicPropertyColorFormat,
  PublicPropertyColorState,
  PublicPropertyColorType
} from '../shared/@types'

export type Color = {
  set: (userInput: LibraryInputForColor) => PublicPropertyColorState
  get: (format: PublicPropertyColorFormat) => PublicPropertyColorState
}

export function Color(userInput: LibraryInputForColor): Color {
  const input = Input()

  let state: PrivatePropertyColorState = input.normalizeColor(userInput)

  // ====================================================================================
  // Private Methods
  // ====================================================================================
  function getState(): PrivatePropertyColorState {
    return state
  }

  function setState(newState: PrivatePropertyColorState): PrivatePropertyColorState {
    return (state = newState)
  }

  // ====================================================================================
  // Public Methods
  // ====================================================================================
  function set(userInput: LibraryInputForColor): PublicPropertyColorState {
    const newPrivateState = input.normalizeColor(userInput)

    setState(newPrivateState)

    return get('rgb')
  }

  function get(format: PublicPropertyColorFormat): PublicPropertyColorState {
    const privateState = getState()

    const publicState = {
      object: privateState.object[format],
      string: privateState.string[format]
    }

    return publicState
  }

  const self: Color = {
    set,
    get
  }

  return Object.freeze(self)
}
