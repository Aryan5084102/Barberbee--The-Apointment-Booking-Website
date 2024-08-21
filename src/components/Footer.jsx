import React from 'react'
import { Link } from 'react-router-dom'
import footerImg from '../imgs/Logo.jpeg'

const Footer = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-black  font-bold">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center ">
                <img className='w-48' src={footerImg} alt="Logo" />
                <span className="ml-4 text-lg font-bold text-white">BarberBee</span>
              </div>
              <div>
                <p className="text-sm text-white-100">
                  &copy; Copyright 2024. All right Reserved
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xl font-bold uppercase text-white-100">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-[#c29e75] text-white-100" to='/services'>
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-[#c29e75] text-white-100" to='/pricing'>
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-[#c29e75] text-white-100" to='/gallery'>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xl font-bold uppercase text-white-100">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-[#c29e75] text-white-100" to='/contact'>
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-[#c29e75] text-white-100" to='/contact'>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link className=" text-base font-medium hover:text-[#c29e75] text-white-100" to='#'>
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xl font-bold uppercase text-white-100">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-[#c29e75] text-white-100" to="#">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium hover:text-[#c29e75] text-white-100" to='#'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium hover:text-[#c29e75] text-white-100" to='#'>
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer