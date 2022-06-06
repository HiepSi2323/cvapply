import React from 'react';
import './testimonial.css';
import { data } from './data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

const Testimonial = () => {
 
    return (
    <div className='testimonial__people'>
      <section id="testimonials">
        <h5>Review from people</h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container'
          modules={[Pagination]} spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true}}>
          {
            data.map((d, index) => {
              return (
                <SwiperSlide className='testimonial' key={index}>
                  <div className='person__avatar'>
                    <img src={d.avatar} />
                  </div>
                  <h5 className='person__name'>{d.name}</h5>
                  <small className='person__review'>
                    {d.review}
                    <br />
                    {d.job}
                  </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>  
      </section>
    </div>
  )
}

export default Testimonial;
