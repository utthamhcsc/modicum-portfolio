import React from 'react'
import Navbar from '../../components/navbars/Navbar'
import HomeHeader from '../../components/headers/HomeHeader'
import ContactUs from '../../components/contact-us'
import Footer from '../../components/footers'
import AboutUs from '../../components/about-us'
import Service from '../../components/services'
import Projects from '../../components/projects'
import ChooseUs from '../../components/choose-us'
function index() {
    return (
        <div>
            {/* Navbar Section */}
            <Navbar/>
            {/* Header Section */}
             <HomeHeader/> 
            {/* About Us Section */}
            <AboutUs/>
            {/* Service Section */}
            <Service/>
            {/* projects */}
            <Projects/>
            {/* why chose us */}
            <ChooseUs/>
            {/* 6D process */}
            {/* testimonial */}
            {/* contact us */}
            <ContactUs/>
            {/* footer */}
            <Footer/>
        </div>
    )
}

export default index
