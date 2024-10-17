import React, { useState } from 'react'
import './Csrai.css'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'
import video from '../../Images/video-icon.png'
import ai from '../../Images/CSR AI.jpg'
import upload from '../../Images/upload.png'
import chatbot from '../../Images/chatbot 1.png'
const Csrai = () => {
    const [imgSrc,setimgSrc] = useState()
    const [display,setdisplay] = useState(false)
    const data = useSelector ((state)=>{
        return state.sidebar.isOpen
       })
       const imageUpload = (e) => {
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.onload = ()=>{
                setimgSrc(reader.result)
            }
            reader.readAsDataURL(file)
            setdisplay(true)
            e.target.value='';
        }
       }
       const crossimg = () => {
        setdisplay(false)
        setimgSrc('')
       }
  return (
    <>
       <section className='section overflow'>
        <div className='universal-wrapper'>
            <div className= {data==true ? 'universal-container2' : 'universal-container' }>
            <div className='general-info-head-div'>
                            <p className='general-info-head'>My CSR AI</p>


                            <div className='watch-more-videos-div'>
                            <div className='video-icon-div'>
                                <img src={video}></img>
                            </div>
                                <p className='watch-demo-para'>Watch Demo Videos</p>
                            </div>


                        </div>
                      
                      
                <div className={data == true ? 'general-info-wrapper2' : 'general-info-wrapper' }>
                    <div className= {data== true ? 'left-general-info-div2' : 'left-general-info-div' }>


                       

                         <div className='left-general-info-content'>

                         <div className='ai-docs-upload-wrapper'>
                            <h3 className='ai-docs-head'> AI Docs upload</h3>
                            <div className='ai-docs-upload-icon'>
                                <div className='upload-ai-doc-div'>
                                {
                                    display == true ?   <i onClick={(()=>crossimg())}  className= { "cross-img fa-solid fa-circle-xmark"  }></i> : ''
                                }
                              
                                    <img  src={display == true ? imgSrc :upload}></img>
                                    <input onChange={((e)=>{imageUpload(e)})} type='file'></input>
                                </div>
                                <p className='upload-ai-para'>To Upload Documents,Click the upload icon Section on the left </p>
                            </div>
                            <p className='upload-file-para'>Upload File </p>
                         </div>

                         <div className='checkout-ai-wrapper'>
                            <h3 className='checkout-ai-head'>Check out your AI CSR Chatbot</h3>
                            <div className='checkout-ai-div'>
                            {display == true ? <img src={imgSrc} className='checkout-ai-img'></img> :    <img src={chatbot}></img>  }
                             
                                
                            </div>
                            <p className='checkout-ai-para'>AI Chatbot</p>
                         </div>

                         <div className='my-csr-ai-main'>
                         <h3 className='my-csr-ai-head'>My CSR AI</h3>
                          <div className='my-csr-ai-wrapper'>
                            <div className='my-csr-ai-option-one-main'>
                                <div className='option-circle'>
                                    <div className='inside-circle'></div>
                                </div>
                                <p className='option-one-para'>Internal Employees</p>
                            </div>
                            <div className='my-csr-ai-option-two-main'>
                            <div className='option-circle'>
                                    <div className='inside-circle'></div>
                                </div>
                                <p className='option-one-para'>Public</p>
                            </div>
                          </div>
                          </div>
                          <div className='btn-div d-flex justify-content-center'>
                            <Button/>
                          </div>
                         </div>
                         

                    </div>
                    <div className={data==true ? 'right-general-info-div2' : 'right-general-info-div' }>
                       

                    <div className='d-flex justify-content-end'>
                        <div className={data == true ? 'phone-div-general csrai-phone-height' : 'phone-div csrai-phone-height' }>
                         <div className='phone-head'></div>
                        
                            
                        <img src={ai}></img>

                        </div>
                        
                        </div>
                        <p className={data == true ? 'app-logo-para csr-ai-para-padding' : 'app-logo-para ' }> AI CSR Chatbot</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Csrai
