import React from 'react';
import img2 from "../assets/img2.png";
import Button from './Button';

function Section1() {
  return (
    <div className='md:flex md:justify-center md:items-center md:gap-4 mt-0 px-10 text-center md:text-left '>
      <img src={img2} alt='img2' />
      <div className='md:w-1/3'>
        <div className='text-violet-700 font-semibold text-2xl mb-4'>
          Web & Mobile App Development
        </div>
        <div className='mb-4 font-normal text-sm'>
          Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
        </div>
        <Button label={"LEARN MORE"} />
      </div>
    </div>
  );
}

export default Section1;