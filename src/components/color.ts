import { Input } from './input'

import {
  LibraryInputAnyColorFormat,
  PrivatePropertyColorState,
  PublicPropertyColorFormat,
  PublicPropertyColorState
} from '../shared/@types'

export type Color = {
  set: (userInput: LibraryInputAnyColorFormat) => PublicPropertyColorState
  get: (format: PublicPropertyColorFormat) => PublicPropertyColorState
}

export function Color(userInput: LibraryInputAnyColorFormat): Color {
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
  function set(userInput: LibraryInputAnyColorFormat): PublicPropertyColorState {
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
