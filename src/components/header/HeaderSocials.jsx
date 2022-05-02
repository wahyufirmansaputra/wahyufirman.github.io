import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

// import nya didapatkan dari react icons dan di download di npm download-react-icons
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" ><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" ><AiFillGithub /></a>
        <a href="https://www.facebook.com/media/set/?set=a.387641994664026&type=3" target="_blank" ><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" ><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials