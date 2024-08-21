import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Section3.css'


import { Pagination } from 'swiper/modules';


const Section3 = () => {
  return (
    <div>
        <section className='Section3'>
            <div className='Section3-left'>
                <p>Experience the Future of Delivery</p>
                <button className='button'><span>Order now</span></button>
            </div>
            
            <div className='swipe'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                    clickable: true,
                    }}
                       
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://builtin.com/sites/www.builtin.com/files/2022-09/delivery-horizon-drone-delivery.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://tb-static.uber.com/prod/image-proc/processed_images/f57fb461cfafbbb63b57e8a50c81c5d0/c9252e6c6cd289c588c3381bc77b1dfc.jpeg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Section3