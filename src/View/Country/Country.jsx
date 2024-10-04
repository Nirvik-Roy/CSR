import React from 'react'
import './Country.css'
import magnify from '../../Images/Rectangle 4290.png'
import flag from '../../Images/Rectangle 27.png'
import flag2 from '../../Images/Rectangle 27 (2).png'
import flag3 from '../../Images/Rectangle 27 (3).png'
import flag4 from '../../Images/Rectangle 27 (4).png'
import flag5 from '../../Images/Rectangle 27 (1).png'
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
        flag: flag,
    },
    {
        name:'Pakistan',
        flag: flag5,
    },
    {
        name:'Bangladesh',
        flag: flag2,
    },
    {
        name:'Portugal',
        flag: flag3,
    },
    {
        name:'Brazil',
        flag: flag4,
    },
    { 
        name: 'Argentina',
        flag: flag,
    },
    {
        name:'Croatia',
        flag: flag5,
    },
    {
        name:'Iran',
        flag: flag2,
    },
    {
        name:'Costarica',
        flag: flag3,
    },
    {
        name:'Norway ',
        flag: flag4,
    },
    { 
        name: 'Argentina',
        flag: flag,
    },
    {
        name:'Croatia',
        flag: flag5,
    },
    {
        name:'Iran',
        flag: flag2,
    },
    {
        name:'Costarica',
        flag: flag3,
    },
    {
        name:'Norway ',
        flag: flag4,
    },
    { 
        name: 'Argentina',
        flag: flag,
    },
    {
        name:'Croatia',
        flag: flag5,
    },
    {
        name:'Iran',
        flag: flag2,
    },
    {
        name:'Costarica',
        flag: flag3,
    },
    {
        name:'Norway ',
        flag: flag4,
    },
    { 
        name: 'Argentina',
        flag: flag,
    },
    {
        name:'Croatia',
        flag: flag5,
    },
    {
        name:'Iran',
        flag: flag2,
    },
    {
        name:'Costarica',
        flag: flag3,
    },
    {
        name:'Norway ',
        flag: flag4,
    },
    
]
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
                <div key={index} className='country-box'>
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
