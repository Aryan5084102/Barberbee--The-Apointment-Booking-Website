import React, {useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import CartContext from '../Utils/CartContext';
import EmptyCart from './EmptyCart';
import Logo from '../imgs/Logo.jpeg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OverallServices = () => {

  const {products, cart, removeFromCart} = useContext(CartContext);

  const navigate = useNavigate()

  const [filteredData, setFilteredData] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(" ")
  const [advancePayment, setAdvancePayment] = useState("")


    const removeFromCartButtonHandler = () => {
      removeFromCart(products.id);
    }

    const filterData = () =>{
      const filter = products[0].items.filter(item => cart.includes(item.id))
      setFilteredData(filter)
      console.log(filteredData);
    }

    useEffect(() =>{
      filterData()
    },[cart])
    
    useEffect(() => {
      const total = filteredData.reduce((accumulator, item) => {
        return accumulator + parseFloat(item.originalPrice.replace('₹ ', ''));
      }, 0);
      
      setTotalPrice(total);

      const totalDiscount = filteredData.reduce((accumulator, item) => {
        const originalPrice = parseFloat(item.originalPrice.replace('₹ ', ''));
        const price = parseFloat(item.price.replace('₹ ', ''));
        return accumulator + (originalPrice - price);
      }, 0);
      setDiscountPrice(totalDiscount);

      const advancePayment = filteredData.reduce((accumulator, item) => {
        const originalPrice = (item.originalPrice.replace('₹ ', ''));
        let advance;
        if (totalPrice >= 0) {
          advance = 100;
        } else if (totalPrice > 100) {
          advance = 200;
        } else {
          advance = 400;
        }
        return advance;
      }, 0);
      setAdvancePayment(advancePayment);

    }, [filteredData]);


  const buyNow = async () => {
    if (name === "" || email === "" || time === "" || date === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
    const addressInfo = {
      name,
      email,
      date,
      time,
      address,
      pincode,
      phoneNumber,
      additionalInfo,
    }
    var options = {
      key: "rzp_test_DHRXCwOsSU6EQ7",
      key_secret: "TzoSK7XqA91akBb5D98L6CaA",
      amount: (((totalPrice - discountPrice) + advancePayment) * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "BarberBee",
      description: "for testing purpose",
      image: {Logo},
      prefill: {
        name: "Aryan Verma",
        email: "aryanverma5084102@gmail.com",
        contact: "8756119548",  
      },
      handler: function (response) {
        toast.success('Payment Successful');
        console.log("success", )
        navigate('/paymentSuccess');
        const paymentId = response.razorpay_payment_id;
        // store in firebase 
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId
        }
        try {
          const result = addDoc(collection(fireDB, "orders"), orderInfo);
        } catch (error) {
          console.log(error);
        }
      },
  
      theme: {
        color: "#3399cc"
      }
    };
      var pay = new window.Razorpay(options);
      pay.open();
  }

    return (
      filteredData.length !== 0 ?

      ( <div className="mx-auto max-w-7xl px-2 lg:px-0 my-28">
         <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
           <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Services Cart
           </h1>
           <form className="mt-4 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
             <section aria-labelledby="cart-heading" className="rounded-lg bg-slate-100 lg:col-span-8">
               <ul role="list" className="divide-y divide-gray-200">
                 {filteredData?.map((product) => (
                   <div key={product.id} className="">
                     <li className="flex py-6 sm:py-6 ">
                       <div className="flex-shrink-0">
                         <img
                           src={product.imageSrc}
                           alt={product.name}
                           className="sm:h-38 px-2 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                         />
                       </div>
                       <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                         <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                           <div>
                             <div className="flex justify-between">
                               <h3 className="text-xl">
                                 {product.name}
                               </h3>
                             </div>
                             <div className="mt-1 flex items-end">
                               <p className="text-2xl font-medium text-[#c29e75]">
                                 {(product.price)}
                               </p> &nbsp;
                               <p className="text-xs font-medium text-gray-800 line-through">
                                 {product.originalPrice}
                               </p>
                               &nbsp;&nbsp;
                               <p className="text-sm font-medium text-[#c29e75]">
                                 {product.discount}</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </li>
                     <div className="mb-2 flex">
                       <div className="ml-6 flex text-sm">
                         <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                           {/* <Trash size={12} className="text-red-500" /> */}
                           <span onClick={() => removeFromCartButtonHandler(product.id)} className="text-xs font-medium text-red-500">Remove</span>
                         </button>
                       </div>
                     </div>
                   </div>
                 ))}
               </ul>
             </section>
             {/* Order summary */}
             <section
               aria-labelledby="summary-heading"
               className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
             >
               <h2
                 id="summary-heading"
                 className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
               >
                 Price Details
               </h2>
               <div>
                 <dl className=" space-y-1 px-2 py-4">
                   <div className="flex items-center justify-between">
                     <dt className="text-sm text-gray-800">Total Price</dt>
                     <dd className="text-sm font-medium text-gray-900">₹ {(totalPrice)}</dd>
                   </div>
                   <div className="flex items-center justify-between pt-4">
                     <dt className="flex items-center text-sm text-gray-800">
                       <span> Total Discount</span>
                     </dt>
                     <dd className="text-sm font-medium text-[#c29e75]">- ₹ {discountPrice}</dd>
                   </div>
                   <div className="flex items-center justify-between py-4">
                     <dt className="flex text-sm text-gray-800">
                       <span>Advance Payment(<small>100% refund</small>)</span>
                     </dt>
                     <dd className="text-sm font-medium text-[#c29e75]">₹ {advancePayment}</dd>
                   </div>
                   <div className="flex items-center justify-between border-y border-dashed py-4 ">
                     <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                     <dd className="text-base font-medium text-gray-900">₹ {(totalPrice - discountPrice) + advancePayment}</dd>
                   </div>
                 </dl>
                 <div className="px-2 pb-4 font-medium text-[#c29e75]">
                   You will save ₹{discountPrice} on this order
                 </div>
               </div>
               <Modal 
                 name={name}
                 email={email}
                 date={date}
                 time={time}
                 address={address}
                 pincode={pincode}
                 phoneNumber={phoneNumber}
                 additionalInfo={additionalInfo}
                 setName={setName}
                 setEmail={setEmail}
                 setDate={setDate}
                 setTime={setTime}
                 setAddress={setAddress}
                 setPincode={setPincode}
                 setPhoneNumber={setPhoneNumber}
                 setAdditionalInfo={setAdditionalInfo}
                 buyNow={buyNow}
               />
             </section>
           </form>
         </div>
       </div>)  :
       
      ( <EmptyCart />)
    )
}

export default OverallServices