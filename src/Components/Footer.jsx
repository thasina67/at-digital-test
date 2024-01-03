import React from 'react'
import logo from "../assets/Logo.png";
function Footer() {
  return (
<div className=' bg-violet-700 p-6 text-white'>
    <div className="top flex  justify-between items-center mb-10">
        <div className="left">
        <img className="w-[238px] h-[36.11px]" src={logo}  alt='logo'/>
    <div className=' font-medium mt-4'> 
    Your goal is our target. Not anything in between. We use <br/>online marketing platforms and tools to achieve single<br/> objective - your business results.
    </div>
        </div>
   <div className="right flex justify-center gap-16 ">
     <div>
        <div className=' font-bold'>Our Technologies</div>
        <div>ReactJS</div>
        <div>Gatsby</div>
        <div>NextJS</div>
        <div>NodeJS</div>
        <div>GraphQL</div>
        <div>Laravel</div>
     </div>
     <div>
        <div className=' font-bold'>Our Services</div>
        <div>Social Media Marketing</div>
        <div>Web & Mobile AppDevelopment</div>
        <div>Data & Analytics</div>
        <div>Google Marketing Solutions</div>
        <div>Search Engine Optimization</div>
        
     </div>
   </div>
    </div>
    <div className=' bg-white w-3/4 h-1 rounded-lg  mx-auto my-4'>

    </div>
    <div className="bottom text-center">
     <div>Privacy Policy  |  Terms & Conditions </div>
    </div>
</div>
  )
}

export default Footer