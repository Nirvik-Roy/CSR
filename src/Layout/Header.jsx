import React from 'react'
import Sidebar from './Sidebar'
import admin from '../Images/admin.png'
import dropdown from '../Images/dropdown.png'
const Header = () => {
  return (
    <>
      <Sidebar/>
       {/* Header content */}
       <div className='universal-wrapper'>
        <div className='universal-container'>
            <div className='header-content'>
                <div className='admin-div'>
                    <p className='admin-para'>Admin</p>
                    <div className='admin-profile-div'>
                        <img src={admin}></img>
                    </div>
                    <p className='admin-hi-para'>Hi</p>
                    <div className='admin-dropdown-div'>
                    <img src={dropdown}></img>
                    </div>
                   
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Header
