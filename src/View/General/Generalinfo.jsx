import React, { useRef, useState } from 'react'
import './Generalinfo.css'
import video from '../../Images/video-icon.png'
import upload from '../../Images/upload.png'
import applogo from '../../Images/app-logo.png'
import Reactcolor from '../../Reactcolor/Reactcolor'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'
const Generalinfo = () => {
  const [imagesrc,setimagesrc] =useState()
  const [iconsrc,seticonsrc] = useState()
  const [display,setdisplay]=useState(false)
  const [display2,setdisplay2]=useState(false)
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
       const iconref = useRef()
   const imgref=useRef()
       const imageupload = (event) => {
         const img= event.target.files;
         const imgsrc=URL.createObjectURL(...img)
      
         setimagesrc(imgsrc)
         imgref.current.value=null;
        setdisplay(true)
       }
       const uploadicon = (event) =>{
         const icon = event.target.files
         const src=URL.createObjectURL(...icon)
         seticonsrc(src)
         iconref.current.value=null;
         setdisplay2(true)
       }
       const crossimg = () =>{
         setdisplay(false)
         setimagesrc('')
       }
       const crossicon = () =>{
        setdisplay2(false)
       seticonsrc('')
      }
  return (
    <>
      <section className='section overflow'>
        <div className='universal-wrapper'>
            <div className= {data==true ? 'universal-container2' : 'universal-container' }>
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
                <div className={data == true ? 'general-info-wrapper2' : 'general-info-wrapper' }>
                    <div className= {data== true ? 'left-general-info-div2' : 'left-general-info-div' }>


                       

                         <div className='left-general-info-content'>

                          <div className={data == true ? 'form-field mt-4': 'form-field' }>
                            <p className='csr-label'>Let's name your CSR app </p>
                            <div className='app-name-input-div'>
                            <input type='text' className='app-name-input' defaultValue='App Name'></input>
                            </div>
                          </div>

                          <div className='form-field'>
                            <p className='csr-label'>Add Your Website URL </p>
                            <div className='app-name-input-div'>
                            <input type='text' className='app-name-input' defaultValue='Enter URL'></input>
                            </div>
                          </div>
                          
                          <div className='upload-logo-wrapper'>
                            <p className='upload-logo-para'>Upload Logo</p>
                            <div className='upload-image-div-wrapper'>
                                <div className={display == true ? 'upload-image-div2' : 'upload-image-div' }>
                                <i onClick={(()=>crossimg())} className= {display == true ? "cross-img fa-solid fa-circle-xmark" : '' }></i>
                                
                                    <img className='upload-image' src={display ==true ? imagesrc  : upload}></img>
                                    {display == false ?  <input ref={imgref} className='file-choose' onChange={((e)=>imageupload(e))} type='file'></input> : '' }
                                   
                                </div>
                                <p className='upload-image-instruction'>To upload your app  image, click the upload image section on the left. (Default Logo Select Atomatically)</p>
                            </div>

                            <div className='upload-logo-description-div'>
                            <div>
                            <p className='upload-logo-description-para'>Upload Logo</p>
                            <p className='image-size-para'>(600 x 600)</p>
                            </div>
                            <div>
                                <p className='skip-now-para'>Skip Now</p>
                            </div>
                            </div>
                          
                          </div>

                          <div className='my-app-wrapper'>
                            <p className='my-app-para'>My App</p>
                            <div className='app-logo-wrapper'>
                                <div className='app-logo2'>
                                    <img src={display == true ? imagesrc : applogo}></img>
                                </div>
                                <div className='app-logo2'>
                                    <img src={display == true ? imagesrc : applogo}></img>
                                </div>
                            </div>
                          </div>

                          <div className='app-color-wrapper'>
                          <p className='my-app-para'>App Color</p>
                          <p className='app-color-para'>CSR AI has recommended a primary and secondary color for your app; if you're not happy with the suggestions, you can select a different color.</p>
                          <div className='react-color-div-wrapper'>
                          <Reactcolor/>
                          <Reactcolor/>
                          </div>
                          </div>
                          

                                  
                          <div className='upload-logo-wrapper'>
                            <p className='upload-logo-para'>Upload Icon</p>
                            <div className='upload-image-div-wrapper'>
                                <div className={display2 == true ? 'upload-image-div2' : 'upload-image-div' }>
                                <i onClick={(()=>crossicon())} className= {display2 == true ? "cross-img fa-solid fa-circle-xmark" : '' }></i>
                                    <img src={display2 == true ? iconsrc : upload}></img>
                                    {display2 == false ?   <input ref={iconref} onChange={((e)=>uploadicon(e))} className='file-choose' type='file'></input> : ''}
                                   
                                </div>
                                <p className='upload-image-instruction'>To upload your app  icon, click the upload icon section on the left .(Default Icon Select Atomatically)</p>
                            </div>

                            <div className='upload-logo-description-div'>
                            <div>
                            <p className='upload-logo-description-para'>Upload Icon</p>
                            
                            </div>
                            <div>
                                <p className='skip-now-para'>Skip Now</p>
                            </div>
                            </div>
                          
                          </div>


                          <div className='theme-choose-wrapper'>
                            <p className='theme-choose-para'>Choose which Mode you would like</p>
                            <div className='theme-btn-div'>
                                <div className='light-theme'>
                                    <div className='light-div'>
                                        <div className='light'></div>
                                    </div>
                                    <p className='light-para'>Light Mode</p>
                                </div>
                                <div className='dark-theme'>
                                <div className='light-div'>
                                        <div className='dark'></div>
                                    </div>
                                    <p className='light-para'>Dark Mode</p>
                                </div>
                            </div>
                          </div>
                          
                          <div className='btn-div d-flex justify-content-center'>
                            <Button/>
                          </div>
                         </div>
                         

                    </div>
                    <div className={data==true ? 'right-general-info-div2' : 'right-general-info-div' }>
                       

                    <div className='d-flex justify-content-center'>
                        <div className={data == true ? 'phone-div-general' : 'phone-div' }>
                         <div className='phone-head'></div>
                         <div className='phone-app-div'>
                            <img src={applogo}></img>
                         </div>

                        </div>
                        </div>
                     
                        <p className='app-logo-para'>App Logo & Name</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Generalinfo
