import { useState } from 'react'

import './App.css'
import Hero from './componets/heropage/Hero'
import Footer from './componets/footer/Footer'
import Header from './header/Header'
// import Hero from './componets/heropage/Hero'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
     <Header/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
