import React from 'react'
import './Otp.css'
import { useNavigate } from 'react-router-dom';
const Otp = () => {
  const navigate =useNavigate()
  const navigatefunc = (e) =>{
    
    e.preventDefault()
    navigate('/login')
  }
  return (
    <>
       <section className='register-section'>
    <div className='register-wrapper'>
      <div className='register-box'>
        <div className='left-register-section'></div>
        <div className='right-register-section right2'>
           
            <div className='right-register-form-heading-div heading-div2'>
              <h2 className='right-register-heading'>CSR</h2>
              <p className='register-para mt-3'>OTP</p> 
            </div>
            <form>
            <div className='register-form-filed-wrapper'>
              <div className='register-form-filed-box'>
               <div className='otp-div'>
               <p className='otp-para'>Enter Your Four Digit Otp</p>
               <div className='otp-input-wrapper'>
               <input type='text' maxLength={1} className='enter-otp-input'></input>
               <input type='text' maxLength={1} className='enter-otp-input'></input>
               <input type='text' maxLength={1} className='enter-otp-input'></input>
               <input type='text' maxLength={1} className='enter-otp-input'></input>  
               </div>
                
               </div>
                
                <div className='register-form-button-div d-flex justify-content-center'>
                <button className='register-button' onClick={((e)=>navigatefunc(e))}>Submit</button>
              </div>
              
            
             
              
              </div>
            
            </div>
           </form>
        </div>
      </div>
    </div>
   
    </section>
    </>
  )
}

export default Otp
