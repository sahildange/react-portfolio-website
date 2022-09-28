import React from 'react'
import './contact.css'
import{HiOutlineMail} from 'react-icons/hi'
import{BsWhatsapp} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com'

const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z4p3yus', 'template_2mopned', form.current, 'YOUR_PUBLIC_KEY')

    e.target.reset()
  };

  return (
    <section id= 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

    <div className="container contact_container">
      <div className="contact_options">

        <article className='contact_option'>
          <HiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>sahiladange45@gmail.com</h5>
          <a href="mailto:sahiladange45@gmail.com" target="_blank"> Send an Email </a>
        </article>

        <article className='contact_option'>
          <FaLinkedinIn className='contact_option-icon'/>
          <h4>LinkedIn</h4>
          <h5>linkedin.com/sahil-dange</h5>
          <a href="https://www.linkedin.com/messaging/thread/2-ZWM2NDIzZjQtMGYyMC00NmFlLWIzM2YtN2NjMDZmMGFjOTlkXzAxMA==/" target="_blank"> Send a Message</a>
        </article>

      
        {/* ##################  WHATSAPP APPLICATION  IS MANDATORY   ##################### */}
        {/* FOR PHONE IT WILL BE AUTOMATIC*/}

    
        <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+919284376964</h5>
          <a href="https://api.whatsapp.com/send?phone+919284376964"  target="_blank"> Send a Message </a>
        </article>

      </div>

      {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='your full name' required />
         <input type="email" name='email' placeholder='your email' required  />
         <textarea name="message" rows="7" placeholder='your message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    </div>
    </section>
  )
}

export default Contact