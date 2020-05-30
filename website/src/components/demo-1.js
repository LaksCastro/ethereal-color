import EtherealColor from 'ethereal-color'

const { Color, Palette, Gradient } = EtherealColor

export default function Demo1() {
  const wrapper = document.querySelector('.demo-1')

  const count = Math.floor(window.innerWidth / 50)

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
    const color1 = Color()
    color1.random()

    const color2 = Color()
    color2.random()

    const palette = Palette([color1, color2])

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
    '.demo__button-demo-1',
  ).onclick = renderGradient()
}
