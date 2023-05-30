import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TweenMax } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);

const Resort = () => {
  useEffect(() => {
    const heading = document.querySelectorAll(".heading");
    const description = document.querySelectorAll(".desc");
    const button = document.querySelectorAll(".cool-link");
    const imgAnim = document.querySelectorAll(".img-anim");
    const imgParallax = document.querySelectorAll(".img-parallax");
    TweenMax.from(heading, 1, {
      delay: 1,
      opacity: 0,
      x: -50,
      ease: Expo.easeInOut,
    });

    TweenMax.from(description, 2, {
      delay: 1,
      opacity: 0,
      x: -50,
      ease: Expo.easeInOut,
    });

    TweenMax.from(button, 3, {
      delay: 1,
      opacity: 0,
      x: -50,
      ease: Expo.easeInOut,
    });

    TweenMax.from(imgAnim, 3, {
      delay: 1,
      opacity: 0,
      x: -50,
      ease: Expo.easeInOut,
    });

    gsap.to(imgParallax, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".resort__inner-img",
        scrub: true,
      },
    });
  }, []);

  return (
    <StyledResort className="resort pt-200 pb-200">
      <Container>
        <Col sm={{ span: 10, offset: 2 }}>
          <div className="resort__bg">
            <Container>
              <Row>
                <Col sm={{ span: 6, offset: 6 }}>
                  <div className="resort__bg__heading pt-200 pb-200">
                    <h2 className="heading text5">
                      THE <br /> RESORT
                    </h2>

                    <div className="resort__bg__heading__para desc">
                      <p>
                        Jannata Resort & Spa is a boutique property with
                        tranquil valley views in the rural village of Sebali,
                        just outside of Ubud.
                      </p>
                      <p>
                        It is attuned to the surrounding environment through a
                        thoughtful design that respects Bali’s rich artistry and
                        cultural heritage.
                      </p>
                      <a class="cool-link" href="#">
                        READ THE STORY
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <div className="resort__inner-img">
          <div className="resort__inner-img__inner">
            <img
              className="img-anim img-parallax"
              src="/images/dynamic/nature.jpg"
              alt=""
              // ref={imgRef}
            />
          </div>
        </div>
      </Container>
    </StyledResort>
  );
};

const StyledResort = styled.section`
  background-color: #f0f0f5;
  position: relative;

  .resort {
    position: relative;

    &__inner-img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 700px;
      margin-top: 150px;

      &__inner {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 40%;
        height: 100%;
      }
    }
    &__bg {
      background-color: #d8d6e2;
      &__heading {
        h2 {
          font-size: 35px;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: #5f5c68;
          margin-bottom: 60px;
        }
        &__para {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 75%;
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform-origin: left;
  }
  .reveal {
    visibility: hidden;
    position: relative;
    width: 80%;
    height: 80%;
    max-width: 600px;
    overflow: hidden;
  }

  .cool-link {
    display: inline-block;
    color: rgb(103, 147, 52);
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

export default Resort;
