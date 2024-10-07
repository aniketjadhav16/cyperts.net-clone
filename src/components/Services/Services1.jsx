import React from 'react'
import './Services1.css'
import servicesHeadImg from '../../assets/services-head-img.png'
import webDev from '../../assets/web-development_7487006.png'
import customApp from '../../assets/configuration_7465397.png'
import dataAnalytics from '../../assets/document_8129926.png'
import artificialIntelligence from '../../assets/tablet_9350887.png'
import machineLearning from '../../assets/mobile_8969737.png'
import businessIntelligence from '../../assets/book_8969768.png'
import devOpsDevelopment from '../../assets/location_8130008.png'
import digitalMarketing from '../../assets/advertisement_3176202.png'

const Services1 = () => {
  return (
    <div className='services'>
        <div className="head-text">
            <img src={servicesHeadImg} alt='' className='services-head-img'></img>
            <h1>Services</h1>
            <p>Businesses today cross borders and regions, so you need a service provider that goes where you are.</p>
        </div>

        <div className='col'>
            <div className='col1-services-items'>
                <div className='services-items'>
                    <img src={webDev} alt='' className='web-dev-img'></img>
                    <div className='services-content'>
                        <h1>Front End Development Services</h1>
                        <p>We select front-end developers based on your needs. They have the technical skills to complete advanced projects involving various technologies and disciplines successfully.</p>
                    </div>
                </div>

                <div className='services-items'>
                    <img src={dataAnalytics} alt='' className='web-dev-img'></img>
                    <div className='services-content'>
                        <h1>Data Analytics Services</h1>
                        <p>Our expert data analytics team excels in complex projects, implementing advanced techniques, and creating insightful visualizations to successfully complete your specific needs.</p>
                    </div>
                </div>

                <div className='services-items'>
                    <img src={machineLearning} alt='' className='web-dev-img'></img>
                    <div className='services-content'>
                        <h1>Machine Learning Development</h1>
                        <p>Our team excels in machine learning development, handpicking developers proficient in various technologies, delivering predictive models, NLP, and recommendation systems.</p>
                    </div>
                </div>

                <div className='services-items'>
                    <img src={devOpsDevelopment} alt='' className='web-dev-img'></img>
                    <div className='services-content'>
                        <h1>DevOps Development services</h1>
                        <p>Our skilled DevOps developers streamline development pipelines, automate workflows, and ensure continuous integration and delivery for advanced projects.</p>
                    </div>
                </div>
            </div>

            <div className='col2-services-items'>
                <div className='services-items'>
                    <img src={customApp} alt='' className='web-dev-img'></img>
                    <div className='services-content'>
                        <h1>Custom App Development</h1>
                        <p>Cyperts selects skilled developers to meet your needs, delivering custom mobile, web, or software solutions that exceed expectations and stand out in the dynamic digital landscape.</p>
                    </div>
                </div>

                <div className='services-items'>
                    <img src={artificialIntelligence} alt='' className='web-dev-img'></img>
                    <div className='services-content'>
                        <h1>Artificial Intelligence Development</h1>
                        <p>Cyperts provides skilled AI developers to meet your unique requirements, creating intelligent algorithms and machine learning models for cutting-edge solutions.</p>
                    </div>
                </div>

                <div className='services-items'>
                    <img src={businessIntelligence} alt='' className='web-dev-img'></img>
                    <div className='services-content'>
                        <h1>Business Intelligence Development</h1>
                        <p>Cyperts selects expert BI developers to navigate complex projects, delivering data visualization and reporting solutions for informed decision-making.</p>
                    </div>
                </div>

                <div className='services-items'>
                    <img src={digitalMarketing} alt='' className='web-dev-img'></img>
                    <div className='services-content'>
                        <h1>Digital Marketing</h1>
                        <p>Cyperts' digital marketing experts craft effective campaigns, optimize web presence, and deliver solutions aligned with your needs to drive results.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services1
