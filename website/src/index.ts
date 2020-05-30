const { Color, Palette, Gradient } = EtherealColor

// =========================================
// DINAMIC LOGO
// =========================================

function getRandomColor() {
  const color = Color()
  color.random()
  return color
}

function changeDinamicLogoGradient(useRandom = false) {
  const logoColors = [
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

  logoColors.forEach(
    (child, i) => (child.style.backgroundColor = newColors[i]),
  )
}

changeDinamicLogoGradient()
document.querySelector('.hero__dinamic-logo').onclick = () =>
  changeDinamicLogoGradient(true)
