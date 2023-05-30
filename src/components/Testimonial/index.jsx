import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);
  return (
    <StyledComponent className={"testimonial pt-200 pb-200"}>
      <Container>
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            <div className="testimonial__content" ref={contentRef}>
              <p>
                We could not thank all the staff at Jannata Resort and Spa
                enough! We stayed for 3 night at the end of October for our
                Honeymoon. We was upgraded to a pool villa for our stay and
                treated like royalty, Our private infinity pool was so beautiful
                and the views from our villa were breath taking!
              </p>
              <small data-v-eab29924="">— Laurenbull29, Germany</small>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
  position: relative;
  background: #f0f0f5;
  &::before {
    position: absolute;
    content: "";
    background-image: url("/images/dynamic/leaf-before.png");
    top: 0;
    left: -25px;
    height: 100%;
    width: 250px;
  }
  .testimonial__content {
    text-align: center;
    p {
      color: #241843;
      font-size: 20px;
      line-height: 1.8rem;
      font-family: Open Sans, sans-serif;
      margin-bottom: 15px;
    }
    small {
      font-size: 15px;
      margin-top: 30px;
      color: #241843;
    }
  }
  li {
    margin-bottom: 10px;
  }
`;

export default Testimonial;
