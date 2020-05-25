import {
  PublicPropertyColorFormat,
  PublicPropertyColorState,
  LibraryInputAnyColorFormat
} from '../../shared/@types'

export type PublicMethodGet = (type: PublicPropertyColorFormat) => PublicPropertyColorState

export type PublicMethodSet = (userInput: LibraryInputAnyColorFormat) => PublicPropertyColorState
