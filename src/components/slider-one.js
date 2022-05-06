import React from "react";
import Link from "@/components/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SlideOneData, SlideOneVideoData } from "@/data";
import Search from '@/components/search';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "video-react/dist/video-react.css"; // import css
import { Carousel } from 'react-responsive-carousel';
import { Player } from 'video-react';
import VideoVimeo from "./video-vimeo";



SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    effect: "fade",
  };

  return (
    <section className="main-slider header_slider_area ">
      <div className="main-slider-content">
        <Container>
          <Row className="text-center pb-5 pt-4">
            <h1 className="main-slider__header" >
              WOOF U Vet Student Portal
            </h1>
          </Row>
          <Row>
            {
              SlideOneVideoData.map((data, index) => {
                return (
                  <Col lg="4" key={index}>
                    <VideoVimeo data={data}></VideoVimeo>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default SliderOne;
