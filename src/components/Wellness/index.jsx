import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Img } from "../Img";
import Title from "../Title";
import ReactHtmlParser from "react-html-parser";
import { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Wellness = () => {
  const bg = `url("/images/dynamic/spa.jpg")`;
  const elementRef = useRef(null);

  useEffect(() => {
    const box = document.querySelector(".parallaxAnim2");

    gsap.from(box, {
      y: -200,
      opacity: 0,
      duration: 2,
      ease: Power3.out,
      scrollTrigger: {
        trigger: box,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });

    parallaxTimeline.from(element, {
      y: 100,
      opacity: 1,
      duration: 1,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <StyledComponent
      ref={elementRef}
      style={{ backgroundImage: bg }}
      className={"wellness pt-200 pb-200"}
    >
      <Container>
        <Row>
          <Col sm={{ span: 6, offset: 6 }}>
            <div className="wellness__content parallaxAnim2">
              <h2>
                WELLNESS AT <br /> JANNATA
              </h2>
              <div class="title-line" data-v-5004e6cc=""></div>
              <p>
                A sanctuary for the senses, Champaka Spa features a comfortable
                lounge area and three private treatment rooms for sessions of
                personal rejuvenation. This charming wellness facility overlooks
                a tropical valley that descends down to flowing river.
              </p>
              <a class="cool-link" href="#">
                READ THE STORY
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
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

  .wellness {
    &__content {
      position: relative;
      z-index: 2;
      h2 {
        font: 400 35px/1 Playfair Display, serif;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin: 0;
        position: relative;
        display: block;
        line-height: 56px;
        color: #fff;
      }
      .title-line {
        background-color: rgb(103, 147, 52);
        height: 1px;
        margin-top: 40px;
        margin-bottom: 40px;
        position: relative;
        right: -108px;
        width: 400px;
      }
      p {
        max-width: 50%;
        color: #fff;
        font-size: 12px;
        margin-bottom: 40px;
      }
    }
  }
  .cool-link {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    width: 100px;
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
`;

export default Wellness;
