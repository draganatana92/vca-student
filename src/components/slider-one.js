import React from "react";
import Link from "@/components/link";
import { Col, Container, Row } from "react-bootstrap";
import { SlideOneData } from "@/data";
import { Carousel } from "react-responsive-carousel";

const SliderOne = () => {
  return (
    <section className="main-slider header_slider_area ">
      <Container className="main-slider-carousel">
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} interval={8000}>
          {SlideOneData.map(
            ({ backgroundImage, title, text, button, url }, index) => (
              <div key={index} className='carousel-slider-content' >
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>
                <Row style={{ height: 500, width: '100%' }}>
                  <Col lg="8" sm="12">
                    <p className="main-slider__subtext" style={{ color: 'white', zIndex: 5 }}>
                      <span className="subtitle_number" style={{ color: 'white', zIndex: 5 }}>0{index + 1}</span>{" "}
                      {text}
                    </p>
                    <h1 className="main-slider__title" style={{ color: 'white' }}>{title}</h1>
                    <div className="slide_button">
                      <Link href={url} className="btn-yellow">
                        {button}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            )
          )}
        </Carousel>
      </Container>
    </section>
  );
};

export default SliderOne;
