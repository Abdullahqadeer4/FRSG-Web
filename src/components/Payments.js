import React from 'react';
import { Container } from 'react-bootstrap';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'animate.css';

import AVTR1 from '../assets/img/avatar1.jpeg';
import AVTR2 from '../assets/img/avatar2.jpeg';
import AVTR3 from '../assets/img/avatar3.jpeg';
import AVTR4 from '../assets/img/avatar4.jpeg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  },
  {
    avatar: AVTR2,
    name: 'Robert Downey',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  },
  {
    avatar: AVTR3,
    name: 'Bruce Wayne',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  },
  {
    avatar: AVTR4,
    name: 'Zendaya Lastname',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
  }
];

export const Payments = () => {
  return (
    <Container className="payments-section">
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt={`${name} Avatar`} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod
        neque provident velit, rem explicabo excepturi id illo molestiae
        blanditiis, eligendi dicta officiis asperiores delectus quasi inventore
        debitis quo.
      </p>
    </Container>
  );
};
