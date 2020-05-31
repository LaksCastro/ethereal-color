import EtherealColor from 'ethereal-color'

const { Color, Palette, Gradient } = EtherealColor

export default function Demo3() {
  const wrapper = document.querySelector('.demo-3')

  let count = Math.floor(window.innerWidth / 50)

  count = count % 2 === 0 ? count : count + 1

  let transition = 5

  function getTransition() {
    const value = transition / 100

    transition += 5

    return value
  }
  const childs = Array.from({ length: count }).map(() => {
    const child = document.createElement('div')

    const styles = `
      transition: ${getTransition()}s ease-in-out;
    `

    transition++

    wrapper.appendChild(child)

    child.setAttribute('style', styles)

    return child
  })

  function renderGradient() {
    const basePalette1 = Palette(Color('#fff'), {
      range: 150,
    })
    const basePalette2 = Palette(Color('#000'), {
      range: 150,
    })

    const color1 = Color()
    color1.random(basePalette1)

    const color2 = Color()
    color2.random(basePalette2)

    const palette = Palette(
      new Date().getMilliseconds() % 2 === 0
        ? [color1, color2]
        : [color2, color1],
    )

    const gradients = Gradient(palette, {
      count: count,
    }).toStringArray('rgb')

    for (let i = 0; i < count; i++) {
      const child = childs[i]
      child.style.background = gradients[i]
    }

    return renderGradient
  }

  document.querySelector(
    '.demo__button-demo-3',
  ).onclick = renderGradient()
}
