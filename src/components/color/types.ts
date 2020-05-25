import {
  PublicPropertyColorFormat,
  PublicPropertyColorState,
  LibraryInputAnyColorFormat
} from '../../shared/@types'

export type PublicMethodGet = (format: PublicPropertyColorFormat) => PublicPropertyColorState

export type PublicMethodSet = (userInput: LibraryInputAnyColorFormat) => PublicPropertyColorState
