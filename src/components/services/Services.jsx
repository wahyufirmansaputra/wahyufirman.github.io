import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>The work I usually do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Networking</h3>
          </div>


          <ul className="service__list"></ul>
          <li>
            <FiCheck className='service__list-icon' />
            <p>New CCTV Installation</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>CCTV network settings so that they can be connected to 1 IP</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Problem With CCTV</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Setting Mikrotik</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Setting VPN In Windows Server 2019</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Cable pulling and network installation at head office and branch offices</p>
          </li>
        </article>

        {/* End jaringan  */}

        <article className="service">
          <div className="service__head">
            <h3>Support To User</h3>
          </div>


          <ul className="service__list"></ul>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Tester Debuging System POS</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Testing Hardware POS</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Presentation of system updates to investors</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Repair a broken printer</p>
          </li>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development & Mobile App</h3>
          </div>


          <ul className="service__list"></ul>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Portofolio </p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Make a Portfolio Website Using React Js</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Create a Jersey Admin Website Display that is Connected Directly with the Jersey Sales mobile application</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Creating a Jersey Sales App Using React Native</p>
          </li>
          <li>
            <FiCheck className='service__list-icon' />
            <p>Using Firebase Database</p>
          </li>
        </article>

      </div>
    </section>
  )
}

export default Services