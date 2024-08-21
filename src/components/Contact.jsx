import React from 'react'

const Contact = () => {
  const handleSubmit = () => {
    alert("Your Message is received, wait for response")
  }
  return (
    <section id="contact" className="flex justify-center mb-12 mt-32">
    <div className="md:w-3/5 w-4/5 flex gap-8 lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full">
      <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Saryu%20Hostel,%20IET%20Campus%20,%20Ayodhya+(BarberBee%20-%20The%20Appointment%20Booking%20Website)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
      </div>

      <div className="flex flex-col items-start lg:w-1/2 w-full gap-2">
        <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">Contact us</h3>
        <div className="flex flex-col w-full gap-4">
          <input className='bg-transparent py-1 border-b-[1px] pl-1 text-black outline-none' type="text" placeholder="Enter your name" />
          <input className='bg-transparent py-1 border-b-[1px] pl-1 text-black outline-none' type="phone" placeholder="Phone" />
          <input className='bg-transparent py-1 border-b-[1px] pl-1 text-black outline-none' type="email" name="email" id="" placeholder="Enter Email" />
          <textarea className='bg-transparent py-1 border-b-[1px] pl-1 text-black outline-none' name="" placeholder="Message"></textarea>
        </div>
        <button onClick={handleSubmit} type="submit" className="text-white-100 uppercase py-1 px-4 font-semibold text-lg bg-black">Submit</button>
      </div>
    </div>
  </section>
  )
}

export default Contact