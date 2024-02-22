import React,{useEffect} from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
         <Header />
            <Outlet />
          <Footer />
    </div>
  )
}

export default Layout