import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Img = ({
  src,
  position,
  objectFit,
  height,
  width,
  banner,
  alt,
  left,
  margin,
  right,
  top,
  bottom,
}) => {
  useEffect(() => {
    ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);

    // on scroll animation
    if (window.innerWidth > 767) {
      let revealContainers = document.querySelectorAll(".reveal");

      revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none reset",
          },
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
          xPercent: -100,
          ease: "Expo.easeInOut",
        });
        tl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.1,
          delay: -1.5,
          ease: "Expo.easeInOut",
        });
      });
    }
  });

  return (
    <StyledImg
      className="global-image reveal"
      objectFit={objectFit}
      margin={margin}
      position={position}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      height={height}
      width={width}
    >
      <img src={src ? src : "images/static/blur.jpg"} alt={alt || ""} />
    </StyledImg>
  );
};

const StyledImg = styled.div`
  position: ${(props) => props.position || "absolute"};
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
  top: ${(props) => props.top || 0};
  left: ${(props) => props.left || 0};
  bottom: ${(props) => props.bottom || 0};
  right: ${(props) => props.right || 0};
  margin: ${(props) => props.margin || 0};

  img {
    width: 100%;
    height: 100%;
    object-fit: ${(props) => props.objectFit || "cover"};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
