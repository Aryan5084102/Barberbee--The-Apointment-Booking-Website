import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../Utils/CartContext';

const Kallu = () => {
    const { cart, addToCart, products } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddClick = (id) => {
        addToCart(id);
    };

    const handleBuyClick = (id) => {
        addToCart(id);
        navigate('/appointment/payment');
    };

    return (
        <div className="mx-auto max-w-7xl px-2 lg:px-0 mt-28">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Choose Services from <span className="text-[#c29e75]">"Hitech Mens Salon"</span>
                </h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-6">
                        <ul role="list" className="divide-y divide-gray-200">
                            {products[0].items.slice(5, 11).map((product) => (
                                <li key={product.id} className="flex flex-col md:flex-row py-6 px-5 border mb-4 rounded-lg bg-gray-100 shadow-md">
                                    <div className="flex-shrink-0 mx-auto md:mx-0">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.name}
                                            className="h-32 w-28 rounded-md object-cover"
                                        />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-black">
                                                <a href={product.href}>{product.name}</a>
                                            </h3>
                                            <div className="mt-2 flex items-center">
                                                <p className="text-gray-500">{product.color}</p>
                                                {product.size && (
                                                    <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                                                )}
                                            </div>
                                            <div className="mt-2 flex items-baseline">
                                                <p className="text-xs text-gray-500 line-through">{product.originalPrice}</p>
                                                <p className="ml-2 text-sm font-medium text-gray-900">{product.price}</p>
                                                <p className="ml-2 text-sm font-medium text-red-500">{product.discount}</p>
                                            </div>
                                        </div>
                             <div className="mt-4 flex gap-4">
                                            <div className="ml-6 flex flex-row  items-center text-sm gap-x-4 mr-3">
                                                <p className={`md:text-sm text-xl w-16 text-center rounded-md text-white-100 md:py-2 md:px-2 font-medium bg-[#c29e75] `}>
                                                    <Link to='#' > <button onClick={() => handleAddClick(product.id)} >{cart.includes(product.id) ? "Pay" : "Add"}</button> </Link>
                                                </p>

                                                <p className="md:text-sm text-xl w-16 text-center text-white-100 rounded-md bg-[#c31717] md:py-2 md:px-2 font-medium">
                                                    <Link to='#'><button onClick={() => handleBuyClick(product.id)}>Book</button></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Kallu