import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import SliderOne from "@/components/slider-one";
import AboutOne from "@/components/about-one";
import ServiceOne from "@/components/service-one";
import SliderVideo from "@/components/slider-video";
import TestimonialsOne from "@/components/testimonials-one";
import BlogOne from "@/components/blog-one";
import AwardWinning from "@/components/award-winning";
import SliderTwo from "@/components/slider-two";
import CtaTwo from "@/components/cta-two";
import AccordionOne from "@/components/accordion-one";
import SkewOne from "@/components/skew-one";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home Page">
        <HeaderOne />
        <SliderOne />
        <ServiceOne />
        <BlogOne />
        <AboutOne />
        <TestimonialsOne />
        <AccordionOne />
        <AwardWinning />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
