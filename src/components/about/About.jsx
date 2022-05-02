import React from "react";
import "./about.css";
import ME from '../../assets/about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import {MdOutlineCastForEducation} from "react-icons/md"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>

        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working In PT.Setya Kuliner Mandiri (D'Besto)</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ user Cabang Maupun Pusat</small>
            </article>

            <article className="about__card">
              <MdOutlineCastForEducation className="about__icon" />
              <h5>Pendidikan</h5>
              <small>S1 Universitas Indraprasta</small>
            </article>
          </div>

          <p>
            I am a IT support enginner looking for a full time position in the IT network systems field
            where i can apply my knowledge and skills for continous improvement. Well i'm hardworking,
            dilligent, and dedicated
          </p>

          <a href="#contact" className="btn btn-primary" >Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
