import Utils from '../../src/shared/utils'

const normalizeFloatNumber = (num: number): number => Number(num.toFixed(1))

describe('Tests the "Utils" factory', () => {
  it('works if the "Utils" factory is a function and return a no-undefined value', () => {
    expect(Utils()).toBeDefined()
  })
})

describe('Test of Utils factory > "AverageBetween" method', () => {
  it('works if the "AverageBetween" method delivers the expected number', () => {
    const utils = Utils()

    const averageBetween50and100 = utils.averageBetween({ interval: [50, 100] })

    expect(averageBetween50and100).toEqual(75)
  })
})

describe('Test of Utils factory > "Random" method', () => {
  it('works if the "Random" method delivers random numbers within the specified range', () => {
    const utils = Utils()

    const randomNumbersBetween10And30 = Array.from({ length: 50 }).map(() =>
      utils.randomInt({ max: 10, min: 30 })
    )

    const invalidNumbers = randomNumbersBetween10And30.filter(num => num > 30 || num < 10)

    expect(invalidNumbers.length).toEqual(0)
  })
})

describe('Test of Utils factory > "Interpolate" method', () => {
  it('works if the "Interpolate" method delivers the expected value, using simple intervals', () => {
    const utils = Utils()

    const interpolation = utils.interpolate({
      xInterval: [0, 10],
      yInterval: [0, 200]
    })

    const yToXEqualTo5 = interpolation({ xA: 5 })
    const yToXEqualTo0 = interpolation({ xA: 0 })
    const yToXEqualTo10 = interpolation({ xA: 10 })
    const yToXEqualTo2 = interpolation({ xA: 2 })
    const yToXEqualTo8 = interpolation({ xA: 8 })

    const result = [yToXEqualTo5, yToXEqualTo0, yToXEqualTo10, yToXEqualTo2, yToXEqualTo8]

    expect(result).toEqual([100, 0, 200, 40, 160])
  })
  it('works if the "Interpolate" method delivers the expected value, using complex intervals', () => {
    const utils = Utils()

    const interpolation = utils.interpolate({
      xInterval: [261, 854],
      yInterval: [12, 169]
    })

    const yToXEqualTo261 = interpolation({ xA: 261 })
    const yToXEqualTo854 = interpolation({ xA: 854 })
    const yToXEqualTheAverageValueBetween261and854 = interpolation({
      xA: utils.averageBetween({ interval: [261, 854] })
    })

    const result = [
      yToXEqualTo261,
      yToXEqualTo854,
      normalizeFloatNumber(yToXEqualTheAverageValueBetween261and854)
    ]

    expect(result).toEqual([12, 169, 90.5])
  })
  it('works if the "Interpolate" method delivers the expected value, using randomic intervals', () => {
    for (let i = 0; i < 50; i++) {
      const utils = Utils()

      const intervalXN = utils.randomInt({
        max: 10000,
        min: 0
      })

      const intervalXM = utils.randomInt({ min: 0, max: 10000 })

      const intervalYN = utils.randomInt({ min: 0, max: 10000 })
      const intervalYM = utils.randomInt({ min: 0, max: 10000 })

      const x0 = Math.min(intervalXN, intervalXM)
      const x1 = Math.max(intervalXN, intervalXM)

      const y0 = Math.min(intervalYN, intervalYM)
      const y1 = Math.max(intervalYN, intervalYM)

      const interpolation = utils.interpolate({
        xInterval: [x0, x1],
        yInterval: [y0, y1]
      })

      const yToXEqualToX0 = interpolation({ xA: x0 })
      const yToXEqualToX1 = interpolation({ xA: x1 })
      const yForXEqualToTheAverageValueBetweenX0andX1 = interpolation({
        xA: utils.averageBetween({
          interval: [x0, x1]
        })
      })

      const result = [
        yToXEqualToX0,
        yToXEqualToX1,
        normalizeFloatNumber(yForXEqualToTheAverageValueBetweenX0andX1)
      ]

      expect(result).toEqual([
        y0,
        y1,
        normalizeFloatNumber(utils.averageBetween({ interval: [y0, y1] }))
      ])
    }
  })
})
