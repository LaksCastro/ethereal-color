import color from '../../src'

describe('Basic library operations', () => {
  it('works if library is callable', () => {
    expect(color).not.toThrow()
  })
})

// function teste() {
//   const randomColor = color.random()

//   const randomPalette = color.
//   // Create a random gradient with 10 colors objects be
//   const randomGradient = color.random.gradient({
//     count: 10,
//     colors: 4
//   })

//   const randomGradientByYellow = color.random.gradient({
//     r: 155,
//     g: 155,
//     b: 0,
//     a: 0
//   })

//   const gradientBeetween = color.grandient.beetween(
//     [
//       { r: 255, b: 255, c: 255 },
//       { r: 255, b: 255, c: 255 }
//     ],
//     {
//       count: 10
//     }
//   )
// }
