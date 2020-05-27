import { Range } from '../@types'

type GetValueInRangeConfig = { value: number; range: Range; increment: number }

export type Utils = {
  interpolate: (xInterval: Range, yInterval: Range) => (xA: number) => number
  randomInt: (min: number, max: number) => number
  averageBetween: (smaller: number, bigger: number) => number
  getValueInRange: (config: GetValueInRangeConfig) => number
  itsBetween: (value: number, range: [number, number]) => boolean
  oneDecimalPlace: (value: number) => number
}

export function Utils(): Utils {
  function interpolate(xInterval: Range, yInterval: Range): (xA: number) => number {
    const [x0, x1] = xInterval
    const [y0, y1] = yInterval

    return (xA: number): number => {
      if (xA > x1) xA = x1
      else if (xA < x0) xA = x0

      const yA = y0 + (y1 - y0) * ((xA - x0) / (x1 - x0))

      return oneDecimalPlace(yA)
    }
  }

  function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function averageBetween(smaller: number, bigger: number): number {
    return (bigger - smaller) / 2 + smaller
  }

  function getValueInRange({ increment, range, value }: GetValueInRangeConfig): number {
    const [min, max] = range

    const newValue = value + increment

    return newValue < min ? min : newValue > max ? max : newValue
  }

  function itsBetween(value: number, range: [number, number]): boolean {
    const [min, max] = range
    return value >= min && value <= max
  }

  function oneDecimalPlace(value: number): number {
    const isNecessaryToFormat = Boolean(value.toString().match(/\.[0-9][0-9]*/g))

    if (!isNecessaryToFormat) return value

    return Number(value.toFixed(1))
  }

  const self: Utils = {
    interpolate,
    randomInt,
    averageBetween,
    getValueInRange,
    itsBetween,
    oneDecimalPlace
  }

  return Object.freeze(self)
}
