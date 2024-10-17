import React, { useState } from 'react'
import './WelcomeScreen.css'
const Accordiondisplay = (props) => {
   const [active,setactive] =useState(false)
  return (
    <>
                    <div className='question-div-wrapper' onClick={(()=>setactive(!active))}>
                   <div className='quesiton-plus-icon-main'>
                   <div className='question-div'>
                    <p className='question-para'>{props.element.title}</p>
                   </div>
                   <div className='plus-icon'>
                    <span className='span-top'></span>
                    <span className={active ? 'span-bottom2' : 'span-bottom' }></span>
                   </div>
                   </div>
                  
                     <div className={active ? 'answer-div2' : 'answer-div'} >
                    <p className='answer-para'> {props.element.answer}</p>
                   </div>
                  
                     
                   
                 
                   </div>
                    </>
  )
}

export default Accordiondisplay
