import React from 'react'
import { useNavigate } from 'react-router-dom'

function EmptyCart() {
  const navigate = useNavigate()
  return (
    <div className='w-full min-h-96 my-28 flex flex-col gap-10 justify-center items-center '>
      <img className='w-[400px] h-[400px]' src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="EmptyCartImg" />
    </div>  
  )
}

export default EmptyCart