import React, { useRef, useState } from 'react'
import "./SplashScreen.css"
import video from '../../Images/video-icon.png'
import { useSelector } from 'react-redux'
import SampleImage from './SampleImage'
import UploadImage from './UploadImage'
import GenrateAiImage from './GenrateAiImage'

const SplashScreen = () => {
    const [toggle,settoggle] = useState(1)
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })


  return (
    <section>
    <div className='universal-wrapper'>
        <div className= {data==true ? 'universal-container2' : 'universal-container' }>
        <div className='general-info-head-div'>
                        <p className='general-info-head'>Splash & Welcome Screen</p>


                        <div className='watch-more-videos-div'>
                        <div className='video-icon-div'>
                            <img src={video}></img>
                        </div>
                            <p className='watch-demo-para'>Watch Demo Videos</p>
                        </div>


                    </div>
                    <div className={data == true ? 'splash-screen-tabs-btn2' : 'splash-screen-tabs-btn' }>
                <button className='splash-btn' onClick={(()=>{settoggle(1)})}>Sample Images</button>
                <button className='splash-btn' onClick={(()=>{settoggle(2)})}>Upload Images</button>
                <button className='splash-btn' onClick={(()=>{settoggle(3)})}>Generate AI Images</button>
              </div>
              {toggle == 1 ?    <SampleImage/> : '' }
              {toggle == 2 ? <UploadImage/> : ''}
              {toggle == 3 ? <GenrateAiImage/> : ''}
   
        </div>
    </div>
  </section>
  )
}

export default SplashScreen
