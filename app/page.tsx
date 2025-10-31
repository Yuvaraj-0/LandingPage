import React from 'react'
import Home from './home/page'
import About from './about/page'
import Facility from './facilities/page'
import Contact from './contact/page'
import Servicies from './services/page'
import Client from './clients/page'
import Navbar from './components/Navbar'
const page = () => {
  return (
    <div>
      
      <Home/>
      <About/>
      <Facility/>
      <Servicies/>
      
      
      <Contact/>
      
      <Client/>
    </div>
  )
}

export default page