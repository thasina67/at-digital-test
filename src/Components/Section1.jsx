import React from 'react'
import img2 from "../assets/img2.png";
import Button from './Button';
function Section1() {
  return (
    <div className='flex  justify-center items-center gap-4 mt-0'>
    <img src={img2} alt='img2'/>
    <div>
        <div className=' text-violet-700 font-semibold text-2xl mb-4'>Web & Mobile App Development</div>
        <div className='mb-4 font-normal'> Your web and mobile Apps are pieces of the puzzle to grow your <br/>business. We use frameworks which tailor content and engagement<br/> methods to respond to different intents shown by your potential <br/>customers who interact with your business online.</div>
        <Button label={"LEARNMORE"}/>
    </div>


    </div>
  )
}

export default Section1