import React, { useEffect } from "react";
import styled from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Resort from "../../components/Resort";
import Dine from "../../components/Dine";
import Wellness from "../../components/Wellness";
import Testimonial from "../../components/Testimonial";
import ParallaxSection from "../../components/Parallax";
import HeroSection from "../../components/Hero";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap-trial/dist/ScrollSmoother";
import ParallaxSectionEl from "../../components/ParallaxSection";

gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      content: "#content",
      smooth: 1,
      effects: true,
    });

    smoother.effects("img", { speed: "auto" });
  });
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Title</title>
        <meta name="description" content="Description" />
      </Helmet>

      <StyledComponent id="content">
        <Resort />
        <Dine />
        <ParallaxSectionEl />
        <Testimonial />
      </StyledComponent>
    </HelmetProvider>
  );
};

const StyledComponent = styled.section``;

export default MyComponent;
