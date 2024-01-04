import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [menu, setMenu] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 375; 
      if (!isSmallScreen) {
        setMenu(true);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return (
    <div className="lg:px-20 py-[20px] bg-violet-700 flex lg:justify-between items-center justify-evenly">
      <div>
        <img className="w-[238px] h-[36.11px]" src={logo} alt='logo' />
      </div>
      <div className='md:hidden text-white'>
        {menu ? <button onClick={() => setMenu(!menu)}><MenuIcon /></button> : <button onClick={() => setMenu(!menu)}><CloseIcon /></button>}
      </div>
      <div className={menu? 'hidden md:flex' : 'block absolute bg-white min-h-[40vh] left-0 top-[12%] w-full'}>
        <nav className={menu ?"justify-start items-start gap-7 flex":" flex flex-col justify-center items-center gap-11 mt-2 mb-2"}>
          <div className="md:text-white text-violet-700 text-sm font-medium hover:font-extrabold hover:text-black">SERVICES</div>
          <div className="md:text-white text-violet-700 text-sm font-medium hover:font-extrabold hover:text-black">ABOUT US</div>
          <div className="md:text-white text-violet-700 text-sm font-medium hover:font-extrabold hover:text-black">CONTACT US</div>
          <div className="md:text-white text-violet-700 text-sm font-medium hover:font-extrabold hover:text-black">CAREERS</div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;