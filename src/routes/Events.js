import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/Events'
import Details from '../components/Details'

const Event = () => {
  return (
    <div>
      <Navbar />
      <Details heading='Our Events'/>
      <Events />
      <Footer />
    </div>
  )
}

export default Event
