import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxElement = () => {
  const elementRef = useRef(null);

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
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <StyledParallaxElement ref={elementRef}>
      <h1>Parallax Element</h1>
      <p>This element will have a parallax animation.</p>
      <h2>Famous quotes are mostly made up.</h2>
    </StyledParallaxElement>
  );
};

const StyledParallaxElement = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: #ffffff;
`;

export default ParallaxElement;
