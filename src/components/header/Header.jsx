import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Wahyu.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Wahyu Firman</h1>
          <h5 className="text-light">IT Support</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
              <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
          
      </div>
    </header>
  )
}

export default Header