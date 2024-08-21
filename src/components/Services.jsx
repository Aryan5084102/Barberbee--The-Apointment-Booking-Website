import React from "react";
import beard from "../imgs/beard.png";
import bottle from "../imgs/bottle.png";
import hairDrayer from "../imgs/hair-dryer.png";
import blade from "../imgs/blade.png";
import scissors from "../imgs/scissors.png";

const Services = () => {
  return (
    <div id="services">
      <section
        className="flex justify-center items-center flex-col py-20 mt-12"
      >
        <div className="lg:w-4/6 w-5/6 flex items-center flex-col">
          <h3 className="text-4xl text-gold font-semibold font-RobotoCondensed">
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
    </div>
  );
};

export default Services;
