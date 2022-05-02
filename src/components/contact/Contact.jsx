import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm ('service_5392han', 'template_q0xvnvb', form.current, 'ctl-XFt7wWqphvWza')
   Swal.fire(
    'Berhasil!',
    'Pesan Berhasil Terkirim',
    'Sukses'
  )
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>


      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon '/>
            <h4>Email</h4>
            <h5>wahyu.firman0703@gmail.com</h5>
            <a href='mailto:wahyu.firman0703@gmail.com?' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>wahyufirman</h5>
            <a href='https://m.me/wahyu.f.syaputra' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>081211148943</h5>
            <a href='https://api.whatsapp.com/send?phone+6281211148943' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* Selesai actionnya disini */}

        <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' requiered ></textarea>
            <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact