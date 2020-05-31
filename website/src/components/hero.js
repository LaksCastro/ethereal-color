import EtherealColor from 'ethereal-color'

export default function Hero() {
  const { Color, Palette, Gradient } = EtherealColor

  function getRandomColor() {
    const color = Color()
    color.random()
    return color
  }

  function changeDinamicLogoGradient(useRandom = false) {
    const items = [
      ...document.querySelectorAll('.hero__dinamic-logo div'),
    ]

    const colorOne = useRandom
      ? getRandomColor()
      : Color('rgb(255,0,120)')
    const colorTwo = useRandom
      ? getRandomColor()
      : Color('rgb(120,0,255)')

    const palette = Palette([colorOne, colorTwo])

    const gradient = Gradient(palette)

    const newColors = gradient.toStringArray('rgb')

    items.forEach(
      (child, i) => (child.style.backgroundColor = newColors[i]),
    )
  }

  changeDinamicLogoGradient()
  document.querySelector('.header__item-logo').onclick = () =>
    changeDinamicLogoGradient(true)

  document.querySelector('.hero__dinamic-logo').onclick = () =>
    changeDinamicLogoGradient(true)
}
