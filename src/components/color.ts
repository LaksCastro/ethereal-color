import { Input } from './input'
import { Palette } from './palette'
import { Utils } from '../shared/utils'

import {
  InputForColor,
  PrivatePropertyColorState,
  PropColorFormat,
  PropColorState,
  Rgb,
} from '../shared/@types'

export type Color = {
  set: (userInput: InputForColor) => PropColorState
  get: (format: PropColorFormat) => PropColorState
  random: (basePalette?: Palette) => PropColorState
}

export function Color(userInput: InputForColor = '#ffffff'): Color {
  const input = Input()
  const utils = Utils()

  let state: PrivatePropertyColorState = input.normalizeColor({
    from: userInput,
  })

  // ====================================================================================
  // Private Methods
  // ====================================================================================
  function getState(): PrivatePropertyColorState {
    return state
  }

  function setState(
    newState: PrivatePropertyColorState,
  ): PrivatePropertyColorState {
    return (state = newState)
  }

  // ====================================================================================
  // Public Methods
  // ====================================================================================
  function set(newUserInput: InputForColor): PropColorState {
    const newPrivateState = input.normalizeColor({
      from: newUserInput,
    })

    setState(newPrivateState)

    return get('rgb')
  }

  function get(format: PropColorFormat): PropColorState {
    const privateState = getState()

    const publicState = {
      object: privateState.object[format],
      string: privateState.string[format],
    }

    return publicState
  }

  function random(basePalette?: Palette): PropColorState {
    const useCustomPalette = Boolean(basePalette)

    let r: number
    let b: number
    let g: number

    if (useCustomPalette) {
      const [
        colorBaseOne,
        colorBaseTwo,
      ] = (basePalette as Palette).get()

      const { r: r1, g: g1, b: b1 } = colorBaseOne.get('rgb')
        .object as Rgb
      const { r: r2, g: g2, b: b2 } = colorBaseTwo.get('rgb')
        .object as Rgb

      const scale: [number, number] = [0, 100]

      const randomScale = utils.randomInt(...scale)

      const scaleToRed = utils.interpolate(scale, [r1, r2])
      const scaleToGreen = utils.interpolate(scale, [g1, g2])
      const scaleToBlue = utils.interpolate(scale, [b1, b2])

      r = scaleToRed(randomScale)
      g = scaleToGreen(randomScale)
      b = scaleToBlue(randomScale)
    } else {
      r = utils.randomInt(0, 255)
      g = utils.randomInt(0, 255)
      b = utils.randomInt(0, 255)
    }

    const color = Color({ r, g, b })

    set(color.get('rgb').object as Rgb)

    return {
      object: color.get('rgb').object as Rgb,
      string: color.get('rgb').string,
    }
  }

  const self: Color = {
    set,
    get,
    random,
  }

  return Object.freeze(self)
}
