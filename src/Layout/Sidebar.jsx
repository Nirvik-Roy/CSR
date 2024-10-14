import React, { useState } from 'react'
import indianflag from '../Images/Indian Flag.png'
import general from '../Images/general.png'
import { NavLink } from 'react-router-dom'
import screen from '../Images/screen.png'
import logo from '../Images/basicicon.png'
import ai from '../Images/ai.png'
import library from '../Images/library.png'
import donation from '../Images/donation.png'
import rewards from '../Images/rewards.png'
import appoinment from '../Images/appointment.png'
import payment from '../Images/payment.png'
import subscribe from '../Images/subscribe.png'
import deploy from '../Images/deployment.png'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../Stores/Slices/Sidebarslices'
const Sidebar = () => {
    const [show,setshow] = useState(false)
    const dispatch = useDispatch()
    const showsidebar = () =>{
      setshow(!show)
      dispatch(toggleSidebar())
    }
  return (
    <>
      <div className= {show == true ? 'sidebar-main2' : 'sidebar-main' }>
        <div className='sidebar-close-icon'>
        <i class="fa-solid fa-caret-left" onClick={(()=>showsidebar())}></i>
        </div>


        <div className={show == true ? 'display-none' : 'sidebar-logo-div' }>
            <h2 className='sidebar-logo'>CSR</h2>
            <div className='sidebar-logo-image'>
                <img src={indianflag}></img>
            </div>
        </div>
   

   <div className={show == true ? 'display-none' : 'sidebar-icons-wrapper'}>
    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={general}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/generalinfo'}>General Info</NavLink>    
    </div>

    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={screen}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/splashscreen'}>Splash Screen</NavLink>    
    </div>

    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={logo}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}>Welcome Screen</NavLink>    
    </div>
   

    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={ai}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}> My CSR AI (Upload Documents)</NavLink>    
    </div>


    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={library}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}> onation</NavLink>    
    </div>


    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={donation}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}> Donation</NavLink>    
    </div>

    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={rewards}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}> Loyalty/Rewards</NavLink>    
    </div>

    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={appoinment}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}> Appointment</NavLink>    
    </div>

    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={payment}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}>Payment Gateway</NavLink>    
    </div>

    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={subscribe}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}>Subscription</NavLink>    
    </div>


    <div className='sidebar-icon-div'>
    <div className='sidebar-icon-img-div'>
    <img src={deploy}></img>
    </div>
      <NavLink className='sidebar-icon-para' to={'/'}>Deployment</NavLink>    
    </div>


   </div>


      </div>
    </>
  )
}

export default Sidebar
