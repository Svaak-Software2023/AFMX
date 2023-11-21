import "./membership.css";
import MembershipPlan from "../../assets/data/membership/membershipPlan.json";
import MembershipCard from "./MembershipCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useState } from "react";
const JoinAFMX = () => {
  const [width,setWidth]=useState(0)
  useState(()=>{
  setWidth(window.innerWidth,"width");
},[window.innerWidth])


  return (
    <>
      <div className="container slider-body">
        <h1 className="membership_heading">Membership Plans</h1>
        <div className="membership_container">
          <div className="membership_cards">
            <div className="cards d-flex flex-wrap justify-content-center">
             { (width>768)
             ?
              <Swiper
              // pagination={{ clickable: true }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                {/* <img src="images/1.png" alt="slide_image" /> */}
                {MembershipPlan.map((item) => (
                  <SwiperSlide key={item.id} >
                    <MembershipCard data={item} />
                  </SwiperSlide>
                ))}
                <div className="controls-card">

                  <div className="slider-control">
                    <div className="swiper-button-prev slider-arro">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </Swiper>
              :
              MembershipPlan.map((item) => (
                <MembershipCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default JoinAFMX;
