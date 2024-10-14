import React, { useState } from 'react'
import '../Register/Register.css'
import mail from '../../Images/Frame.png'
import google from '../../Images/flat-color-icons_google.png'
import apple from '../../Images/ic_round-apple.png'
import facebook from '../../Images/logos_facebook.png'
import lock from '../../Images/Vector.png'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [toggle,settoggle]=useState(false) 
    const navigate =useNavigate()
    const navigatefunc = (e) =>{
    
      e.preventDefault()
      navigate('/country')
    }
  return (
    <>
       <section className='register-section'>
    <div className='register-wrapper'>
      <div className='register-box'>
        <div className='left-register-section'></div>
        <div className='right-register-section'>
           
            <div className='right-register-form-heading-div '>
              <h2 className='right-register-heading'>CSR</h2>
              <p className='register-para'>Login into your account</p>
            </div>
            <form>
            <div className='register-form-filed-wrapper pb-4'>
              <div className='register-form-filed-box'>
              
                <div className='form-filed'>
                  <label className='email-label'>Email address</label>
                  <div className='email-input-div'>
                  <input className='email-input' type='text' placeholder='alex@gmail.com'></input>
                  <div className='mail-image-div'>
                       <img src={mail}></img>
                  </div>
                  </div>

                 
                </div>

                <div className='form-filed'> 
                  <label className='email-label'>Password</label>
                  <div className='email-input-div'>
                  <input className='email-input' type={toggle==true ? 'text' : 'password'} placeholder='Enter Your Password'></input>
                  <div className='mail-image-div' onClick={(()=>settoggle(!toggle))}>
                       <img src={lock} onClick={(()=>settoggle(!toggle))}></img>
                  </div>
                  </div>

                 
                </div>
                <div className='register-form-button-div d-flex justify-content-center'>
                <button className='register-button' onClick={((e)=>navigatefunc(e))}>Login</button>
              </div>
              <p className='register-with-para'>Or Register With</p>
              <div className='register-options-div'>
                <div className='register-btn-1'>
                  <img src={facebook}></img>
                </div>
                <div className='register-btn-1'>
                  <img src={google}></img>
                </div>
                <div className='register-btn-1'>
                  <img src={apple}></img>
                </div>
              </div>
              <div className='have-an-account-div'>
              <p className='have-an-account-para'>Have an account?</p>
              <span className='login-span'>Login</span>
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

export default Login
