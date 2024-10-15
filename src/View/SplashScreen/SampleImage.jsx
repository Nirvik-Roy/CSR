import React, { useRef, useState } from 'react'
import './SplashScreen.css'
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
import { useSelector } from 'react-redux'
const SampleImage = () => {

    const [splashScreen,setsplashScreen]=useState()
    const [showslide,setshowslide]=useState(false)
    const [showslide2,setshowslide2]=useState(false)
    const [display,setdisplay]=useState(false)
    const [slideimage,setslideimage]=useState()
    const [slideimage2,setslideimage2]=useState()
    const [imgsrc,setimgsrc] = useState()
    const [showcrop,setshowcrop] =useState(false)
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
          setshowcrop(true)
       }
       const slideupload2 = (event) =>{
        const slide= event.target.files;
         const slidesrc = URL.createObjectURL(...slide)
         setslideimage2(slidesrc)
         slideref.current.value=null;
         setshowslide2(true)
      }

      const NextArrow = ({ className, style, onClick }) => {
        return (
            <i  onClick={onClick} class="fa-solid fa-greater-than"></i>
        );
      };
      
      const PrevArrow = ({ className, style, onClick }) => {
        return (
     
            <i  onClick={onClick} class="fa-solid fa-less-than"></i>
     
        );
      };
      
       var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
       
      };
      const data2 =[
        {
            num:1,
            img:slideimg1,
        },
        {
            num:2,
            img:slideimg2,
        },
        {
            num:3,
            img:slideimg1,
        },
        {
            num:1,
            img:slideimg2,
        },
        {
            num:2,
            img:slideimg1,
        },
        {
            num:3,
            img:slideimg2,
        },
        {
            num:3,
            img:slideimg1,
        },

      ]
  return (
    <>
                  <div className='general-info-wrapper'>
            
            <div className= {data== true ? 'left-general-info-div2' : 'left-general-info-div' }>


         
           
                
                <div className='left-splash-content'>
                    {/* <div className='upload-splash-image-div'>
                        <div className={display == true ? 'splash-img-div2' : 'splash-img-div' }>
                        {display==true?   <i onClick={(()=>{splashcross()})} className="splashcross fa-solid fa-circle-xmark"></i> : '' }
                      
                            <img src={display==true ? splashScreen : upload}></img>
                            <input ref={splashref} onChange={((e)=>splashimage(e))} type='file' className='splash-file'></input>
                        </div>
                        <p className='splash-img-para'>Choose from the library/add your own or generate using our CSR AI tools</p>
                    </div> */}

                    {/* <div className='select-img-head'>
                        <div className='select-img-div'>
                            <p className='image-select-para'>Select one option from the Below</p>
                        </div>
                    </div> */}

                    <div className='splash-screen-slider-wrapper'>
                        <h3 className='slider-head pt-4'>Library</h3>
                        <div className='slider-main'>
                        <div className='slides-wrapper-div'>
                        <Slider {...settings}>
                        {data2 .map((ele,index)=>{
                            return(
                                <>
                          
                                <div key={index} className={data == true ? 'slide1' : 'slide'}>
                                <img ref={imgref} onClick={((e)=>showimage(e))} src={ele.img}></img>
                            </div>
                            
                          
                            </>
                            )
                        })}
                           
                           
                            





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

{showcrop == true ? <div className='crop-img-wrapper '>

<div className='crop-img-div'>
<div className='crop-radio'>
    <div className='crop-radio-select'></div>
</div>
<p className='crop-para'>Do You Want to Crop</p>
</div>

<div className='resize-img-div'>
<div className='resize-radio'>
    <div className='resize-radio-select'></div>
</div>
<p className='resize-para'>Do You Want to resize</p>
</div>
</div> : '' }

                    
                    <div className=' btn-div d-flex justify-content-center'>
                        <Button/>
                    </div>


                </div>
                 

            </div>
            <div className={data==true ? 'right-general-info-div2' : 'right-general-info-div' }>
               {/* <div className='d-flex justify-content-center'> */}

            
                <div className={data == true ? 'phone-div3': 'phone-div2'}>
                 <div className='phone-head'></div>
                  <img src={imgsrc}></img>

                </div>
             
                {/* </div> */}
               
               
            </div>
        </div>
    </>
  )
}

export default SampleImage
