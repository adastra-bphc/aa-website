import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from '../components/About'
import Members from '../components/Members'

const About = () => {
  return (
    <div>
      <Navbar />
      <Members heading='Meet The Team' text='Ad Astra Members at BITS Pilani, Hyderabad Campus' />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default About
