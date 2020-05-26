import { Utils } from '../../src/shared/utils'

const normalizeFloatNumber = (num: number): number => Number(num.toFixed(1))

describe('Utils Factory', () => {
  describe('stupid errors', () => {
    it('is callable', () => {
      expect(Utils).not.toThrow()
    })
    it('not return undefined', () => {
      expect(Utils()).toBeDefined()
    })
  })
  describe('test (X) method', () => {
    it('[X] = "methodAverageBetween"', () => {
      const utils = Utils()

      const averageBetween50and100 = utils.averageBetween(50, 100)

      expect(averageBetween50and100).toEqual(75)
    })
    describe('[X] = "randomInt" - if works with (Y) specification', () => {
      it('[Y] = "within the specified range"', () => {
        const utils = Utils()

        const randomNumbersBetween10And30 = Array.from({ length: 300 }).map(() =>
          utils.randomInt(10, 30)
        )

        const invalidNumbers = randomNumbersBetween10And30.filter(num => num > 30 || num < 10)

        expect(invalidNumbers.length).toEqual(0)
      })
      it('[Y] = "with negative values"', () => {
        const utils = Utils()

        const randomNumbersBetweenMinus50AndMinus30 = Array.from({ length: 300 }).map(() =>
          utils.randomInt(-50, -30)
        )

        const invalidNumbers = randomNumbersBetweenMinus50AndMinus30.filter(
          num => num > -30 || num < -50
        )

        expect(invalidNumbers.length).toEqual(0)
      })
      it('[Y] = "with negative and positive values"', () => {
        const utils = Utils()

        const randomNumbersBetweenMinus10And10 = Array.from({ length: 300 }).map(() =>
          utils.randomInt(-10, 10)
        )

        const invalidNumbers = randomNumbersBetweenMinus10And10.filter(num => num > 10 || num < -10)

        expect(invalidNumbers.length).toEqual(0)
      })
    })
    describe('[X] = "interpolate" if works with (Y) specification', () => {
      it('[Y] = "using simple intervals"', () => {
        const utils = Utils()

        const interpolation = utils.interpolate([0, 10], [0, 200])

        const yToXEqualTo5 = interpolation(5)
        const yToXEqualTo0 = interpolation(0)
        const yToXEqualTo10 = interpolation(10)
        const yToXEqualTo2 = interpolation(2)
        const yToXEqualTo8 = interpolation(8)

        const result = [yToXEqualTo5, yToXEqualTo0, yToXEqualTo10, yToXEqualTo2, yToXEqualTo8]

        expect(result).toEqual([100, 0, 200, 40, 160])
      })
      it('[Y] = "using complex intervals"', () => {
        const utils = Utils()

        const interpolation = utils.interpolate([261, 854], [12, 169])

        const yToXEqualTo261 = interpolation(261)
        const yToXEqualTo854 = interpolation(854)
        const yToXEqualTheAverageValueBetween261and854 = interpolation(
          utils.averageBetween(261, 854)
        )

        const result = [
          yToXEqualTo261,
          yToXEqualTo854,
          normalizeFloatNumber(yToXEqualTheAverageValueBetween261and854)
        ]

        expect(result).toEqual([12, 169, 90.5])
      })
      it('[Y] = using randomic intervals', () => {
        for (let i = 0; i < 50; i++) {
          const utils = Utils()

          const intervalXN = utils.randomInt(0, 10000)
          const intervalXM = utils.randomInt(0, 10000)

          const intervalYN = utils.randomInt(0, 10000)
          const intervalYM = utils.randomInt(0, 10000)

          const x0 = Math.min(intervalXN, intervalXM)
          const x1 = Math.max(intervalXN, intervalXM)

          const y0 = Math.min(intervalYN, intervalYM)
          const y1 = Math.max(intervalYN, intervalYM)

          const interpolation = utils.interpolate([x0, x1], [y0, y1])

          const yToXEqualToX0 = interpolation(x0)
          const yToXEqualToX1 = interpolation(x1)
          const yForXEqualToTheAverageValueBetweenX0andX1 = interpolation(
            utils.averageBetween(x0, x1)
          )

          const result = [
            yToXEqualToX0,
            yToXEqualToX1,
            normalizeFloatNumber(yForXEqualToTheAverageValueBetweenX0andX1)
          ]

          expect(result).toEqual([y0, y1, normalizeFloatNumber(utils.averageBetween(y0, y1))])
        }
      })
      it('[Y] = "using randomic negative intervals"', () => {
        for (let i = 0; i < 50; i++) {
          const utils = Utils()

          const intervalXN = utils.randomInt(-10000, -1000)
          const intervalXM = utils.randomInt(-10000, -1000)

          const intervalYN = utils.randomInt(-10000, -1000)
          const intervalYM = utils.randomInt(-10000, -1000)

          const x0 = Math.min(intervalXN, intervalXM)
          const x1 = Math.max(intervalXN, intervalXM)

          const y0 = Math.min(intervalYN, intervalYM)
          const y1 = Math.max(intervalYN, intervalYM)

          const interpolation = utils.interpolate([x0, x1], [y0, y1])

          const yToXEqualToX0 = interpolation(x0)
          const yToXEqualToX1 = interpolation(x1)
          const yForXEqualToTheAverageValueBetweenX0andX1 = interpolation(
            utils.averageBetween(x0, x1)
          )

          const result = [
            yToXEqualToX0,
            yToXEqualToX1,
            normalizeFloatNumber(yForXEqualToTheAverageValueBetweenX0andX1)
          ]

          expect(result).toEqual([y0, y1, normalizeFloatNumber(utils.averageBetween(y0, y1))])
        }
      })
    })
    describe('[X] = "getValueInRange"', () => {
      it('[Y] = "with simple and positive values"', () => {
        for (let i = 0; i < 50; i++) {
          const utils = Utils()

          const test1 = utils.getValueInRange({ increment: 40, range: [0, 255], value: 230 })
          const test2 = utils.getValueInRange({ increment: 40, range: [0, 270], value: 230 })
          const test3 = utils.getValueInRange({ increment: 40, range: [0, 240], value: 150 })

          const result = [test1, test2, test3]

          expect(result).toEqual([255, 270, 190])
        }
      })
      it('[Y] = "with simple and negative values"', () => {
        for (let i = 0; i < 50; i++) {
          const utils = Utils()

          const test1 = utils.getValueInRange({ increment: -40, range: [0, 50], value: 20 })
          const test2 = utils.getValueInRange({ increment: -60, range: [-90, 40], value: 40 })
          const test3 = utils.getValueInRange({ increment: -20, range: [-80, 60], value: 10 })

          const result = [test1, test2, test3]

          expect(result).toEqual([0, -20, -10])
        }
      })
    })
    it('[X] = "itsBetween"', () => {
      const utils = Utils()

      const valueInRange = 80
      const valueNotInRange = 40

      const range: [number, number] = [50, 120]

      expect(utils.itsBetween(valueInRange, range)).toBeTruthy()
      expect(utils.itsBetween(valueNotInRange, range)).toBeFalsy()
    })
  })
})
