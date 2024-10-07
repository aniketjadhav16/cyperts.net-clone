import React from 'react'
import './Partners.css'
import pwc from '../../assets/pwc.png'
import vistara from '../../assets/vistaralogo.png'
import ferreroRocher from '../../assets/farrerologo.avif'
import hindustanUnileverLimited from '../../assets/HUL.png'
import worldDevelopmentCorporation from '../../assets/wdc.png'
import lawtech from '../../assets/lawtech.png'


const Partners = () => {
  return (
    <div className='partners-container'>
      <img src={pwc} alt='' className='pwc'></img>
      <img src={vistara} alt='' className='vistara'></img>
      <img src={ferreroRocher} alt='' className='ferreroRocher'></img>
      <img src={hindustanUnileverLimited} alt='' className='hindustanUnileverLimited'></img>
      <img src={worldDevelopmentCorporation} alt='' className='worldDevelopmentCorporation'></img>
      <img src={lawtech} alt='' className='lawtech'></img>
    </div>
  )
}

export default Partners
