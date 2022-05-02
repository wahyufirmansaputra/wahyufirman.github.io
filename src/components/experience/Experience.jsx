import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>HTML</h4>
                <small className="text_light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>CSS</h4>
                <small className="text_light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill  className='experience__details-icon' />
                <div>
                <h4>JavaScript</h4>
                <small className="text_light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>React</h4>
                <small className="text_light">Basic</small>
                </div>
              </article>
          </div>
        </div>

        {/*     */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>React JS</h4>
                <small className="text_light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>React Native</h4>
                <small className="text_light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Firebase Database</h4>
                <small className="text_light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MySQL</h4>
                <small className="text_light">Basic</small>
                </div>
              </article>
          </div>
        </div>

          {/*     */}

        <div className="experience__jaringan">
        <h3>Installation & Jaringan</h3>
          <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>Mikrotik</h4>
                <small className="text_light">Experience</small>
               </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>CCTV Installation</h4>
                <small className="text_light">Intermediate</small>
               </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Networking</h4>
                <small className="text_light">Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Software & Hardware</h4>
                <small className="text_light">Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Windows</h4>
                <small className="text_light">Experience</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>VPN Windows Server</h4>
                <small className="text_light">Experience</small>
                </div>
              </article>
          </div>
          </div>

      </div>
    </section>
  )
}

export default Experience