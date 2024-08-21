import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Body from './components/Body'
import Services from './components/Services'
import Contact from './components/Contact'
import Appointment from './Pages/Appointment'
import Kallu from './Pages/Kallu'
import Hitech from './Pages/Hitech'
import Mansoon from './Pages/Mansoon'
import { useState } from 'react'
import Gallery from './components/Gallery'
import Payment from '../src/Pages/Payment'
import CartContext from './Utils/CartContext'
import PaymentSuccess from './Pages/PaymentSuccess'

function AppLayout(){
  const products = [
    {
      items: [
        {
          id: 1,
          name: 'Hair Cutting (Normal)',
          href: '#',
          price: '₹ 60',
          originalPrice: '₹ 70',
          discount: '15% Off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/pricing-1.jpg',
        },
        {
          id: 2,
          name: 'Hair Cutting (Stylish)',
          href: '#',
          price: '₹ 80',
          originalPrice: '₹ 90',
          discount: '12% off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/gallery-3.jpg',
        },
        {
          id: 3,
          name: 'Beard Trim',
          href: '#',
          price: '₹ 50',
          originalPrice: '₹ 60',
          discount: '17% off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/pricing-bg.jpg',
        },
        {
          id: 4,
          name: 'Beard Shaving',
          href: '#',
          price: '₹ 50',
          originalPrice: '₹ 60',
          discount: '17% off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/pricing-2.jpg',
        },
        {
          id: 5,
          name: 'Body Massage',
          href: '#',
          price: '₹ 90',
          originalPrice: '₹ 100',
          discount: '10% off',
          color: 'Best and Affordable price',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7MlOoFAr_F6lXE-37FlBe9GTaAaRuf-rYFC9vjKEB0Wsb_3mFwYOKsAErncEJ24QFBM&usqp=CAU',
        },
        {
          id: 6,
          name: 'Hair Cutting (Normal)',
          href: '#',
          price: '₹ 80',
          originalPrice: '₹ 100',
          discount: '20% Off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/pricing-1.jpg',
        },
        {
          id: 7,
          name: 'Hair Cutting (Stylish)',
          href: '#',
          price: '₹ 100',
          originalPrice: '₹ 120',
          discount: '17% off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/gallery-3.jpg',
        },
        {
          id: 8,
          name: 'Beard Trim',
          href: '#',
          price: '₹ 70',
          originalPrice: '₹ 80',
          discount: '13% off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/pricing-bg.jpg',
        },
        {
          id: 9,
          name: 'Beard Shaving',
          href: '#',
          price: '₹ 60',
          originalPrice: '₹ 70',
          discount: '15% off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/pricing-2.jpg',
        },
        {
          id: 10,
          name: 'Body Massage',
          href: '#',
          price: '₹ 150',
          originalPrice: '₹ 200',
          discount: '25% off',
          color: 'Best and Affordable price',
         imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7MlOoFAr_F6lXE-37FlBe9GTaAaRuf-rYFC9vjKEB0Wsb_3mFwYOKsAErncEJ24QFBM&usqp=CAU',
        },
        {
          id: 11,
          name: 'Face Massage',
          href: '#',
          price: '₹ 180',
          originalPrice: '₹ 200',
          discount: '10% off',
          color: 'Best and Affordable price',
          imageSrc: 'https://www.shutterstock.com/image-photo/young-hispanic-man-relaxed-having-260nw-2167829467.jpg',
        },
        {
          id: 12,
          name: 'Hair Cutting (Normal)',
          href: '#',
          price: '₹ 150',
          originalPrice: '₹ 200',
          discount: '25% Off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/pricing-1.jpg',
        },
        {
          id: 13,
          name: 'Hair Cutting (Stylish)',
          href: '#',
          price: '₹ 200',
          originalPrice: '₹ 250',
          discount: '20% off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/gallery-3.jpg',
        },
        {
          id: 14,
          name: 'Beard Trim',
          href: '#',
          price: '₹ 120',
          originalPrice: '₹ 150',
          discount: '20% off',
          color: 'Best and Affordable price',
          imageSrc: '../src/imgs/pricing-bg.jpg',
        },
        {
          id: 15,
          name: 'Beard Shaving',
          href: '#',
          price: '₹ 120',
          originalPrice: '₹ 160',
          discount: '25% off',
          color: 'Best and Affordable price',
         imageSrc: '../src/imgs/pricing-2.jpg',
        },
        {
          id: 16,
          name: 'Body Massage',
          href: '#',
          price: '₹ 350',
          originalPrice: '₹ 450',
          discount: '23% off',
          color: 'Best and Affordable price',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7MlOoFAr_F6lXE-37FlBe9GTaAaRuf-rYFC9vjKEB0Wsb_3mFwYOKsAErncEJ24QFBM&usqp=CAU',
        },
        {
          id: 17,
          name: 'Face Massage',
          href: '#',
          price: '₹ 450',
          originalPrice: '₹ 500',
          discount: '10% off',
          color: 'Best and Affordable price',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7MlOoFAr_F6lXE-37FlBe9GTaAaRuf-rYFC9vjKEB0Wsb_3mFwYOKsAErncEJ24QFBM&usqp=CAU',
        },
      ],
    },
  ];
  const pro = products[0].items[0]
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart([...cart, id]);
  }
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return(
    <CartContext.Provider value={{cart,pro, setCart, addToCart, products, removeFromCart}}>
      <Header />
      <Outlet />
      <Footer />
    </CartContext.Provider>
  )
}
function App() {
  return  <RouterProvider router={appRouter} />
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{
        path: '/',
        element: <Body  />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'services',
      element: <Services />,
    },
    {
      path: 'gallery',
      element: <Gallery />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
    {
      path: 'appointment',
      element: <Appointment />,
    },
    {
      path: '/appointment/kallu',
      element: <Kallu />
    },
    {
      path: '/appointment/hitech',
      element: <Hitech />
    },
    {
      path: '/appointment/mansoon',
      element: <Mansoon />
    },
    {
      path: '/appointment/payment',
      element: <Payment />
    },
    {
      path: '/PaymentSuccess',
      element: <PaymentSuccess />
    },
    
  ]
  },
])

export default App
