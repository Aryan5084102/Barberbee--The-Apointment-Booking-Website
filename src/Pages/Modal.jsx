import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function Modal({ name, email, address, pincode, setEmail, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow, date, time, setDate, setTime, additionalInfo, setAdditionalInfo }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    
    return (
    <>
            <div className="text-center rounded-lg text-white font-bold">
                <button
                    type="button"
                    onClick={openModal}
                    className="w-full  bg-[#c29e75] py-2 text-center rounded-lg text-white font-bold"
                >
                    Book Now
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2  text-left align-middle shadow-xl transition-all bg-gray-50">

                                    <section className="">
                                        <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                                            {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                                                Flowbite
                                            </a> */}
                                            <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                                    <form className="space-y-4 md:space-y-6" action="#" >
                                                        <div>
                                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Name</label>
                                                            <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Enter Your Email</label>
                                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="address" className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Address</label>
                                                            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="address" id="address" className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Choose Your Date</label>
                                                            <input value={date} type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)} className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900">Choose Your Time</label>
                                                            <input value={time} type="time" id="time" name="time" onChange={(e) => setTime(e.target.value)} className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Enter Pincode</label>
                                                            <input value={pincode} onChange={(e) => setPincode(e.target.value)} type="text" name="pincode" id="pincode" className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Enter Mobile Number</label>
                                                            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="mobileNumber" id="mobileNumber" className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="additionalInfo" className="block mb-2 text-sm font-medium text-gray-900">Additional Information</label>
                                                            <textarea value={additionalInfo} id="additionalInfo" name="additionalInfo" rows="4" onChange={(e) => setAdditionalInfo(e.target.value)} className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" placeholder="Any additional info" />
                                                        </div>
                                                    </form>
                                                    <button onClick={() => { buyNow(); closeModal() }} type="button" className="focus:outline-none w-full text-white bg-[#c29e75] hover:bg-[#c29e75]  outline-0 font-medium rounded-lg text-sm px-5 py-2.5 ">Pay Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            </>
            )
}

            export default Modal







// import React, { useState, Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';

// function Modal({ buyNow }) {
//     const [isOpen, setIsOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         address: '',
//         pincode: '',
//         phoneNumber: '',
//         date: '',
//         time: '',
//         additionalInfo: '',
//     });

//     const closeModal = () => {
//         setIsOpen(false);
//     };

//     const openModal = () => {
//         setIsOpen(true);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevent default form submission

//         fetch('/send-sms', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//         .then(response => response.json())
//         .then(result => {
//             alert('Appointment booked successfully!');
//             setFormData({
//                 name: '',
//                 email: '',
//                 address: '',
//                 pincode: '',
//                 phoneNumber: '',
//                 date: '',
//                 time: '',
//                 additionalInfo: '',
//             }); // Reset form fields
//             closeModal();
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Failed to book appointment.');
//         });
//     };

//     return (
//         <>
//             <div className="text-center rounded-lg text-white font-bold">
//                 <button
//                     type="button"
//                     onClick={openModal}
//                     className="w-full bg-[#0B7A74] py-2 text-center rounded-lg text-white font-bold"
//                 >
//                     Buy Now
//                 </button>
//             </div>

//             <Transition appear show={isOpen} as={Fragment}>
//                 <Dialog as="div" className="relative z-10" onClose={closeModal}>
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in duration-200"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className="fixed inset-0 bg-black bg-opacity-25" />
//                     </Transition.Child>

//                     <div className="fixed inset-0 overflow-y-auto">
//                         <div className="flex min-h-full items-center justify-center p-4 text-center">
//                             <Transition.Child
//                                 as={Fragment}
//                                 enter="ease-out duration-300"
//                                 enterFrom="opacity-0 scale-95"
//                                 enterTo="opacity-100 scale-100"
//                                 leave="ease-in duration-200"
//                                 leaveFrom="opacity-100 scale-100"
//                                 leaveTo="opacity-0 scale-95"
//                             >
//                                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all bg-gray-50">
//                                     <section className="">
//                                         <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
//                                             <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
//                                                 <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                                                     <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//                                                         <div>
//                                                             <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Name</label>
//                                                             <input value={formData.name} onChange={handleInputChange} type="text" name="name" id="name" className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
//                                                         </div>
//                                                         <div>
//                                                             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Enter Your Email</label>
//                                                             <input value={formData.email} onChange={handleInputChange} type="email" name="email" id="email" className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
//                                                         </div>
//                                                         <div>
//                                                             <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Address</label>
//                                                             <input value={formData.address} onChange={handleInputChange} type="text" name="address" id="address" className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
//                                                         </div>
//                                                         <div>
//                                                             <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Enter Pincode</label>
//                                                             <input value={formData.pincode} onChange={handleInputChange} type="text" name="pincode" id="pincode" className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
//                                                         </div>
//                                                         <div>
//                                                             <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Enter Mobile Number</label>
//                                                             <input value={formData.phoneNumber} onChange={handleInputChange} type="text" name="phoneNumber" id="phoneNumber" className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
//                                                         </div>
//                                                         <div>
//                                                             <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Choose Your Date</label>
//                                                             <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
//                                                         </div>
//                                                         <div>
//                                                             <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900">Choose Your Time</label>
//                                                             <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" required />
//                                                         </div>
//                                                         <div>
//                                                             <label htmlFor="additionalInfo" className="block mb-2 text-sm font-medium text-gray-900">Additional Information</label>
//                                                             <textarea id="additionalInfo" name="additionalInfo" rows="4" value={formData.additionalInfo} onChange={handleInputChange} className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100" placeholder="Any additional info" />
//                                                         </div>
//                                                         <button type="submit" className="focus:outline-none w-full text-white bg-[#0B7A74] hover:bg-[#0B7A74] outline-0 font-medium rounded-lg text-sm px-5 py-2.5">Pay Now</button>
//                                                     </form>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </section>
//                                 </Dialog.Panel>
//                             </Transition.Child>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition>
//         </>
//     );
// }

// export default Modal;
