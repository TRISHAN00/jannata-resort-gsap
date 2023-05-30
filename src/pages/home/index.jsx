import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap-trial/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      content: "#content",
      smooth: 3,
      effects: true,
    });

    smoother.effects("img", { speed: "auto" });
  });

  return (
    <StyledComponent>
      <img id="content" src="/images/dynamic/nature_2.jpg" alt="" />
      <img id="content" src="/images/dynamic/spa_hero.jpg" alt="" />
      <img id="content" src="/images/dynamic/nature_2.jpg" alt="" />
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #111;
    overscroll-behavior: none;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .container {
    max-width: 2500px;
    margin: 0 auto;
  }

  .spacer {
    height: 100vh;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 33.3vh;
    width: 100vw;
    margin: 0 auto;

    .image_cont {
      position: relative;
      overflow: hidden;
      height: 80vh;
      max-height: 500px;
    }

    img {
      position: absolute;
      width: 100%;
      height: 160%;
      object-fit: cover;
      bottom: 0;
    }

    .image_cont:nth-child(1) {
      grid-column: 1 / -1;
      grid-row: 1;
      height: 95vh;
    }

    .image_cont:nth-child(2) {
      grid-column: 2 / span 8;
      grid-row: 2;
      height: 60vh;
    }

    .image_cont:nth-child(3) {
      grid-column: 4 / span 8;
      grid-row: 3;
      height: 60vh;
      img {
        object-position: right;
      }
    }

    .image_cont:nth-child(4) {
      grid-column: 1 / -1;
      grid-row: 4;
      height: 60vh;
    }

    .image_cont:nth-child(5) {
      grid-column: 4 / span 8;
      grid-row: 5;
      height: 80vh;
    }

    .image_cont:nth-child(6) {
      grid-column: 2 / span 8;
      grid-row: 6;
      height: 80vh;
    }

    @media screen and (min-width: 1000px) {
      .image_cont {
        max-height: unset;
      }

      .image_cont:nth-child(2) {
        grid-column: 2 / span 4;
      }

      .image_cont:nth-child(3) {
        grid-column: 8 / span 4;
      }

      .image_cont:nth-child(5) {
        grid-column: 8 / span 4;
      }

      .image_cont:nth-child(6) {
        grid-column: 2 / span 4;
      }
    }
  }

  .overlay {
    position: fixed;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 10rem;
    width: 100vw;
    margin: 0 auto;
    z-index: -1;

    div {
      opacity: 0.2;
      border-left: 0.5px white solid;
      border-right: 0.5px white solid;
    }
  }
`;

export default MyComponent;
