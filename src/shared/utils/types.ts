import { Range } from '../@types'

export type PublicMethodInterpolate = (xInterval: Range, yInterval: Range) => (xA: number) => number

export type PublicMethodRandomInt = (min: number, max: number) => number

export type PublicMethodAverageBetween = (smaller: number, bigger: number) => number

export type PublicMethodGetValueInRange = (config: {
  value: number
  range: Range
  increment: number
}) => number
