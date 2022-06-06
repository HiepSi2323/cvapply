import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://gitlab.com" target="_blank" ><AiFillGithub /></a>
      <a href="https://fb.com" target="_blank" ><BsFacebook /></a>
      <a href='http://instagram.com' target="_blank"><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials;