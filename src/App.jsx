import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Partners from './components/Partners/Partners';
import Services1 from './components/Services/Services1';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      
      <Services1 />
      <Partners />
    </>
  )
}

export default App
