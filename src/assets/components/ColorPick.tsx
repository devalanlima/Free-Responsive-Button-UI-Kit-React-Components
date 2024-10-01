import { useEffect, useState } from "react"

type RGB = [number, number, number]

type ColorVar = 
| 'error'
| 'warning'
| 'success'
| 'info'
| 'primary'
| 'secondary'
| 'gray'

interface Props {
  cssVar: ColorVar
}

export default function ColorPick ({
  cssVar
}: Props) {

  const [atualColor, setAtualColor] = useState('0 0 0')

  useEffect(()=>{
    const rootStyles = getComputedStyle(document.documentElement)
    const primaryColor = rootStyles.getPropertyValue(`--${cssVar}-medium`).trim()
    setAtualColor(rgbToHex(primaryColor))
  }, [cssVar])

  const hexToRgb = (hex: string): RGB | null => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, function(r, g, b) {
      return r + r + g + g + b + b
    })
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
  }

  const rgbToHex = (rgb: string): string => {
    const rgbArray = rgb.split(' ').map(Number)
    return `#${rgbArray.map(value => value.toString(16).padStart(2, '0')).join('').toUpperCase()}`
  }

  const adjustColorIntensity = (rgb: RGB, factor: number): RGB => {
    return rgb.map((value) => Math.min(255, Math.max(0, value * factor))) as RGB
  }

  const rgbStringfy = (rgb: RGB) => {
    return `${rgb[0]} ${rgb[1]} ${rgb[2]}`
  }

  const lightColor = (rgb: RGB): string => {
    const light = adjustColorIntensity(rgb, 1.3)
    return rgbStringfy(light)
  }

  const darkColor = (rgb: RGB) => {
    const dark = adjustColorIntensity(rgb, 0.5)
    return rgbStringfy(dark)
  }

  const changeColor = (event: React.ChangeEvent) => {
    const $inputColor = event.target as HTMLInputElement
    const newColorRGB = hexToRgb($inputColor.value)

    if (newColorRGB) {
      const light = lightColor(newColorRGB)
      const dark = darkColor(newColorRGB)
      const medium = rgbStringfy(newColorRGB)
      
      document.documentElement.style.setProperty(`--${cssVar}-medium`, medium)
      document.documentElement.style.setProperty(`--${cssVar}-light`, light )
      document.documentElement.style.setProperty(`--${cssVar}-dark`, dark)

      setAtualColor($inputColor.value)
    }
  }

  return (
    <input type="color" value={atualColor} onChange={changeColor}/>
  )
}