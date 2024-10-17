import React from 'react'
import {data3} from './Data'
import Accordiondisplay from './Accordiondisplay'
const Accordion = () => {
    
  return (
    <>
      {data3.map((ele,index)=>{
        return(
            <Accordiondisplay key={index} element={ele}/>
        )
      })}
    </>
  )
}

export default Accordion
