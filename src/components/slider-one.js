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



SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    effect: "fade",
  };

  return (
    <section className="main-slider header_slider_area ">
      <Swiper {...mainSlideOptions}>
        {SlideOneData.map(
          ({ title, text }, index) => (
            <SwiperSlide key={index} style={{ height: 600 }}>
              <div
                className="image-layer"
                style={{ background: '#3EC4E4' }}
              ></div>
              <Container>
                <Row className="text-center pb-5 pt-4">
                  <h4 className="main-slider__header" style={{ marginTop: 50 }}>
                    Taking care of the future of veterinary medicine <b>starts with taking care of you</b>
                  </h4>
                </Row>
                <Row>
                  <Col lg="6">
                    <h1 className="main-slider__title">{title}</h1>
                    <p className="main-slider__subtext">
                      {text}
                    </p>
                    <div className="slide_button">
                      <Search></Search>
                    </div>
                  </Col>
                  <Col lg="6">
                    <Carousel
                      showArrows={false}
                      autoPlay={true}
                    >
                      {
                        SlideOneVideoData.map((data, index) => {
                          return (
                            <div key={index}>
                              <Player
                                playsInline
                                poster={data.thumnail}
                                src={data.url}
                              />
                            </div>
                          )
                        })
                      }
                    </Carousel>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default SliderOne;
