import EtherealColor from 'ethereal-color'

const { Color, Palette } = EtherealColor

export default function Footer() {
  const icon = document.querySelector('.footer__color')
  const background = document.querySelector('.footer')

  const backgroundColor = Color('#282c34')
  const backgroundPalette = Palette(backgroundColor, { range: 20 })
  const color = Color()

  function changeIconColor() {
    color.random()
    icon.style.backgroundColor = color.get('rgb').string

    setTimeout(changeIconColor, 1000)
  }
  function changeFooterBackground() {
    backgroundColor.random(backgroundPalette)

    background.style.backgroundColor = backgroundColor.get(
      'rgb',
    ).string

    setTimeout(changeFooterBackground, 1000)
  }

  changeIconColor()
  changeFooterBackground()
}
