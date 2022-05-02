import React from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {IoLogoInstagram} from 'react-icons/io'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>WAHYU FIRMAN</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/wahyu.f.syaputra"> <ImFacebook /> </a>
        <a href="https://www.instagram.com/wahyufirman_007/"> <IoLogoInstagram /> </a>
        <a href="https://twitter.com/wahyu007firman"> <ImTwitter /> </a>
      </div>

    <div className='footer__copyright'>
      <smal>
        &copy; WAHYU Portfolio. All rights reserved
      </smal>
    </div>

    </footer>
  )
}

export default Footer