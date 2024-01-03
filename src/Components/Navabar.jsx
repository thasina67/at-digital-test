import React from 'react'
import logo from "../assets/Logo.png";
function Navabar() {
  return (
    <div class="px-20 py-[20px] bg-violet-700 flex justify-between items-center"> 
    <div>
    <img className="w-[238px] h-[36.11px]" src={logo}  alt='logo'/>
    </div>
           <div>
           <nav class="justify-start items-start gap-7 flex">
        <div class="text-white text-sm font-medium font-['Inter']">SERVICES</div>
        <div class="text-white text-sm font-medium font-['Inter']">ABOUT US</div>
        <div class="text-white text-sm font-medium font-['Inter']">CONTACT US</div>
        <div class="text-white text-sm font-medium font-['Inter']">CAREERS</div>
      </nav>
           </div>
        
     
        
      
  
    </div>
 
  )
}

export default Navabar