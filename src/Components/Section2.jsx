import React from 'react'
import img3 from "../assets/img3.png";
import Button from './Button';
function Section2() {
  return (
    <div className='flex  justify-center items-center gap-4 mt-0'>
          <div>
        <div className=' text-violet-700 font-semibold text-2xl mb-4'>Digital Strategy Consulting</div>
        <div className='mb-4 font-normal'>Your digital strategy should complement the overall marketing strategy <br/>of the company. In online marketing, each component will never work in <br/>isolation and every business needs a different mix. We provide a clear <br/>concept and strategic overview to find the most efficient model for <br/>your business.</div>
        <Button label={"LEARNMORE"}/>
    </div>
    <img src={img3} alt='img3'/>
  


    </div>
  )
}

export default Section2