import React from 'react'
import video from '../../Images/video-icon.png'
import './Generalinfo.css'
const GeneralInfohead = () => {
  return (
    <>
      <div className='general-info-head-div'>
                            <p className='general-info-head'>General Info</p>


                            <div className='watch-more-videos-div'>
                            <div className='video-icon-div'>
                                <img src={video}></img>
                            </div>
                                <p className='watch-demo-para'>Watch Demo Videos</p>
                            </div>


                        </div>
                        <p className='hi-para'>Hi let's name Your App and Brand it</p>
    </>
  )
}

export default GeneralInfohead
