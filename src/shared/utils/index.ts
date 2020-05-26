import { Range } from '../@types'

type GetValueInRangeConfig = { value: number; range: Range; increment: number }

export type Utils = {
  interpolate: (xInterval: Range, yInterval: Range) => (xA: number) => number
  randomInt: (min: number, max: number) => number
  averageBetween: (smaller: number, bigger: number) => number
  getValueInRange: (config: GetValueInRangeConfig) => number
  itsBetween: (value: number, range: [number, number]) => boolean
}

export function Utils(): Utils {
  function interpolate(xInterval: Range, yInterval: Range): (xA: number) => number {
    const [x0, x1] = xInterval
    const [y0, y1] = yInterval

    return (xA: number): number => {
      if (xA > x1) xA = x1
      else if (xA < x0) xA = x0

      const yA = y0 + (y1 - y0) * ((xA - x0) / (x1 - x0))

      return Number(yA.toFixed(1))
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

  const self: Utils = {
    interpolate,
    randomInt,
    averageBetween,
    getValueInRange,
    itsBetween
  }

  return Object.freeze(self)
}
