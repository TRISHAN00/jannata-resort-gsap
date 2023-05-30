import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Img } from "../Img";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TweenMax } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
  const bg = `url("/images/dynamic/span-restaurant.jpg")`;
  useEffect(() => {
    const section = document.querySelector(".parallax-bg");

    const innerHeight = window.innerHeight;

    section.style.backgroundPosition = `50% ${innerHeight / 2}px`;

    gsap.to(section, {
      backgroundPosition: `50% ${-innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    });
  });

  return (
    <StyledResort className="parallax-bg" style={{ backgroundImage: bg }}>
      <h2>Pera Background</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        inventore, possimus repellendus eos repudiandae atque tempore illum
        excepturi illo beatae, similique ex delectus omnis asperiores
        voluptatibus non accusamus provident perspiciatis.
      </p>
    </StyledResort>
  );
};

const StyledResort = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export default ParallaxSection;
