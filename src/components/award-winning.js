import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import dog1Image from '@/images/pets/dog-1.jpg';
import dog2Image from '@/images/pets/dog-2.jpg';
import dog3Image from '@/images/pets/dog-3.jpg';
import dog4Image from '@/images/pets/dog-4.jpg';
import dog5Image from '@/images/pets/dog-5.jpg';
import dog6Image from '@/images/pets/dog-6.jpg';
import cat1Image from '@/images/pets/cat-1.jpg';
import cat2Image from '@/images/pets/cat-2.jpg';
import cat3Image from '@/images/pets/cat-3.jpg';
import cat4Image from '@/images/pets/cat-4.jpg';
import cat5Image from '@/images/pets/cat-5.jpg';

import Img from "./img";

const petImages = [dog1Image, cat1Image, dog2Image, cat2Image, dog3Image, cat3Image, dog4Image, cat4Image, dog5Image, cat5Image, dog6Image];

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
            {
              petImages.map((img, id) => {
                return (
                  <SwiperSlide key={id}>
                    <Img src={img} alt="" />
                  </SwiperSlide>
                )
              })
            }
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default AwardWinning;
