import {
  InputForColor,
  InputForPalette,
  PropGradientOptions,
  PropPaletteOptions,
} from './shared/@types'

import { Color } from './components/color'
import { Palette } from './components/palette'
import { Gradient } from './components/gradient'
import { Converter } from './components/converter'

type Library = {
  default: {
    Color: (userInput?: InputForColor) => Color
    Palette: (
      userInput?: InputForPalette,
      options?: PropPaletteOptions,
    ) => Palette
    Gradient: (
      userInput?: Palette,
      options?: PropGradientOptions,
    ) => Gradient
    Converter: () => Converter
  }
}

const Ethereal = require('./main.ts') as Library

module.exports = Ethereal.default
