import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>My Profile</a>

      <ul className='links'>
        <li><a href="#">Me</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://gitlab.com" target="_blank" ><AiFillGithub /></a>
        <a href="https://fb.com" target="_blank" ><FaFacebook /></a>
        <a href='http://instam.com' target="_blank"><FiInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer;
