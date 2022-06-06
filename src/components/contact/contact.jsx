import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4yc52s', 'template_vza9rwb', form.current, 'g2piKq53B0lue4Us9')
  };

  return (
    <div className='contact__me'>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>nguyenthehiep3232@gmail.com</h5>
              <a href='mailto:nguyenthehiep3232@gmail.com' target='_blank'>Send a email</a>
            </article>

            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>Hiep Si</h5>
              <a href='https://m.me/hiepssi05/' target='_blank'>Send a message</a>
            </article>

            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon' />
              <h4>Personal Phone number</h4>
              <h5>+84386132323</h5>
              <a href='https://api.whatsapp.com/send?phone' target='_blank'>Send a message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="mail" name='email' placeholder='Your email' required />
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className="btn btn-primary"> Send Message</button>
          </form>
            
        </div>
      </section>
    </div>
  )
}

export default Contact;