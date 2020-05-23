// ====================================================================================
// "Interpolate" Method Types
// ====================================================================================
export type InterpolateMethod = (
  xInterval: [number, number],
  yInterval: [number, number]
) => (x: number) => number

// ====================================================================================
// "RandomInt" Method Types
// ====================================================================================
export type RandomIntMethod = (min: number, max: number) => number

// ====================================================================================
// "AverageBetween" Method Types
// ====================================================================================
export type AverageBetweenMethod = (smaller: number, bigger: number) => number

// ====================================================================================
// "Util" Factory Types
// ====================================================================================
export type UtilsMethods = {
  interpolate: InterpolateMethod
  randomInt: RandomIntMethod
  averageBetween: AverageBetweenMethod
}
export type Utils = () => Readonly<UtilsMethods>

// ====================================================================================
// Implementation
// ====================================================================================
const Utils: Utils = () => {
  // ====================================================================================
  // Creates a function that receives two ranges: xInterval and yInterval,
  // and then returns a function that receives an xA value within the xInterval range,
  // and returns the corresponding yA value in yInterval
  // ====================================================================================
  const interpolate: InterpolateMethod = (xInterval, yInterval) => {
    const [x0, x1] = xInterval
    const [y0, y1] = yInterval

    return (xA: number): number => {
      if (xA > x1) xA = x1
      else if (xA < x0) xA = x0

      const yA = y0 + (y1 - y0) * ((xA - x0) / (x1 - x0))

      return yA
    }
  }

  // ====================================================================================
  // Retorn a random integer between [min] and [max]
  // ====================================================================================
  const randomInt: RandomIntMethod = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  // ====================================================================================
  // Deliver the average value between two values, example: the average
  // between 200 and 400 is 300, so if we do:
  // averageBetween({ interval: [200, 400] }), we receive 300
  // ====================================================================================
  const averageBetween: AverageBetweenMethod = (smaller: number, bigger: number) =>
    (bigger - smaller) / 2 + smaller

  const self = {
    interpolate,
    randomInt,
    averageBetween
  }

  return Object.freeze(self)
}

export default Utils
