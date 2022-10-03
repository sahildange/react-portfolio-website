import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/vedant.png'
import AVTR2 from '../../assets/shivam.png'
import AVTR3 from '../../assets/ameyaa.png'
import AVTR4 from '../../assets/nikhil.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Vedant Holey',
    review:  'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore laboriosam aperiam eligendi sapiente laudantium possimus voluptatibus voluptas ipsam eveniet sequi delectus aut blanditiis?'
  },

  {
    avatar: AVTR2,
    name: 'Shivam Likhar',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore laboriosam aperiam eligendi sapiente laudantium possimus voluptatibus voluptas ipsam eveniet sequi delectus aut blanditiis?'
  },

  {
    avatar: AVTR3,
    name: 'Ameyaa Vaidya',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore laboriosam aperiam eligendi sapiente laudantium possimus voluptatibus voluptas ipsam eveniet sequi delectus aut blanditiis?'
  },

  {
    avatar: AVTR4,
    name: 'Nikhil Rathod',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore laboriosam aperiam eligendi sapiente laudantium possimus voluptatibus voluptas ipsam eveniet sequi delectus aut blanditiis?'
  }

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review</h5>
      <h2>What they say</h2>
      <h5>Swipe For More</h5>

      <Swiper className="container testimonials_container"
           // install Swiper modules
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}>

      {
        data.map(({avatar,name,review}, index ) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className="client_avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials