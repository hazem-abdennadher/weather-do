import styled from 'styled-components';

const StyledPreloader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  /* background: #efefef; */
  width: 100%;
  height: 100vh;
  animation: preloader 1s ease-in-out forwards;
  animation-delay: 5s;
  background: rgba(255, 255, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.8px);
  -webkit-backdrop-filter: blur(13.8px);
  @keyframes preloader {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  & > .loader {
    position: absolute;
    margin-left: -55px;
    margin-top: -100px;
    height: 110px;
    width: 110px;
    left: 50%;
    top: 50%;
  }
  svg {
    width: 110px;
    height: 110px;
  }

  path {
    stroke: #9ea1a4;
    stroke-width: 0.25;
    fill: #241e20;
  }

  #cloud {
    position: relative;
    z-index: 2;
  }

  #cloud path {
    fill: #efefef;
  }

  #sun {
    margin-left: -10px;
    margin-top: 6px;
    opacity: 0;
    width: 60px;
    height: 60px;
    position: absolute;
    left: 45px;
    top: 15px;
    z-index: 1;

    animation-name: rotate;
    animation-duration: 16000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  #sun path {
    stroke-width: 0.18;
    fill: #9ea1a4;
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }

  /* Rain */
  .rain {
    position: absolute;
    width: 70px;
    height: 70px;
    margin-top: -32px;
    margin-left: 19px;
  }

  .drop {
    opacity: 1;
    background: #9ea1a4;
    display: block;
    float: left;
    width: 3px;
    height: 10px;
    margin-left: 4px;
    border-radius: 0px 0px 6px 6px;

    animation-name: drop;
    animation-duration: 350ms;
    animation-iteration-count: infinite;
  }

  .drop:nth-child(1) {
    animation-delay: -130ms;
  }

  .drop:nth-child(2) {
    animation-delay: -240ms;
  }

  .drop:nth-child(3) {
    animation-delay: -390ms;
  }

  .drop:nth-child(4) {
    animation-delay: -525ms;
  }

  .drop:nth-child(5) {
    animation-delay: -640ms;
  }

  .drop:nth-child(6) {
    animation-delay: -790ms;
  }

  .drop:nth-child(7) {
    animation-delay: -900ms;
  }

  .drop:nth-child(8) {
    animation-delay: -1050ms;
  }

  .drop:nth-child(9) {
    animation-delay: -1130ms;
  }

  .drop:nth-child(10) {
    animation-delay: -1300ms;
  }

  @keyframes drop {
    50% {
      height: 45px;
      opacity: 0;
    }

    51% {
      opacity: 0;
    }

    100% {
      height: 1px;
      opacity: 0;
    }
  }

  .text {
    letter-spacing: 1px;
    text-align: center;
    margin-left: -43px;
    font-weight: bold;
    margin-top: 20px;
    font-size: 11px;
    color: #a0a0a0;
    width: 200px;
  }
`;
export default StyledPreloader;