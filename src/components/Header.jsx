import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { VscClose } from 'react-icons/vsc';
import logo from '../imgs/Logo.jpeg'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Badge from '@mui/material/Badge';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  return (
    <header className={`w-full fixed z-10 top-0 left-0  transition-all bg-[#c29e75]  duration-300 ${navBg ? '' : 'bg-[#c29e75]'}`}>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex items-center">
          <img src={logo} alt="Barber Shop Logo" className="w-16 h-16 background-trans mr-2" />
          <h1 className="text-3xl font-bold text-white">BarberBee</h1>
        </div>
        <div className="text-3xl absolute right-8 top-9  cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          {open ? <VscClose className="text-white-100 text-2xl" /> : <RxHamburgerMenu className="text-white-100 text-2xl" />}
        </div>
        <ul className={`md:flex md:gap-8 md:items-center  md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-30 bg-black text-white-50' : 'top-[-490px]'} md:space-y-0 space-y-6 font-bold text-white text-xl`}>
          <li><Link to="/" className="hover:text-white-50  transition-colors duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-white-50 transition-colors duration-300">About</Link></li>
          <li><Link to="/services" className="hover:text-white-50 transition-colors duration-300">Services</Link></li>
          <li><Link to="/gallery" className="hover:text-white-50 transition-colors duration-300">Gallery</Link></li>
          {/* <li>
            <Link to='./cart' className='flex items-center w-14 text-xl hover:text-white-100 justify-between '>
              <div className='font-bold mr-1 '>Cart</div>
              <div className='text-[#040606] hover:text-white-100 mr-1'>
                <Badge badgeContent='1' color="warning">
                  <FaShoppingCart />
                </Badge>
              </div>
            </Link>
          </li> */}
          <li><Link to="/contact" className="hover:text-white-50 transition-colors duration-300">Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header