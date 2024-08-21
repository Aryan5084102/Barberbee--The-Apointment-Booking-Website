import React from "react";
import others1Img from "../imgs/others-1.jpg";
import Aboutimg1 from "../imgs/Aboutimg1.jpg";

const About = () => {
  return (
    <div id="about" >
      <section className="flex items-center justify-center w-full my-20 mt-28">
        <div className="flex items-center justify-center lg:flex-row flex-col gap-20">
          <div className="flex flex-col md:items-center  md:flex-row ">
            <img src={others1Img} alt="" className="rounded m-3" />
            <img src={Aboutimg1} alt="" className="rounded m-3 w-96 " />
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
            <h5 className="text-2xl mt-5 text-[#c29e75] font-semibold font-RobotoCondensed">Our Values</h5>
            <p className="font-medium mt-2">
            <span className='text-[#c29e75] font-bold'>Quality:</span> We use only the best products and techniques to ensure you receive a superior grooming experience. Our skilled barbers stay up-to-date with the latest trends and methods to provide you with the highest level of service.
            </p>
            <p className="font-medium mt-2">
            <span className='text-[#c29e75] font-bold'>Customer Focus:</span> At BarberBee, you’re not just a client; you’re part of our community. We strive to make every visit enjoyable and tailored to your personal style and preferences.
            </p>
            <p className="font-medium mt-2">
            <span className='text-[#c29e75] font-bold'>Comfort:</span> From the moment you walk through our doors, our goal is to make you feel at ease. Our welcoming environment and friendly staff are here to ensure your visit is both relaxing and refreshing.
            </p>
            <p className="font-medium mt-2">
            <span className='text-[#c29e75] font-bold'>Innovations:</span> We’re committed to staying ahead of trends and continuously improving our services. BarberBee combines classic barbering techniques with modern technology to offer a seamless booking experience and exceptional results.
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
    </div>
  );
};

export default About;
