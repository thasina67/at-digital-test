import React from 'react'
import hero from "../assets/img1.png";
import Button from './Button';
function Hero() {
  return (
    <div className='min-h-screen md:relative static'>

<img src={hero} className="w-full h-full object-cover " alt='hero'/>
<div class=" bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 lg:absolute lg:bottom-16 lg:left-20 p-6">
    <div className=' text-white font-semibold  text-4xl'>
    We Crush Your <br/>Competitors, Goals, And 
<br/>Sales Records - Without 
<br/>The B.S.
    </div>
    <div className=' mt-5'>
    <Button label={"GET FREE CONSALUTATION"}/>
    </div>

</div>



    </div>
  )
}

export default Hero