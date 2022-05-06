import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import brandImage from "@/images/client-logo.png";
import rubicImage from "@/images/rubic.png";
import usbImage from "@/images/usbpan.png";
import Img from "./img";

const AwardWinning = ({ extraClass }) => {
  const sponsorCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5
      }
    }
  };
  return (
    <div
      className={`clients_logo_area py-4  ${extraClass}`}
    >
      <Container>
        <div>
          <h3>Award Winning</h3>
        </div>
        <Swiper {...sponsorCarouselOptions} className="clients_logo ">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <Img src={rubicImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={usbImage} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default AwardWinning;
