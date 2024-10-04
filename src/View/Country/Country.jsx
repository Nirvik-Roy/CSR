import React from 'react'
import './Country.css'
import magnify from '../../Images/Rectangle 4290.png'
import flag from '../../Images/Rectangle 27.png'
import flag2 from '../../Images/Rectangle 27 (2).png'
import flag3 from '../../Images/Rectangle 27 (3).png'
import flag4 from '../../Images/Rectangle 27 (4).png'
import flag5 from '../../Images/Rectangle 27 (1).png'
import italy from '../../Images/Italy.png'
import pakistan from '../../Images/pakistan.png'
import bangladesh from '../../Images/bangladesh.png'
import portugal from '../../Images/portugal.png'
import brazil from '../../Images/brazil.png'
import argentina from '../../Images/Argentina.png'
import croatia from '../../Images/Croatia.png'
import iran from '../../Images/Iran.png'
import costraica from '../../Images/costarica.png'
import norway from '../../Images/Norway.png'
import { useNavigate } from 'react-router-dom'
const Country = () => {
    const countries = [
        { 
        name: 'India',
        flag: flag,
    },
    {
        name:'Australia',
        flag: flag5,
    },
    {
        name:'England',
        flag: flag2,
    },
    {
        name:'Spain',
        flag: flag3,
    },
    {
        name:'France',
        flag: flag4,
    },
    { 
        name: 'Italy',
        flag: italy,
    },
    {
        name:'Pakistan',
        flag: pakistan,
    },
    {
        name:'Bangladesh',
        flag: bangladesh,
    },
    {
        name:'Portugal',
        flag: portugal,
    },
    {
        name:'Brazil',
        flag: brazil,
    },
    { 
        name: 'Argentina',
        flag: argentina,
    },
    {
        name:'Croatia',
        flag: croatia,
    },
    {
        name:'Iran',
        flag: iran,
    },
    {
        name:'Costarica',
        flag: costraica,
    },
    {
        name:'Norway ',
        flag: norway,
    },
    { 
        name: 'Argentina',
        flag: argentina,
    },
    {
        name:'Croatia',
        flag: croatia,
    },
    {
        name:'Iran',
        flag: iran,
    },
    {
        name:'Costarica',
        flag: costraica,
    },
    {
        name:'Norway ',
        flag: norway,
    },
    { 
        name: 'Argentina',
        flag: argentina,
    },
    {
        name:'Croatia',
        flag: croatia,
    },
    {
        name:'Iran',
        flag: iran,
    },
    {
        name:'Costarica',
        flag: costraica,
    },
    {
        name:'Norway ',
        flag: norway,
    },
    { 
        name: 'Argentina',
        flag: argentina,
    },
    {
        name:'Croatia',
        flag: croatia,
    },
    {
        name:'Iran',
        flag: iran,
    },
    {
        name:'Costarica',
        flag: costraica,
    },
    {
        name:'Norway ',
        flag: norway,
    },
   
    
]
const navigate = useNavigate()

const navigatefunc = () => {
    navigate('/generalinfo')
    window.scrollTo({top:0,behavior:'instant'})
}
  return (
    <section className='country-section'>
      <div className='country-wrapper'>
      <div className='country-div-main'>
      <div>
        <p className='select-country-para'>Select Your Country</p>
        <div className='countries-display-wrapper'>
        <div className='search-input-div'>
            <input className='search-div' placeholder={'Search Country'} type='text'/>
            <img src={magnify} alt='magnify' />
            </div>
            <div className='countries-box-wrapper'>
              {countries.map((ele,index)=>{
                return <>
                <div onClick={(()=>navigatefunc())} key={index} className='country-box'>
                    <p key={index} className='country-name'>{ele.name}</p>
                    <div className='country-flag-div'>
                    <img key={index} src={ele.flag}></img>
                    </div>
                    
                </div>
                </>
              })}
               


            </div>
        </div>
     </div>
        </div>
      </div>
    </section>
  )
}

export default Country
