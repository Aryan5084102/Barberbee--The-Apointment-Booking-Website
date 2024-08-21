import React from 'react'
import img1 from '../imgs/Gallery img1.jpg'
import img2 from '../imgs/Gallery img2.webp'
import img3 from '../imgs/Gallery img3.jpg'
import img4 from '../imgs/Gallery img4.jpg'
import img5 from '../imgs/Gallery img5.webp'
import img6 from '../imgs/Gallery img6.avif'
import img7 from '../imgs/Gallery img7.webp'
import img8 from '../imgs/Gallery img8.jpg'
import img9 from '../imgs/Gallery img9.webp'


const Gallery = () => {
  return (
    <>
    <div className="flex  flex-col mt-28">
        <h3 className="text-4xl text-center text-gold font-semibold font-RobotoCondensed">
          Gallery
        </h3>
        <p className="font-medium text-center mt-3">  
          "See Your Styles where you can copy their styles"
        </p>
      </div>
      <div className='flex flex-wrap w-full gap-10 justify-center my-12 '>
        <div className="w-[400px] rounded-md border">
          <img
            src={img1}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
        <div className="w-[400px] rounded-md border">
          <img
           src={img2}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
        <div className="w-[400px] rounded-md border">
          <img
           src={img3}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
        <div className="w-[400px] rounded-md border">
          <img
            src={img4}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
        <div className="w-[400px] rounded-md border">
          <img
            src={img5}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
        <div className="w-[400px] rounded-md border">
          <img
            src={img6}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
        <div className="w-[400px] rounded-md border">
          <img
           src={img7}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
        <div className="w-[400px] rounded-md border">
          <img
           src={img8}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
        <div className="w-[400px] rounded-md border">
          <img
            src={img9}
            alt="Laptop"
            className="h-[300px] w-full rounded-md object-cover"
          />
        </div>
      </div>
      </>
  )
}

export default Gallery