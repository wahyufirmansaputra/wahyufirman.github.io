import React from 'react'
import './portfolio2.css'
import IMG5 from '../../assets/splash.jpeg'
import IMG6 from '../../assets/register.jpeg'
import IMG7 from '../../assets/login.jpeg'
import IMG8 from '../../assets/listjersey.jpeg'
import IMG9 from '../../assets/home.jpeg'
import IMG10 from '../../assets/alert.jpeg'
import IMG11 from '../../assets/history.jpeg'
import IMG12 from '../../assets/pengaturan.jpeg'
import IMG13 from '../../assets/editprofile.jpeg'
import IMG14 from '../../assets/ubahpassword.jpeg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My finished work React Native</h5>
      <h2>Portfolio React Native</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG5} alt="" />

            <h3>Splash Screen</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG5} className='btn btn-primary'>Detail</a>
           </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG6} alt="" />

            <h3>Register Acount</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG6} className='btn btn-primary'>Detail</a>
           </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG7} alt="" />

            <h3>Login</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG7} className='btn btn-primary'>Detail</a>
           </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG8} alt="" />

            <h3>List Jersey</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG8} className='btn btn-primary'>Detail</a>
           </div>
           
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG9} alt="" />

            <h3>Home</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG9} className='btn btn-primary'>Detail</a>
           </div>
           
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG10} alt="" />

            <h3>Alert</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG10} className='btn btn-primary'>Detail</a>
           </div>
           
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG11} alt="" />

            <h3>History Pesanan</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG11} className='btn btn-primary'>Detail</a>
           </div>
           
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG12} alt="" />

            <h3>Pengaturan</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG12} className='btn btn-primary'>Detail</a>
           </div>
           
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG13} alt="" />

            <h3>Edit Profile</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG13} className='btn btn-primary'>Detail</a>
           </div>
           
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG14} alt="" />

            <h3>Ubah Password</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG14} className='btn btn-primary'>Detail</a>
           </div>
           
        </article>


      </div>
    </section>
    
    
  )
}

export default Portfolio