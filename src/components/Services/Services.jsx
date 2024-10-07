import React from 'react'
import './Services.css'
import servicesHeadImg from '../../assets/services-head-img.png'
import webDev from '../../assets/web-development_7487006.png'
import customApp from '../../assets/configuration_7465397.png'
import dataAnalytics from '../../assets/document_8129926.png'
import artificialIntelligence from '../../assets/tablet_9350887.png'
import machineLearning from '../../assets/mobile_8969737.png'
import businessIntelligence from '../../assets/book_8969768.png'
import devOpsDevelopment from '../../assets/location_8130008.png'
import digitalMarketing from '../../assets/advertisement_3176202.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='head-section'>
        <div className="head-text">
            <img src={servicesHeadImg} alt='' className='services-head-img'></img>
            <h1>Services</h1>
            <p>Businesses today cross borders and regions, so you need a service
            provider that goes where you are.</p>
        </div>
      </div>

    <div className='all-services-items'>
      <div className='services-items'>
        <img src={webDev} alt='' className='web-dev-img'></img>
        <div className='services-content'>
            <h1>Front End Development Services</h1>
            <p>We carefully select and choose our front-end developers based on your requirements. Our developers possess the necessary technical skills to successfully complete advanced projects involving multiple technologies and disciplines.</p>
        </div>
      </div>

      <div className='services-items'>
        <img src={customApp} alt='' className='web-dev-img'></img>
        <div className='services-content'>
            <h1>Custom App Development</h1>
            <p>We carefully select and choose our front-end developers based on your requirements. Our developers possess the necessary technical skills to successfully complete advanced projects involving multiple technologies and disciplines.</p>
        </div>
      </div>

      <div className='services-items'>
        <img src={dataAnalytics} alt='' className='web-dev-img'></img>
        <div className='services-content'>
            <h1>Data Analytics Services</h1>
            <p>We carefully select and choose our front-end developers based on your requirements. Our developers possess the necessary technical skills to successfully complete advanced projects involving multiple technologies and disciplines.</p>
        </div>
      </div>

      <div className='services-items'>
        <img src={artificialIntelligence} alt='' className='web-dev-img'></img>
        <div className='services-content'>
            <h1>Artificial Intelligence Development</h1>
            <p>We carefully select and choose our front-end developers based on your requirements. Our developers possess the necessary technical skills to successfully complete advanced projects involving multiple technologies and disciplines.</p>
        </div>
      </div>

      <div className='services-items'>
        <img src={machineLearning} alt='' className='web-dev-img'></img>
        <div className='services-content'>
            <h1>Machine Learning Development</h1>
            <p>We carefully select and choose our front-end developers based on your requirements. Our developers possess the necessary technical skills to successfully complete advanced projects involving multiple technologies and disciplines.</p>
        </div>
      </div>

      <div className='services-items'>
        <img src={businessIntelligence} alt='' className='web-dev-img'></img>
        <div className='services-content'>
            <h1>Business Intelligence Development</h1>
            <p>We carefully select and choose our front-end developers based on your requirements. Our developers possess the necessary technical skills to successfully complete advanced projects involving multiple technologies and disciplines.</p>
        </div>
      </div>

      <div className='services-items'>
        <img src={devOpsDevelopment} alt='' className='web-dev-img'></img>
        <div className='services-content'>
            <h1>DevOps Development services</h1>
            <p>We carefully select and choose our front-end developers based on your requirements. Our developers possess the necessary technical skills to successfully complete advanced projects involving multiple technologies and disciplines.</p>
        </div>
      </div>

      <div className='services-items'>
        <img src={digitalMarketing} alt='' className='web-dev-img'></img>
        <div className='services-content'>
            <h1>Digital Marketing</h1>
            <p>We carefully select and choose our front-end developers based on your requirements. Our developers possess the necessary technical skills to successfully complete advanced projects involving multiple technologies and disciplines.</p>
        </div>
      </div>
  </div>
    </div>
  )
}

export default Services
