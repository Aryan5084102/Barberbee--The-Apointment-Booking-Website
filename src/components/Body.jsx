import React from 'react'
import others1Img from "../imgs/others-1.jpg";
import others2Img from "../imgs/others-2.jpg";
import beard from "../imgs/beard.png";
import bottle from "../imgs/bottle.png";
import hairDrayer from "../imgs/hair-dryer.png";
import blade from "../imgs/blade.png";
import scissors from "../imgs/scissors.png";
import { Link } from 'react-router-dom';


const Body = () => {
  const handleSubmit = () => {
    alert("Your Message is received, wait for response")
  }
  
  return (
    <div className='mainContainer w-full mt-24'>
      <main>
        <section className="hero-image">
          <div className="w-full h-screen flex items-center justify-center flex-col gap-4 text-white-200">
            <p className="md:text-2xl text-xl tracking-wider font-medium">"Diligent Grooming for the Modern Man"</p>
            <h1 className="md:text-8xl text-5xl font-semibold tracking-wide mb-4">BARBER BEE</h1>
            <p className="md:text-xl text-lg rounded-xl bg-[#c29e75] md:py-2 md:px-6 py-1 px-3 font-medium">
              <Link to='/appointment' > <button> Book Your Appointment</button> </Link></p>
          </div>
        </section>
        <section className="flex items-center justify-center w-full my-20">
          <div className="flex items-center justify-center lg:flex-row flex-col gap-20">
            <div className="flex md:items-center items-start md:flex-row flex-col">
              <img src={others1Img} alt="Error" className="rounded m-3" />
              <img src={others2Img} alt="Error" className="rounded m-3 h-1/2" />
            </div>
            <div className="lg:w-2/5 w-4/6">
              <h3 className="text-4xl text-[#c29e75] font-semibold font-RobotoCondensed">ABOUT US</h3>
              <h5 className="text-2xl mt-5 text-[#c29e75] font-semibold font-RobotoCondensed">Welcome to BarberBee!</h5>
              <p className="font-medium mt-2">
              At BarberBee, we believe that a great haircut is more than just a trim—it's an experience. Our mission is to provide top-notch grooming services in a comfortable and stylish environment where every client leaves looking and feeling their best.
              </p>
              <h5 className="text-2xl mt-5 text-[#c29e75] font-semibold font-RobotoCondensed">Our Story</h5>
              <p className="font-medium mt-2">
              Founded in 2024, BarberBee started with a simple vision: to create a barber shop that blends classic barbering with modern style and convenience. Our founder <span className='text-[#c29e75] font-bold'>Aryan Verma</span> and <span className='text-[#c29e75] font-bold'>Adarsh Yadav</span> brought their passion for grooming and dedication to exceptional service to life with BarberBee. Over the years, we’ve grown into a community hub where great style and personal care come together.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full hero2-image h-[400px] flex justify-center items-center flex-col text-white-200 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="7em" height="7em" viewBox="0 0 24 24" className="fill-current text-white">
            <path fill="#fff" d="M16.372 11.621c1.57 0 2.628 1.092 2.628 2.71C19 15.787 17.784 17 16.137 17C14.333 17 13 15.544 13 13.32c0-5.055 3.686-7.077 6-7.32v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.784-.203Zm-7.999 0c1.568 0 2.627 1.092 2.627 2.71C11 15.787 9.784 17 8.137 17C6.333 17 5 15.544 5 13.32C5 8.265 8.686 6.243 11 6v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.785-.203Z" />
          </svg>
          <h3 className="md:text-2xl text-xl mt-2 font-bold">
        "Crafting Confidence, One Cut at a Time"
        </h3>
          <small className="mt-4 text-2xl font-RobotoCondensed">- Josh Doe -</small>
        </section>
        <section className="flex justify-center items-center flex-col py-20">
          <div className="lg:w-4/6 w-5/6 flex items-center flex-col">
            <h3 className="text-4xl text-[#c29e75] font-semibold font-RobotoCondensed">
              OUR SERVICES
            </h3>
            <p className="font-medium text-center">
              "Your Perfect Look, Our Expert Touch"
            </p>
            <div className="flex justify-center items-center flex-wrap mt-8">
              <div className="card text-center m-3">
                <img src={scissors} alt="" className="mx-auto mb-2" />
                <h4 className="text-2xl font-semibold">Basic Haircut</h4>
                <p className="p-4">
                A traditional haircut tailored to your preferences, leaving you looking sharp and stylish. Includes a complimentary wash and style.
                </p>
              </div>
              <div className="card text-center m-3">
                <img src={blade} alt="" className="mx-auto mb-2" />
                <h4 className="text-2xl font-semibold">Classic Shave</h4>
                <p className="p-4">
                Get your beard styled by our experts. We'll help you achieve the look you desire, whether it's rugged and natural or sleek and sophisticated.
                </p>
              </div>
              <div className="card text-center m-3">
                <img src={hairDrayer} alt="" className="mx-auto mb-2" />
                <h4 className="text-2xl font-semibold">Hair Wash</h4>
                <p className="p-4">
                Refresh your hair with a professional wash and style. Perfect for any occasion, ensuring you leave our shop looking your best.
                </p>
              </div>
              <div className="card text-center m-3">
                <img src={bottle} alt="" className="mx-auto mb-2" />
                <h4 className="text-2xl font-semibold">Hair Repair</h4>
                <p className="p-4">
                Indulge in a luxurious hot towel shave that leaves your skin smooth and refreshed. Perfect for a clean and classic look. </p>
              </div>
              <div className="card text-center m-3">
                <img src={beard} alt="" className="mx-auto mb-2" />
                <h4 className="text-2xl font-semibold">Beard Shave</h4>
                <p className="p-4">
                Maintain a well-groomed beard with our precise trimming and shaping services. From a light trim to a full beard sculpting, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full hero3-image h-[400px] flex justify-center items-center flex-col text-white-200 text-center">
          <h3 className="md:text-2xl text-xl mb-10 font-bold">
          "Elevate your style with our expert barbers. From classic to contemporary, we deliver precise cuts and personalized service in a welcoming environment. Look sharp, feel great."
          </h3>
        </section>
        <section className="flex justify-center items-center flex-col py-20">
          <div className="lg:w-4/6 w-5/6 flex items-center flex-col">
            <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">
              WORKING HOURS
            </h3>
            <p className="font-medium text-center">
              "Your Convenience, Our Priority"
            </p>
            <div className="flex justify-center items-center flex-wrap my-8 md:gap-10 gap-4">
              <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Mon</h3>
                <small>
                  10:00 AM <br />
                  TO <br />
                  8:00 PM
                </small>
              </div>
              <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Tue</h3>
                <small>
                  10:00 AM <br />
                  TO <br />
                  8:00 PM
                </small>
              </div>
              <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Wed</h3>
                <small>
                  10:00 AM <br />
                  TO <br />
                  8:00 PM
                </small>
              </div>
              <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Thr</h3>
                <small>
                  10:00 AM <br />
                  TO <br />
                  8:00 PM
                </small>
              </div>
              <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Fri</h3>
                <small>
                  10:00 AM <br />
                  TO <br />
                  8:00 PM
                </small>
              </div>
              <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Sat</h3>
                <small>
                  10:00 AM <br />
                  TO <br />
                  8:00 PM
                </small>
              </div>
              <div className="H-card text-center shadow-sm">
                <h3 className="font-bold text-2xl uppercase mb-2 text-cod-gray-800">Sun</h3>
                <small>
                  <br />
                  <br />
                  Closed
                </small>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full hero2-image h-[400px] flex justify-center items-center flex-col text-white-200 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="7em" height="7em" viewBox="0 0 24 24" className="fill-current text-white">
            <path fill="#fff" d="M16.372 11.621c1.57 0 2.628 1.092 2.628 2.71C19 15.787 17.784 17 16.137 17C14.333 17 13 15.544 13 13.32c0-5.055 3.686-7.077 6-7.32v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.784-.203Zm-7.999 0c1.568 0 2.627 1.092 2.627 2.71C11 15.787 9.784 17 8.137 17C6.333 17 5 15.544 5 13.32C5 8.265 8.686 6.243 11 6v2.224c-1.569.283-3.333 1.86-3.412 3.6c.079-.04.392-.203.785-.203Z" />
          </svg>
          <h3 className="md:text-2xl text-xl mt-2 font-bold">
          "We're open when you need us, providing quality grooming and styling at convenient hours to fit your busy schedule."
          </h3>
          <small className="mt-4 text-2xl font-RobotoCondensed">- Dane Villas -</small>
        </section>
        <section id="prices" className="flex items-center justify-center flex-col py-20">
          <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">OUR PRICES</h3>
          <p className="font-medium text-center">
            Our Genuine price afford each other to groom your style.
          </p>
          <div className="flex justify-between md:w-3/5 w-4/5 mt-8 lg:flex-row flex-col">
            <div className="mb-4 lg:w-5/12 w-full">
              {/* <h3 className="text-white-100 font-bold text-lg bg-black inline-block py-1 px-2 uppercase mb-2">Hair cut</h3> */}
              <div className="mb-2 pt-4">
                <div className="flex justify-between">
                  <h5 className='font-bold text-xl'>Haircut</h5>
                  <h6 className='font-bold text-lg'>Rs 70</h6>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
              </div>
              <div className="mb-2 pt-4">
                <div className="flex justify-between">
                  <h5 className='font-bold text-xl'>Beard Trim</h5>
                  <h6 className='font-bold text-lg'>Rs 50</h6>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
              </div>
              <div className="mb-2 pt-4">
                <div className="flex justify-between">
                  <h5 className='font-bold text-xl'>Skin Fade </h5>
                  <h6 className='font-bold text-lg'>Rs 120</h6>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
              </div>
              <div className="mb-2 pt-4">
                <div className="flex justify-between">
                  <h5 className='font-bold text-xl'>Head Massage </h5>
                  <h6 className='font-bold text-lg'>Rs 120</h6>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              {/* <h3 className="text-white-100 font-bold text-lg bg-black inline-block py-1 px-2 uppercase mb-2">Shave</h3> */}
              <div className="mb-2 pt-4">
                <div className="flex justify-between">
                  <h5 className='font-bold text-xl'>Body Massage
                  </h5>
                  <h6 className='font-bold text-lg'>Rs 180</h6>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
              </div>
              <div className="mb-2 pt-4">
                <div className="flex justify-between">
                  <h5 className='font-bold text-xl'>Beard Shave
                  </h5>
                  <h6 className='font-bold text-lg'>Rs 60</h6>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
              </div>
              <div className="mb-2 pt-4">
                <div className="flex justify-between">
                  <h5 className='font-bold text-xl'>Beard Styling
                  </h5>
                  <h6 className='font-bold text-lg'>Rs 120</h6>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
              </div>
              <div className="mb-2 pt-4">
                <div className="flex justify-between">
                  <h5 className='font-bold text-xl'>Hair Cutting and Beard Shaving
                  </h5>
                  <h6 className='font-bold text-lg'>RS 220</h6>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="flex justify-center mb-12">
          <div className="md:w-3/5 w-4/5 flex gap-8 lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full">
            <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Saryu%20Hostel,%20IET%20Campus%20,%20Ayodhya+(BarberBee%20-%20The%20Appointment%20Booking%20Website)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
            </div>

            <div className="flex flex-col items-start lg:w-1/2 w-full gap-2">
              <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">Contact us</h3>
              {/* <div className="flex flex-col text-white-100 text-lg font-medium gap-2">
                <a href="mailto:mahfoudmehalli12345@gmail.com">mahfoudmehalli12345@gamil.com</a>
                <a href="tel:+213540254092">+213 540-254-492</a>
              </div> */}
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
      </main>
    </div>
  )
}
export default Body