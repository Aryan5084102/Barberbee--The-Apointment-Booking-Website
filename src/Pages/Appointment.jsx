import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const Appointment = () => {
  return (
    <>
      <div className="flex  flex-col mt-28">
        <h3 className="text-4xl text-center text-gold font-semibold font-RobotoCondensed">
          Choose Your Salon Here
        </h3>
        <p className="font-medium text-center mt-3">  
          "Select Your Salons where you want to take Services"
        </p>
      </div>
      <div className='flex flex-row w-full gap-10 justify-center my-12 '>
        <div className="w-[300px] rounded-md border">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-Ilw6VFiBl1os7wIxC9ljvXJXfIk5vwIgg&s"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md  object-cover"
          />
          <div className="p-4 flex justify-center flex-col">
            <h1 className="inline-flex items-center text-lg font-semibold">
              Kallu Mens Salon &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-xl text-gray-600">
              Jogitara Mod, Naka Bypass, Faizabad, 224001
            </p>
            <Link to='/appointment/kallu'>
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-[#c29e75] px-2 py-1.5 text-xl font-semibold text-white-200 shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Select
            </button>
            </Link>
          </div>
        </div>
        <div className="w-[300px] rounded-md border">
          <img
            src="https://images.jdmagicbox.com/comp/rajkot/n4/0281px281.x281.151223130055.a6n4/catalogue/hi-tech-family-salon-nirmala-road-rajkot-beauty-parlours-for-hair-straightening-9a6uluyafc-250.jpg"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4 flex justify-center flex-col">
            <h1 className="inline-flex items-center text-lg font-semibold">
              Hi-Tech Mens Salon &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-xl text-gray-600">
              Near Sultanpur Bypass, Faizabad, 224001
            </p>
            <Link to='/appointment/hitech'>
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-[#c29e75] px-2 py-1.5 text-xl font-semibold text-white-200 shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Select
            </button>
            </Link>
          </div>
        </div>
        <div className="w-[300px] rounded-md border">
          <img
            src="https://shablalocal.in/wp-content/uploads/2023/04/11-.1.png"
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-cover"
          />
          <div className="p-4 flex justify-center flex-col">
            <h1 className="inline-flex items-center text-lg font-semibold">
              Mansoon Salon &nbsp; <ArrowUpRight className="h-4 w-4" />
            </h1>
            <p className="mt-3 text-xl text-gray-600">
              Behind V-Mart Building, Naka Chungi, Faizabad, 224001
            </p>
            <Link to='/appointment/mansoon'>
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-[#c29e75] px-2 py-1.5 text-xl font-semibold text-white-200 shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Select
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appointment