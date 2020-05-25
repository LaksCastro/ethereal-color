import * as Types from './types'

class Utils {
  // ====================================================================================
  // Creates a function that receives two ranges: xInterval and yInterval,
  // and then returns a function that receives an xA value within the xInterval range,
  // and returns the corresponding yA value in yInterval
  // ====================================================================================
  public static interpolate: Types.PublicMethodInterpolate = function(xInterval, yInterval) {
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
  public static randomInt: Types.PublicMethodRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // ====================================================================================
  // Deliver the average value between two values, example: the average
  // between 200 and 400 is 300, so if we do:
  // averageBetween({ interval: [200, 400] }), we receive 300
  // ====================================================================================
  public static averageBetween: Types.PublicMethodAverageBetween = function(smaller, bigger) {
    return (bigger - smaller) / 2 + smaller
  }

  // ====================================================================================
  // Uses the base value ("value" property), and returns a new value within the defined
  // range ("range" array property) added with the "increment" property
  // Example usage:
  // getValueInRange({ increment: 40, range: [0, 255], value: 230 }) // '255'
  // getValueInRange({ increment: 40, range: [0, 270], value: 230 }) // '270'
  // getValueInRange({ increment: 40, range: [0, 240], value: 150 }) // '190'
  // ====================================================================================
  public static getValueInRange: Types.PublicMethodGetValueInRange = function({
    increment,
    range,
    value
  }) {
    const [min, max] = range

    const newValue = value + increment

    return newValue < min ? min : newValue > max ? max : newValue
  }
}

export default Utils
