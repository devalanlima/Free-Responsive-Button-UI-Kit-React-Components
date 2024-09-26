import { useState } from "react"
import { Corners, Size, State, Style } from "../button-types"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  corners?: Corners
  size?: Size
  styleType?: Style
}

export default function Button ({
  children, 
  corners = 'edgy', 
  size = 'medium', 
  styleType = 'primary',
  disabled,
  ...rest
}: Props) {

  const btnStyle: Record<Style, string> = {
    primary: 'bg-primary-medium text-gray-light',
    secondary: 'bg-secondary-medium text-gray-light',
    outline: 'bg-gray-light text-primary-medium border-[1px] border-primary-medium',
    ghost: 'bg-none text-primary-medium',
  }

  const state: Record<State, string> = {
    default: btnStyle[styleType],
    hover: ((): string=>{
      switch (styleType) {
        case 'primary':
          return `hover:shadow-default-btn-hover hover:shadow-primary-dark/50`
        case 'secondary':
          return `hover:shadow-default-btn-hover hover:shadow-secondary-dark/50`
        case 'ghost':
          return `hover:shadow-ghost-btn-hover hover:shadow-primary-dark/40 hover:text-primary-dark`
        case 'outline':
          return `hover:shadow-default-btn-hover hover:shadow-primary-dark/50`
      }
    })(),
    click: (() :string => {
      switch (styleType) {
        case 'primary':
          return 'bg-primary-dark text-gray-light'
        case 'secondary':
          return 'bg-secondary-dark text-gray-light'
        case 'ghost':
          return 'bg-primary-light text-primary-dark shadow-ghost-btn-hover shadow-primary-dark/40'
        case 'outline':
          return 'bg-primary-medium text-gray-light border-[1px] border-gray-light'
      }
    })(),
    disabled: (() :string => {
      switch (styleType) {
        case 'primary':
          return 'disabled:bg-primary-dark disabled:text-primary-medium'
        case 'secondary':
          return 'disabled:bg-secondary-dark disabled:text-secondary-medium'
        case 'ghost':
          return 'disabled:text-gray-medium'
        case 'outline':
          return 'disabled:bg-gray-light disabled:text-[#CFCFCF] disabled:border-none'
      }
    })(),
  }

  const [btnState, setBtnState] = useState(state.default)

  const btnSize: Record<Size, string> = {
    small: 'py-[9px] px-[14px] text-[12px]',
    medium: 'px-[18px] pt-[11px] pb-[12px] text-[14px]',
    large: 'px-[24px] pt-[15px] pb-[16px] text-[16px]',
  }

  const btnCorners: Record<Corners, string> = {
    edgy: 'rounded-lg',
    smooth: 'rounded-full',
  }

  const btnTyphograpy = 'font-Figtree font-medium'

  const handleMouseDown = () => {
    setBtnState(state.click)
  }

  const handleMouseUp = () => {
    setBtnState(state.default)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Space') {
      setBtnState(state.click)
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Space') {
      setBtnState(state.default)
    }
  }

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      disabled={disabled}    
      className={`
        ${btnState} 
        ${btnCorners[corners]} 
        ${btnSize[size]} 
        ${btnTyphograpy}
        ${state.disabled}
        ${state.hover}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}