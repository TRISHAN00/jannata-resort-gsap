import { createGlobalStyle, css } from "styled-components";
import { hover, text, title } from "./globalStyleVars";

function createCSS() {
  let styles = "";

  for (let i = 2; i < 20; i += 1) {
    styles += `
        .anim-active.fade-up:nth-child(${i}) {
          transition-delay: ${i * 0.12}s;
        }
     `;
  }

  for (let a = 2; a < 100; a += 1) {
    styles += `
        .anim-active.fade-right span:nth-child(${a}) {
          transition-delay: ${a * 0.03}s;
        }
     `;
  }

  return css`
    ${styles}
  `;
}

export default createGlobalStyle`

  ${createCSS()}
  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* @font-face {
    font-family: 'Graphik';
    src: url('fonts/Graphik-Bold.woff2') format('font-woff2'),
    url('fonts/Graphik-Bold.woff') format('font-woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  } */

  
  body {
    /* font-family: 'Euclid Square', Arial, Helvetica, freesans, sans-serif !important; */
    font-family: Playfair Display,serif;
    font-style: normal;
    margin: 0;
    color: ${text};
    padding: 0;
    overflow-x: hidden;
    overscroll-behavior: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    font-size: 16px;
    line-height: 24px;
  }

  a {
    transition: color .3s ease;
    text-decoration: none;

    &:hover {
      color: ${hover} !important;
      text-decoration: none;
      outline: none;
      box-shadow: none;
    }

    &:focus {
      text-decoration: none;
      outline: none;
      box-shadow: none;
      color: ${text};
    }
  }

  ::selection {
    background: ${hover};
    color: #FFF;
  }

  p, a, h4, h3, h5, h6 {
    color: ${text};
    font-weight: 400;
    margin: 0;
    font-family: Open Sans,sans-serif;
  }

  h1, h2 {
      //font-family: ${title};
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }


  .btn:focus, button:focus, button:active:focus, .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
    outline: none;
    box-shadow: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid rgba(0, 0, 0, 0);
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }


  table {
    width: 100%;
  }

  form div {
    position: relative;
  }

  .form-control {
    box-shadow: none;
    outline: 0;
    border-radius: 0;

    &:focus {
      box-shadow: none;
    }
  }

  .p-0 {
    padding: 0 !important;
  }

  .pl-0 {
    padding-left: 0;
  }

  .pr-0 {
    padding-right: 0;
  }

  .pt-200 {
    padding-top: 200px;
    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .pb-200 {
    padding-bottom: 200px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pt-160 {
    padding-top: 160px;
    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .pb-160 {
    padding-bottom: 160px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pb-130 {
    padding-bottom: 130px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pt-100 {
    padding-top: 100px;
    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }

  .pb-100 {
    padding-bottom: 100px;
    @media (max-width: 767px) {
      padding-bottom: 60px;
    }
  }

  .pt-80 {
    padding-top: 80px;
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }

  .pb-80 {
    padding-bottom: 80px;
    @media (max-width: 767px) {
      padding-bottom: 40px;
    }
  }


  .MuiDrawer-paper {
    width: 500px !important;
    padding: 20px;
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }

  .swiper-button-disabled {
    opacity: 0 !important;
  }

  @media (min-width: 1500px) {
    .container {
      //min-width: 1366px;
      min-width: 85%;
      margin: auto;
    }
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    .container, .container-lg, .container-md, .container-sm {
      max-width: 90%;
      margin: auto;
    }
  }


  @media (max-width: 767px) {
    .container, .container-sm {
      max-width: 100%;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }


  //react select
  .css-yk16xz-control, .css-1pahdxg-control {
    height: 50px;
    border-radius: 0 !important;
    padding-left: 5px;
    font-size: 16px;
    outline: none !important;
    border-color: #D9D9D9 !important;
    box-shadow: none !important;

    .css-1wa3eu0-placeholder {
      font-weight: 300;
      line-height: 21px;
      color: rgba(0, 0, 0, 0.5);
      outline: none;
    }

    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
      margin-right: 10px;
    }
  }

  .css-2613qy-menu {
    border-radius: 0 !important;
    margin-top: 0 !important;
  }

  //animation class


  .info-window {
    max-width: 200px;
  }

  .gm-style-iw {
    border-radius: 0 !important;
  }

  .swiper-pagination-bullet {
    outline: none;
  }

  .css-nmuc1a-menu {
    z-index: 5 !important;
  }


  .map-info__img {
    img {
      height: 100px;
      margin-bottom: 12px;
      object-fit: cover;
    }
  }

  .map-info__content {
    h4 {
      font-size: 20px;
    }

    p {
      margin-bottom: 5px;
    }
  }

  .overlay {
    position: fixed;
    height: 100vh;
    width: 100%;
    //background-color: rgba(0,0,0,0.5);
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    display: none;

    &.show {
      display: block;
    }
  }

  .form-control.has-error {
    border-color: #dc004e !important;
  }

  .has-error .find-retainer-filter__control {
    border-color: #dc004e !important;
  }

  //preloader
  .content-loader {
    position: absolute;
    height: 70%;
    width: 70%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .loading-before-submit {
    position: fixed;
    height: 100vh;
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
    }
  }


  .swiper-slide {
    height: auto;
  }

  .slick-slide {
    div {
      outline: none !important
    }
  }

  button, button:active, button:focus, button:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }


  .hover {
    position: relative;
    overflow: hidden;

    span {
      z-index: 2;
    }

    &:after {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: ${hover};
      transition: all .5s ease;
      border-radius: 19px;
    }

    &:hover {
      &:after {
        height: 100%;
        width: 100%;
      }
    }
  }


  .modal-backdrop {
    background-color: rgb(34 31 31 / 90%);
    min-width: 100%;
    //z-index: 9999;

    &.show {
      opacity: 1;
    }
  }


  .valid {
    color: ${hover};
    position: absolute;
    font-size: 12px;
    top: 44px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }


  //menu fixed
  .scroll-down .menu-desktop {
    transform: translate3d(0, -100%, 0);
  }

  .scroll-up .menu-desktop {
    background-color: #fff;

    .menu-desktop__hamburger__lines {
      &__inner .line {
        background-color: #191818;
      }

      p {
        color: #191818;
      }
    }

    .menu-desktop__hamburger .controller svg {
      path {
        fill: #191818;
      }

      line {
        stroke: #191818;
      }
    }

    .dc-btn a {
      color: #191818;

      &:hover {
        color: #191818 !important;
      }

      &:after, &:before {
        box-shadow: 0 0 0 1px #191818;
      }
    }
  }

  .form-control:disabled {
    background-color: transparent;
  }

  @media (max-width: 600px) {
    .prevent-overflow {
      overflow: hidden;
      height: 100vh;
    }
  }

  .Toastify__toast-container {
    z-index: 99999999;
  }

  .mobile-menu {
    #fb-root, .fb_reset {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  }

  .slick-slide {
    -webkit-transform: translate3d(0, 0, 0);
  }

  .reveal, .revealFast {
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;

    img {
      transform-origin: left;
    }

    .global-image {
      background: transparent;
    }
  }

  //calender
  ._3efP_GeH5kyBAzqnLzL._kN_bCa3VNYpqFLH311L {
    border-radius: 0 !important;
  }

  //video modal 
  .modal-video-close-btn:before, .modal-video-close-btn:after {
    background-color: ${hover};
  }

  .page-loader {
    position: fixed;
    background-color: rgb(36, 24, 67);
    width: 100vw;
    z-index: 999999999;
    overflow: hidden;
    //opacity: 0;
    //height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    //left: 0; //width: 0;
    //transition: all 2.6s ease;
    //.anim-logo {
    //  width: 130px;
    //  overflow: hidden;
    //  height: fit-content;
    //  position: absolute;
    //  left: 0;
    //  right: 0;
    //  top: 0;
    //  bottom: 0;
    //  opacity: 0;
    //  margin: auto;
    //  z-index: 2;
    //
    //  img {
    //    height: 55px;
    //  }
    //}

    //.hide-logo {
    //  background-color: #010A1A;
    //  width: 50%;
    //  height: 100vh;
    //  top: 0;
    //  left: 0;
    //  right: 0;
    //  margin: auto;
    //  position: absolute;
    //  z-index: 999;
    //}

    .pre-loader__img {
      //position: fixed;
      height: 100px;
      width: 100px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(36, 24, 67);
      z-index: 99999999;

      //flex: 1;
      margin: auto;
      opacity: 0;

      img {
        display: block;
      }

      .top {
        height: 8px;
      }

      .bottom {
        height: 30px;
        margin-top: 5px;
        animation: flip 1s linear infinite;
      }

      @keyframes flip {
        0% {
          transform: rotateY(0deg)
        }
        100% {
          transform: rotateY(180deg)
        }
      }
    }

  }
`;
