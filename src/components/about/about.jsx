import React from 'react'
import ME from '../../assets/about.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'></FaAward>
              <h5>Address</h5>
              <small>Phuong Cach Quoc Oai <br />Ha Noi</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'></FiUsers>
              <h5>University</h5>
              <small>HaUI <br />Information technology <br />  GPA: 2.5</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'></VscFolderLibrary>
              <h5>Experience</h5>
              <small>Intern <br /> MonstarlabVN <br /> (11/2021 - 5/2022)</small>
            </article>
          </div>

          <p>
            Tôi là Hiệp, chàng trai mang trong mình niềm tin mạnh mẽ làm thế giới tươi đẹp hơn 
            bằng cách - chế tạo giao diện người dùng. Tôi chọn ReactJs. <br/> Mục tiêu năm 2022 trở thành FE ReactJs chuyên nghiệp.
             Trong 2 năm tiếp theo, cùng công ty chinh phục những vị khách hàng khó tính nhất.
          </p>
             <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;