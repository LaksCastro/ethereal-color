import color from '../../src'

describe('Basic library operations', () => {
  it('works if library is callable', () => {
    expect(color).not.toThrow()
  })
})

// function teste() {

//   configuration: {
//     opacity: 0-1
//     brightness: 0-100
//     grayscale: 0-100
//     baseColor?: = new Color()
//   }

//   gradient: {
//     colors: [
//       {...colorA},
//       {...colorB},
//       {...colorC},
//       {...colorD},
//       {...colorE},
//       ...N
//     ],
//     content: [
//         {...colorA},
//         {...colorA},
//         {...colorA},
//         {...colorB},
//         {...colorB},
//         {...colorB},
//         {...colorC},
//         {...colorC},
//         {...colorC},
//         {...colorD},
//         {...colorD},
//         {...colorD},
//         {...colorE},
//         {...colorE},
//         {...colorE},
//         ...N
//     ]
//   }

//   palette: {
//     r: [0, 255],
//     g: [0, 255],
//     b: [0, 255],
//     a: [0, 255],
//   }

//   color: {
//     r: 0,
//     g: 0,
//     b: 0,
//     a: 0
//   }

//   color: {
//     value: {
//       r,g,b,a...
//     },
//     configuration: {
//       ...configuration
//     }
//     ...api
//   }

//   const randomColor = color.random()

//   const randomPalette = palette.random()

//   const randomGradient = gradient.random({
//     colors: [...]
//     precision: 10
//   })

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
