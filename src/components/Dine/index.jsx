import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Img } from "../Img";
import { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";

const Dine = () => {
  useEffect(() => {
    const box = document.querySelector(".parallaxAnim");

    gsap.from(box, {
      y: -200,
      opacity: 1,
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

  return (
    <StyledDine className="dine pt-200 pb-200">
      <Container>
        <div className="dine__inner">
          <Img src={"/images/dynamic/span-restaurant.jpg"} />
          <div className="dine__inner__box parallaxAnim">
            <h2 className="heading">
              DINE AT
              <br />
              <span>AMATERAS</span>
            </h2>
            <div class="title-line" data-v-5004e6cc=""></div>
            <div className="dine__inner__box__content">
              <p>
                Amateras Restaurant at Jannata Resort & Spa serves an extensive
                menu of Western and Asian cuisine that is driven by quality
                ingredients.
              </p>
              <p>
                The restaurant is located next to the lobby and extends out onto
                an open terrace for an alfresco dining experience. It is
                elevated over the main swimming pool with tropical views of lush
                valley greenery in the distance.
              </p>
              <a class="cool-link" href="#">
                READ THE STORY
              </a>
            </div>
          </div>
        </div>
      </Container>
    </StyledDine>
  );
};

const StyledDine = styled.section`
  background-color: #f0f0f5;
  position: relative;

  .dine {
    &__inner {
      padding-top: calc(400 / 900 * 100%);
      position: relative;
      img {
        width: 90%;
      }
      &__box {
        background: #fff;
        position: absolute;
        bottom: -100px;
        width: 40%;
        /* height: 100%; */
        right: 50px;
        padding: 50px 60px 70px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        z-index: 3;

        .title-line {
          background-color: rgb(103, 147, 52);
          height: 1px;
          margin-top: 40px;
          margin-bottom: 40px;
          position: relative;
          right: -108px;
        }

        h2 {
          color: #5f5c68;
          font-size: 35px;
          line-height: 60px;
          span {
            color: #679334;
          }
        }
        &__content {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 75%;
          p {
            font-size: 12px;
            line-height: 1.8;
            font-family: Open Sans, sans-serif;
            font-weight: 400;
            color: #5f5c68;
          }
        }
      }
    }
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

export default Dine;
