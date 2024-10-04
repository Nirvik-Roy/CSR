import React, {useState} from 'react'
import './Reactcolor.css'
import { HexColorPicker } from "react-colorful";
const Reactcolor = () => {
    const [color, setColor] = useState("#aabbcc");
  return (
    
      <>
      <HexColorPicker color={color} onChange={setColor} />
      </>
      
  
  )
}

export default Reactcolor
