import { useState } from "react"
import { Corners, Icon, Size, State, Style } from "../button-types"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  corners?: Corners
  size?: Size
  styleType?: Style
  icon?: React.ReactNode
  iconPosition?: Icon
}

interface ButtonWithIcon extends Props {
  icon: React.ReactNode
  iconPosition: Icon
}

interface ButtonWithoutIcon extends Props {
  icon?: undefined
  iconPosition?: undefined
}

type BtnProps = ButtonWithIcon | ButtonWithoutIcon

export default function Button ({
  corners = 'smooth', 
  size = 'medium', 
  styleType = 'primary',
  children, 
  disabled,
  icon,
  iconPosition,
  ...rest
}: BtnProps) {

  const btnStyle: Record<Style, Record<State, string>> = {
    primary: {
      default: 'bg-primary-medium text-gray-light',
      hover: 'hover:shadow-default-btn-hover hover:shadow-primary-dark/50 focus-visible:shadow-default-btn-hover focus-visible:shadow-primary-dark/50',
      click: 'bg-primary-dark text-gray-light',
      disabled: 'disabled:bg-primary-dark disabled:text-primary-medium',
    },
    secondary: {
      default: 'bg-secondary-medium text-gray-light',
      hover: 'hover:shadow-default-btn-hover hover:shadow-secondary-dark/50 focus-visible:shadow-default-btn-hover focus-visible:shadow-secondary-dark/50',
      click: 'bg-secondary-dark text-gray-light',
      disabled: 'disabled:bg-secondary-dark disabled:text-secondary-medium',
    },
    outline: {
      default: 'bg-gray-light text-primary-medium border-[1px] border-primary-medium',
      hover: 'hover:shadow-default-btn-hover hover:shadow-primary-dark/50 focus-visible:shadow-default-btn-hover focus-visible:shadow-primary-dark/50',
      click: 'bg-primary-medium text-gray-light border-[1px] border-gray-light',
      disabled: 'disabled:bg-gray-light disabled:text-[#CFCFCF] disabled:border-none',
    },
    ghost: {
      default: 'bg-none text-primary-medium',
      hover: 'hover:shadow-ghost-btn-hover hover:shadow-primary-dark/40 hover:text-primary-dark focus-visible:shadow-ghost-btn-hover focus-visible:shadow-primary-dark/40 focus-visible:text-primary-dark',
      click: 'bg-primary-light text-primary-dark shadow-ghost-btn-hover shadow-primary-dark/40',
      disabled: 'disabled:text-gray-medium',
    },
  }

  const state: Record<State, string> = {
    default: btnStyle[styleType].default,
    hover: btnStyle[styleType].hover,
    click: btnStyle[styleType].click,
    disabled: btnStyle[styleType].disabled,
  }

  const [btnState, setBtnState] = useState(state.default)

  const btnSize: Record<Size, string> = {
    small: iconPosition === 'only' ? 'p-[9px] text-[12px]' : 'py-[9px] px-[14px] text-[12px] leading-[1.17]',
    medium: iconPosition === 'only' ? 'p-[12px] text-[14px]' : 'text-[14px] px-[18px] pt-[11px] pb-[12px] leading-[1.22]',
    large: iconPosition === 'only' ? 'p-[15px] text-[16px]' : 'px-[24px] pt-[15px] pb-[16px] text-[16px] leading-[1.19]',
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

  const enableLeftIcon = (): boolean => {
    if (iconPosition !== 'none' && (((icon && iconPosition === 'left' || iconPosition === 'only')))) {
      return true
    } else {
      return false
    }
  }

  const enableRightIcon = (): boolean => {
    if ((iconPosition !== 'none') && (icon && iconPosition === 'right')) {
      return true
    } else { 
      return false
    }
  }

  const iconSize: Record<Size, string> = {
    small: 'w-[14px] h-[14px] flex justify-center items-center',
    medium: 'w-[16px] h-[16px] flex justify-center items-center',
    large: 'w-[20px] h-[20px] flex justify-center items-center',
  }

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onBlur={handleMouseUp}
      disabled={disabled}          
      className={`
        ${btnState} 
        ${btnCorners[corners]} 
        ${btnSize[size]} 
        ${btnTyphograpy}
        ${state.disabled}
        ${!disabled && state.hover}
        flex gap-[8px] items-center justify-center
      `}
      {...rest}
    >
      {
        enableLeftIcon() && 
        <span className={iconSize[size]}>
          {icon}
        </span>
      }

      {iconPosition !== 'only' && children}

      {
        enableRightIcon() && 
        <span className={iconSize[size]}>
          {icon}
        </span>
      }
    </button>
  )
}