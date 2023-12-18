import React, { useEffect } from 'react'
import './landing.css'
import logo from '../../assets/Screenshot 2023-11-07 145007.png'
import back from '../../assets/marten-bjork-rH8O0FHFpfw-unsplash.jpg'
import { TypeAnimation  } from 'react-type-animation'



const Landing = () => {


  return (
<div className="landing">
  <img src={back} className='back' alt="" />
    <div  className="container">
    <img   data-aos="fade-up"
     data-aos-duration="2000"
     data-aos-anchor-placement="top-bottom" src={logo} alt="" />
         <TypeAnimation 
      sequence={[
        2500,
        'Your Way To Success',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        'Your Way To Development',
      
      ]}
      wrapper="span"
      speed={150}
      style={{ fontSize: '2em', display: 'inline-block' , color:'white'}}
      repeat={Infinity}
    />
    </div>

    
</div>
  )
}

export default Landing
