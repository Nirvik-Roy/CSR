import React, { useRef, useState } from 'react'
import "./SplashScreen.css"
import video from '../../Images/video-icon.png'
import { useSelector } from 'react-redux'
import applogo from '../../Images/app-logo.png'
import upload from '../../Images/upload.png'
import slideimg1 from '../../Images/7f0351a13874d347f048e0648318d4f4.jpg'
import slideimg2 from '../../Images/52cc0af407f72f9c82ab08627eedfda7.jpg'
import slideimg3 from '../../Images/Group 265.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Button/Button'
import question from '../../Images/Rectangle 4310.png'
const SplashScreen = () => {
    const [splashScreen,setsplashScreen]=useState()
    const [showslide,setshowslide]=useState(false)
    const [showslide2,setshowslide2]=useState(false)
    const [display,setdisplay]=useState(false)
    const [slideimage,setslideimage]=useState()
    const [slideimage2,setslideimage2]=useState()
    const [imgsrc,setimgsrc] = useState()
    const imgref= useRef()
    const showimage = (event) =>{
        setimgsrc(event.target.src)
        
    }
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
       const splashref= useRef()
       const splashimage = (event) => {
         const splash= event.target.files;
          const splashsrc = URL.createObjectURL(...splash)
          setsplashScreen(splashsrc)
          splashref.current.value=null;
          setdisplay(true)
       }
       const splashcross = () =>{
         setdisplay(false)
         setsplashScreen('')
       }
       const slideref=useRef()
       const slideupload = (event) =>{
         const slide= event.target.files;
          const slidesrc = URL.createObjectURL(...slide)
          setslideimage(slidesrc)
          slideref.current.value=null;
          setshowslide(true)
       }
       const slideupload2 = (event) =>{
        const slide= event.target.files;
         const slidesrc = URL.createObjectURL(...slide)
         setslideimage2(slidesrc)
         slideref.current.value=null;
         setshowslide2(true)
      }
       var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
      };
  return (
    <section className='section'>
    <div className='universal-wrapper'>
        <div className= {data==true ? 'universal-container2' : 'universal-container' }>
            <div className='general-info-wrapper'>
                <div className= {data== true ? 'left-general-info-div2' : 'left-general-info-div' }>


                    <div className='general-info-head-div'>
                        <p className='general-info-head'>Splash & Welcome Screen</p>


                        <div className='watch-more-videos-div'>
                        <div className='video-icon-div'>
                            <img src={video}></img>
                        </div>
                            <p className='watch-demo-para'>Watch Demo Videos</p>
                        </div>


                    </div>
                    
                    <div className='left-splash-content'>
                        <div className='upload-splash-image-div'>
                            <div className={display == true ? 'splash-img-div2' : 'splash-img-div' }>
                            {display==true?   <i onClick={(()=>{splashcross()})} className="splashcross fa-solid fa-circle-xmark"></i> : '' }
                          
                                <img src={display==true ? splashScreen : upload}></img>
                                <input ref={splashref} onChange={((e)=>splashimage(e))} type='file' className='splash-file'></input>
                            </div>
                            <p className='splash-img-para'>Choose from the library/add your own or generate using our CSR AI tools</p>
                        </div>

                        <div className='select-img-head'>
                            <div className='select-img-div'>
                                <p className='image-select-para'>Select one option from the Below</p>
                            </div>
                        </div>

                        <div className='splash-screen-slider-wrapper'>
                            <h3 className='slider-head'>Library</h3>
                            <div className='d-flex justify-content-center'>
                            <div className='slides-wrapper-div'>
                            <Slider {...settings}>
                                <div className='slide'>
                                    <img ref={imgref} onClick={((e)=>showimage(e))} src={slideimg2}></img>
                                </div>
                                <div className='slide'>
                                    <img ref={imgref} onClick={((e)=>showimage(e))} src={slideimg1}></img>
                                </div>
                                
                                <div className='slide2'>

<div className={showslide == true ? 'display' : 'slide-upload-wrapper' }>
<div className='d-flex justify-content-center'>
    <div className='upload-slide-img-div'>
        <img src={slideimg3}></img>
        <input ref={slideref} onChange={((e)=>slideupload(e))} type='file' className='upload-slide-input'></input>
    </div>
    </div>
    <p className='slide-img-para text-center'>Add Your Own Image</p>
    </div>
 {showslide == true ?  <img ref={imgref}  onClick={((e)=>showimage(e))} src={ slideimage }></img> : ''}
  

</div>


<div className='slide2'>

<div className={showslide2 == true ? 'display' : 'slide-upload-wrapper' }>
<div className='d-flex justify-content-center'>
    <div className='upload-slide-img-div'>
        <img src={slideimg3}></img>
        <input ref={slideref} onChange={((e)=>slideupload2(e))} type='file' className='upload-slide-input'></input>
    </div>
    </div>
    <p className='slide-img-para text-center'>Generate Your Own 
    Image Using AI</p>
    </div>
 {showslide2 == true ?  <img ref={imgref} onClick={((e)=>showimage(e))}  src={ slideimage2 }></img> : ''}
  

</div>

                            </Slider>
                           
               

                           
                                
                              


                            </div>
                            </div>
                        </div>
                        <div className='faq-head-div'>
                        <h2 className='faq-head'>FAQ</h2>
                        <div className='faq-img-div'>
                        <img src={question}></img>
                        </div>
                        
                        </div>
                        <p className='faq-para'>A splash screen is an initial screen that is displayed when you launch a software application. It usually appears for a few seconds before the main interface or content is loaded.
</p>
                        
                        <div className=' btn-div d-flex justify-content-center'>
                            <Button/>
                        </div>
                    </div>
                     

                </div>
                <div className={data==true ? 'right-general-info-div2' : 'right-general-info-div' }>
                   <div className='d-flex justify-content-center'>

                
                    <div className='phone-div2'>
                     <div className='phone-head'></div>
                      <img src={imgsrc}></img>

                    </div>
                 
                    </div>
                    <p className='app-logo-para'>App Logo & Name</p>
                   
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default SplashScreen
