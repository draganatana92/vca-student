import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import SliderOne from "@/components/slider-one";
import AboutOne from "@/components/about-one";
import ServiceOne from "@/components/service-one";
import TestimonialsOne from "@/components/testimonials-one";
import SponsorOne from "@/components/sponsor-one";
import CtaTwo from "@/components/cta-two";
import BlogOne from "@/components/blog-one";

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
        <SponsorOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
