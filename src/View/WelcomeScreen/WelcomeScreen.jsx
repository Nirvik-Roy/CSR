import React, { useRef, useState } from 'react'
import './WelcomeScreen.css'
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
import iphone from '../../Images/iPhone 14 & 15 Pro Max - 2.jpg'
import iphone2 from '../../Images/iPhone 14 & 15 Pro - 2.png'
import img1 from '../../Images/image 1.png'
import Accordiondisplay from './Accordiondisplay'
import Accordion from './Accordion'

const WelcomeScreen = () => {
   
       const [splashScreen,setsplashScreen]=useState()
    const [showslide,setshowslide]=useState(false)
    const [showslide2,setshowslide2]=useState(false)
    const [display,setdisplay]=useState(false)
    const [slideimage,setslideimage]=useState()
    const [slideimage2,setslideimage2]=useState()
    const [imgsrc,setimgsrc] = useState(iphone)
    const [showcrop,setshowcrop] =useState(false)
    const [index1,setindex1]=useState()
    const [closeindex,setcloseindex]=useState()
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
            img:img1,
        },
        {
            num:2,
            img:iphone2,
        },
      ]

      const displayfunc = (e,index) =>{

        setdisplay(!display)
        setindex1(index)
      }
      const closefunc = (e,index) =>{
        setcloseindex(index)
      }
      const [imageSources,setImageSources]=useState(
        Array(data2.length).fill(null)
      )

      const [phoneimgsrc,setphoneimgsrc]=useState()
      const slideupload5 = (e,index)=>{
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              // Update the image source for the specific slide
              const updatedImages = [...imageSources];
              updatedImages[index] = reader.result; // Store the base64 image URL
              setImageSources(updatedImages);
              setphoneimgsrc(updatedImages) // Update the state
            };
            reader.readAsDataURL(file); // Read the file as a base64 URL
            e.target.value='';
          }
      }


      const removeImg = (e,index) =>{
        const updatedImages = [...imageSources];
        updatedImages[index] = null; // Set the image source to null to remove the image
        setImageSources(updatedImages); // Update the state
       if(phoneimgsrc[index] == imgsrc){
          setimgsrc('')
       }
    }
  return (
    <>
        <section>
    <div className='universal-wrapper'>
        <div className= {data==true ? 'universal-container2' : 'universal-container' }>
        <div className='general-info-head-div'>
                        <p className='general-info-head'>Welcome Screen</p>


                        <div className='watch-more-videos-div'>
                        <div className='video-icon-div'>
                            <img src={video}></img>
                        </div>
                            <p className='watch-demo-para'>Watch Demo Videos</p>
                        </div>


                    </div>
                    <div className={data ==true ? 'general-info-wrapper2' : 'general-info-wrapper'}>
            
            <div className= {data== true ? 'left-general-info-div2' : 'left-general-info-div' }>


         
           
                
                <div className='left-splash-content left-margin-content height'>
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
                        <div className='slides-wrapper-div '>
                      <div className=' welcome-slide-wrapper'>
                        {data2 .map((ele,index)=>{
                            return(
                                <>
                          
                                <div key={index} className={data == true ? 'welcome-slide3' : 'welcome-slide2'}>
                                <img ref={imgref} onClick={((e)=>showimage(e))} src={ele.img}></img>
                            </div>
                            
                          
                            </>
                            )
                        })}

                        {[1].map((ele,index)=>{
                            return(
                                <>
                                <div key={index} className={data == true ? 'welcome-slide4' : 'welcome-slide' }>
                                <i onClick={((e)=>removeImg(e,index))}  className= { imageSources[index] ?  "cross-img2 fa-solid fa-circle-xmark" : '' }></i>

<div className={imageSources[index] ? 'display' : 'slide-upload-wrapper' }>
<div className='d-flex justify-content-center'>
<div className='upload-slide-img-div'>
    <img src={slideimg3}></img>
    <input ref={slideref} onChange={((e)=>slideupload5(e,index))} type='file' className='upload-slide-input'></input>
</div>
</div>

</div>
{imageSources[index] ?  <img ref={imgref}  onClick={((e)=>showimage(e))} src={ imageSources[index] }></img> : ''}


</div>
                                </>
                            )
                        })}
                           
                           
                        </div>





                      
                       
           

                       
                            
                          


                        </div>
                        </div>
                    </div>


                    <div className='faq-head-div'>
                    <h2 className='faq-head'>FAQ</h2>
                    <div className='faq-img-div'>
                    <img src={question}></img>
                    </div>
                    </div>
            <Accordion/>


                   


{/* {showcrop == true ? <div className='crop-img-wrapper '>

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
</div> : '' } */}

                    
                    <div className=' btn-div d-flex justify-content-center'>
                        <Button/>
                    </div>


                </div>
                 

            </div>
            <div className={data==true ? 'right-general-info-div2 right-flex' : 'right-general-info-div' }>
               <div className='d-flex justify-content-end'>

            
                <div className={data == true ? 'phone-div3 phone-margin': 'phone-div2 phone-margin'}>
                 <div className='phone-head'></div>
                  <img src={imgsrc}></img>

                </div>
             
                </div>
               
               
            </div>
        </div>
   
        </div>
    </div>
  </section>
    </>
  )
}

export default WelcomeScreen
