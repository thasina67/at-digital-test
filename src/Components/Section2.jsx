import React from 'react'
import img3 from "../assets/img3.png";
import Button from './Button';
function Section2() {
  return (
    <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-4  mt-0 mb-20 px-10 text-center md:text-left'>
          <div className='order-2 md:order-1 md:w-1/3'>
        <div className=' text-violet-700 font-semibold text-2xl mb-4'>Digital Strategy Consulting</div>
        <div className='mb-4 font-normal text-sm'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</div>
        <Button label={"LEARNMORE"}/>
    </div>
    <img src={img3} alt='img3' className=" order-1 md:order-2"/>
  


    </div>
  )
}

export default Section2