import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Login Admin Jersy.jpg'
import IMG2 from '../../assets/login berhasil.jpg'
import IMG3 from '../../assets/master jersey.jpg'
import IMG4 from '../../assets/master liga.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My finished work React JS</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG1} alt="" />

            <h3>Login Admin</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG1} className='btn btn-primary'>Detail</a>
           </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG2} alt="" />

            <h3>Dashboard Admin</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG2} className='btn btn-primary'>Detail</a>
           </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG3} alt="" />

            <h3>List Jersey Admin</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG3} className='btn btn-primary'>Detail</a>
           </div>
        </article>

        <article className='portfolio__item'>
            <div className='portfolio__item-image'></div>
              <img src={IMG4} alt="" />

            <h3>List Liga Admin</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href={IMG4} className='btn btn-primary'>Detail</a>
           </div>
           
        </article>

      </div>
    </section>
    
    
  )
}

export default Portfolio