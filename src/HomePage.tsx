import { useState } from 'react'
import Home from './components/sections/Home'
import Services from './components/sections/Services'
import Area from './components/sections/Area'
import Feedback from './components/sections/Feedback'
import Clients from './components/sections/Clients'
import Footer from './components/sections/Footer'


function App() {

  return (
    <>
      <Home />
      <Services />
      <Area />
      <Feedback />
      <Clients />
      <Footer />
    </>
  )
}

export default App
