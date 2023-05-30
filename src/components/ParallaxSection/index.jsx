import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSectionEl = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.from(image, {
      y: "-30%",
      ease: "none",
    }).from(
      text,
      {
        y: "100%",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <StyledSection ref={sectionRef}>
      <div className="background-image" ref={imageRef} />
      <div className="section-content" ref={textRef}>
        <h2>
          WELLNESS AT <br /> JANNATA
        </h2>
        <div className="title-line"></div>
        <p>
          A sanctuary for the senses, Champaka Spa features a comfortable lounge
          area and three private treatment rooms for sessions of personal
          rejuvenation. This charming wellness facility overlooks a tropical
          valley that descends down to flowing river.
        </p>
        <a class="cool-link" href="#">
          READ THE STORY
        </a>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    height: 100%;
    opacity: 0.5;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/dynamic/spa.jpg");
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .cool-link {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    width: 100px;
    margin-top: 40px;
  }

  .cool-link::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: rgb(103, 147, 52);
    transition: width 0.3s;
  }

  .cool-link:hover::after {
    width: 100%;
    //transition: width .3s;
  }

  .section-content {
    position: relative;
    z-index: 1;
    color: #fff;
    width: 40%;
    padding-top: 50px;
    padding-right: 300px;
    margin-left: auto;

    h2 {
      font: 400 35px/1 Playfair Display, serif;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 0;
      position: relative;
      display: block;
      line-height: 56px;
      padding-bottom: 40px;
    }

    .title-line {
      width: 400px;
      height: 2px;
      background-color: rgb(103, 147, 52);
      margin-left: 80px;
    }

    p {
      padding-top: 40px;
      line-height: 1.5;
      color: #fff;
      max-width: 300px;
      margin: 0;
      font-size: 12px;
    }
  }
`;

export default ParallaxSectionEl;
