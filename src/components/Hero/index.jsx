import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Img } from "../Img";
import Title from "../Title";
import ReactHtmlParser from "react-html-parser";
import { useRef, useEffect } from "react";
import { Elastic, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineMax } from "gsap/gsap-core";
import { Power1 } from "gsap";

const HeroSection = () => {
  const bg = `url("/images/dynamic/spa_hero.jpg")`;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const textAnimation = () => {
      const textElement = document.querySelector(".text5");
      const words = textElement.textContent.split(" ");

      textElement.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      const spans = document.querySelectorAll(".text5 .word");
      const tl = gsap.timeline({ repeat: -1 });

      tl.staggerFrom(
        spans,
        0.5,
        { alpha: 0, x: 40, ease: Power1.easeOut },
        0.1,
        "+=1.2"
      ).staggerTo(
        spans,
        0.5,
        { alpha: 0, x: -40, ease: Power1.easeOut },
        0.1,
        "+=1.5"
      );
    };

    textAnimation();
  }, []);

  return (
    <StyledComponent
      style={{ backgroundImage: bg }}
      className={"wellness parallax-bg"}
    >
      <Container>
        <Row>
          <Col sm={12}>
            <div className="wellness__content boxxx">
              <h2 className="text5">CHAMPAKA SPA</h2>

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

  /* {effect5} */
  .text5 {
    @include absolute-top-left(50%, 50%);
    @include translate(-50%, -50%);
    letter-spacing: 0.5em;
    span {
      display: inline-block;
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
    background: #fff;
    transition: width 0.3s;
  }

  .cool-link:hover::after {
    width: 100%;
    //transition: width .3s;
  }
`;

export default HeroSection;
