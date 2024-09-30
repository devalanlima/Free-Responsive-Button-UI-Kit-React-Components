import { useState } from "react";
import { Icon, Size, Style } from "./assets/button-types";
import Button from "./assets/components/Button";
import Toggle from "./assets/components/Toggle";

export default function App() {
  const sizes: Array<Size> = ['small', 'medium', 'large']
  const styles: Array<Style> = ['primary', 'secondary', 'ghost', 'outline']
  const iconPositions: Array<Icon> = ['none', 'left', 'only', 'right']
  
  const [corner, setCorner] = useState<boolean>(true)
  const handleChangeCorner = () => {
    setCorner(!corner)
  }

  const [enable, setEnable] = useState<boolean>(true)
  const handleChangeEnable = () => {
    setEnable(!enable)
  }

  return (    
    <>
    <div className="flex gap-5 m-5">
    <Toggle
      inputValue={corner}
      onChange={handleChangeCorner}
      label1="Smooth"
      label2="Edgy"
    />
    <Toggle
      inputValue={enable}
      onChange={handleChangeEnable}
      label1="Enable"
      label2="Disable"
    />
    </div>
      <div className="flex flex-col gap-5 m-5 outline-dashed outline-primary-medium p-4 w-fit">
        {styles.map(style => (
          <div className="flex flex-col gap-2" key={style}>
            {sizes.map(size => (
              <div className="flex gap-2 flex-wrap justify-around">
                {iconPositions.map(iconPosition => (
                  <Button                 
                    size={size} 
                    styleType={style} 
                    iconPosition={iconPosition} 
                    corners={corner ? 'smooth' : 'edgy'}
                    disabled={!enable}
                    icon={<i className="fa-solid fa-house"></i>}
                  >
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        ))}  
      </div>
    </>

  )
}


