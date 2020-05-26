import {
  LibraryInputForColor,
  LibraryInputForPalette,
  PrivatePropertyColorState,
  PrivatePropertyPaletteState
} from '../shared/@types'

import { Input } from './input'
import { Utils } from '../shared/utils'

export type Palette = {
  get: () => PaletteState
}

// USANDO CUSTOM CONFIG
Palette({
  r: [0, 45],
  g: [10, 50],
  b: [50, 90]
})

// USANDO UM OBJECTO TO TIPO COR
const color = Color('rgb(250, 250, 250)')
Palette(color)

// USANDO UMA COR
Palette('#FFF')

export function Palette(userInput: PaletteUserInput = '#454545'): Palette {
  const utils = Utils()
  const input = Input()

  const defaultInput: PaletteInput = { from: 'rgb(127.5, 127.5, 127.5)', range: 40 }

  const config = Object.assign({}, defaultInput, userInput)

  let state: PrivatePropertyPaletteState = input.normalizePalette(config)

  const self = {}

  return Object.freeze(self)
}

export default Palette
