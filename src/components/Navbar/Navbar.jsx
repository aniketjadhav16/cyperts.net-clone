import React from 'react'
import logo from '../../assets/Cyperts_Logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Services</li>
            <li>About</li>
            <li>Skills</li>
            <li>Careers</li>
            <li>Contacts</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
