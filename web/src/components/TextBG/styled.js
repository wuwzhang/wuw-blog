import { Col, Row } from 'antd'
import styled from 'styled-components'

export const Container = styled(Row)`
  width: 100%;
  height: 100%;
  display: grid;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: auto;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  div {
    height: 200px;
    scroll-snap-align: start;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 7px;
    min-height: 200px;
    background: #fafafa;
    p {
      margin: auto;
      font-family: 'Krona One', sans-serif;
      font-size: 3em;
      font-weight: 600;
      color: #666;
      white-space: nowrap;
    }
    &:nth-child(n + 10) {
      background: #000;
      section {
        color: #fff9;
      }
    }
    section {
      font-size: 12px;
      color: #3339;
    }
  }
`

export const Tip = styled.section`
  ${(props) =>
    props.show
      ? `
      position: absolute;
  left: 0;
  top: 0;
  background: #dfdfdf4f;
  padding: 2px 3px;
  `
      : ` display: none `};
`

export const Demo1 = styled(Col)`
  @property --offset {
    syntax: '<length>';
    inherits: false;
    initial-value: 0;
  }
  p {
    text-underline-offset: var(--offset, 1px);
    text-decoration: underline;
    transition: --offset 400ms, text-decoration-color 400ms;
    &:hover {
      --offset: 10px;
      color: #38f;
      text-decoration-color: #38f;
      cursor: pointer;
    }
  }
`
export const Demo2 = styled(Col)`
  p {
    position: relative;
    overflow: hidden;
    line-height: 2;
    text-decoration: none;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      color: transparent;
      white-space: nowrap;
      content: 'Hello World Hello World';
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #38f;
    }
    &:hover::before {
      animation: move 3s infinite linear;
    }
  }
  @keyframes move {
    100% {
      transform: translate(-209px, 0);
    }
  }
`
export const Demo3 = styled(Col)`
  p span {
    &:first-child {
      -webkit-text-emphasis: circle #3f8;
      text-emphasis: circle #3f8;
    }
    &:last-child {
      -webkit-text-emphasis: 'x' #38f;
      text-emphasis: 'x' #38f;
      -webkit-text-emphasis-position: under;
      text-emphasis-position: under;
    }
  }
`
export const Demo4 = styled(Col)`
  a {
    color: #38f;
    background: linear-gradient(90deg, #38f 50%, #0000 50%, #0000 1px);
    background-repeat: repeat-x;
    background-position: 105% 100%;
    background-size: 10px 2px;
    &:hover,
    &:active {
      color: #000;
      cursor: pointer;
      background-size: 10px 3px;
    }
  }
`
export const Demo5 = styled(Col)`
  a {
    color: #38f;
    cursor: pointer;
    background: linear-gradient(90deg, #38f, #38f);
    background-repeat: no-repeat;
    background-position: 120% 100%;
    background-size: 100% 3px;
    transition: 0.5s all;
    &:hover,
    &:active {
      color: #000;
      cursor: pointer;
      background-size: 10px 3px;
    }
  }
`
export const Demo6 = styled(Col)`
  a {
    color: #38f;
    cursor: pointer;
    background: linear-gradient(90deg, #38f, #38f),
      linear-gradient(90deg, #0ff, #0cc, #38f);
    background-repeat: no-repeat;
    background-position: 110% 100%, 0 100%;
    background-size: 100% 3px, 0 3px;
    transition: 0.5s all;
    &:hover,
    &:active {
      color: #000;
      background-size: 0 3px, 100% 3px;
    }
  }
`
export const Demo7 = styled(Col)`
  p {
    margin: auto;
    cursor: pointer;
    color: #cce7f8 !important;
    font-size: 2.5rem;
    animation: shining 0.1s alternate infinite;
  }

  @keyframes shining {
    from {
      text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
        0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(51, 136, 255, 0.5),
        0 0 21px rgba(51, 136, 255, 0.9), 0 0 34px rgba(51, 136, 255, 0.8),
        0 0 54px rgba(51, 136, 255, 0.9);
    }
    to {
      text-shadow: 0 0 6px rgba(182, 211, 207, 1),
        0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(51, 136, 255, 0.6),
        0 0 22px rgba(51, 136, 255, 0.8), 0 0 38px rgba(51, 136, 255, 0.9),
        0 0 60px rgba(51, 136, 255, 1);
    }
  }
`
export const Demo8 = styled(Col)`
  p a {
    color: #38f;
    text-decoration: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    animation: neon 1.5s ease-in-out infinite alternate;
  }

  @keyframes neon {
    0% {
      color: #38f;
      text-decoration: none;
    }
    50% {
      color: #fff;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #38f,
        0 0 70px #38f, 0 0 80px #38f, 0 0 100px #38f, 0 0 150px #38f;
    }
    80% {
      color: #fff;
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #38f,
        0 0 35px #38f, 0 0 40px #38f, 0 0 50px #38f, 0 0 75px #38f;
    }
  }
`
export const Demo9 = styled(Col)`
  p {
    background: none;
    span {
      animation: flicker 1s linear infinite;
      &:nth-child(1) {
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-delay: 0.5s;
      }
      &:nth-child(3) {
        animation-delay: 0.6s;
      }
      &:nth-child(4) {
        animation-delay: 0.8s;
      }
    }
  }

  @keyframes flicker {
    0% {
      color: #333;
    }
    5%,
    15%,
    25%,
    30%,
    100% {
      color: #fff;
      text-shadow: 0 0 5px #38f, 0 0 10px #38f, 0 0 20px #38f, 0 0 50px #38f;
    }
    10%,
    20% {
      color: #333;
      text-shadow: none;
    }
  }
`
export const Demo10 = styled(Col)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: contrast(20);
  p {
    font-size: 1.95rem !important;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff !important;
    letter-spacing: -0.5rem;
    transform: translate3d(-50%, -50%, 0);
    animation: letterspacing 5s infinite alternate ease-in-out;
  }

  @keyframes letterspacing {
    0% {
      letter-spacing: -1rem;
      filter: blur(0.3rem);
    }

    50% {
      filter: blur(0.5rem);
    }

    100% {
      color: #fff;
      letter-spacing: 0.5rem;
      filter: blur(0);
    }
  }
`
export const Demo11 = styled(Col)`
  p {
    -webkit-mask: radial-gradient(circle at 50% 0, #000, #0000 20%, #0000 0);
    mask: radial-gradient(circle at 50% 0, #000, #0000 20%, #0000 0);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    animation: scale2 5s infinite;
  }

  @keyframes scale2 {
    50%,
    100% {
      -webkit-mask-size: 100% 2000%;
      mask-size: 100% 2000%;
    }
  }
`
export const Demo12 = styled(Col)`
  p {
    color: #0000 !important;
    background: linear-gradient(45deg, #3f8, #38f, #ff269b);
    background-position: center center;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: cover;
    animation: huerotate 3s infinite;
  }
  @keyframes huerotate {
    100% {
      filter: hue-rotate(360deg);
    }
  }
`
export const Demo13 = styled(Col)`
  overflow: hidden;
  p {
    position: relative;
    overflow: hidden;
    color: #000;
    -webkit-text-stroke: 3px rgba(51, 136, 255, 0.527);
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      content: ' ';
      background-image: linear-gradient(45deg, #0ff, #ff269b, #38f);
      -webkit-mix-blend-mode: multiply;
      mix-blend-mode: multiply;
    }
    &::after {
      position: absolute;
      top: -100%;
      right: 0;
      bottom: 0;
      left: -100%;
      z-index: 1;
      content: '';
      background: radial-gradient(circle, #fff, #000 50%);
      background-size: 25% 25%;
      animation: mix 8s linear infinite;
      mix-blend-mode: color-dodge;
    }
  }

  @keyframes mix {
    to {
      transform: translate(50%, 50%);
    }
  }
`
export const Demo14 = styled(Col)`
  p {
    position: relative;
    color: #0000 !important;
    background-color: #38f;
    -webkit-background-clip: text;
    background-clip: text;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      width: 100%;
      height: 100%;
      content: 'Hello World';
      background-image: linear-gradient(
        120deg,
        #0000 0%,
        #0000 6rem,
        #fff 11rem,
        #0000 11.15rem,
        #0000 15rem,
        rgba(255, 255, 255, 0.3) 20rem,
        #0000 25rem,
        #0000 27rem,
        rgba(255, 255, 255, 0.6) 32rem,
        #fff 33rem,
        rgba(255, 255, 255, 0.3) 33.15rem,
        #0000 38rem,
        #0000 40rem,
        rgba(255, 255, 255, 0.3) 45rem,
        #0000 50rem,
        #0000 100%
      );
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      background-clip: text;
      background-size: 150% 100%;
      animation: shine-1 3s linear infinite;
    }
    @keyframes shine-1 {
      0% {
        background-position: 50% 0;
      }
      100% {
        background-position: -190% 0;
      }
    }
  }
`
export const Demo15 = styled(Col)`
  p {
    position: relative;
    color: #0000 !important;
    background: linear-gradient(#38f 0 100%) left / 0 no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    transition: 0.5s linear;
    -webkit-text-stroke: 2px #38f;
    animation: shine 3s linear infinite;
  }
  @keyframes shine {
    0% {
      background-size: 0%;
    }
    100% {
      background-size: 100%;
    }
  }
`
export const Demo16 = styled(Col)`
  p {
    color: #131313 !important;
    text-shadow: 1px -1px 0 #767676, -1px 2px 1px #787777, -2px 4px 1px #828181,
      -3px 6px 1px #8f8e8d, -4px 8px 1px #9e9c9c, -5px 10px 1px #adabab,
      -6px 12px 1px #bcbbba, -7px 14px 1px #cbc9c8, -8px 16px 1px #d8d6d5,
      -9px 18px 1px #e2e0df;
  }
`

export const Demo17 = styled(Col)`
  p {
    color: #e0dfdc !important;
    letter-spacing: 0.1em;
    text-shadow: 0 -1px 0 #ffffff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c,
      0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424,
      0 7px 0 #222222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c;
  }
`
export const Demo18 = styled(Col)`
  p {
    color: #66757f !important;
    text-shadow: -6px 6px 0px #8899a6, -12px 12px 0px #ccd6dd,
      -18px 18px 0px #e1e8ed;
  }
`
export const Demo19 = styled(Col)`
  svg {
    width: calc(100vw / 3);
    height: 180px;
    text {
      animation: stroke 5s infinite alternate;
      font-size: 3rem;
      font-weight: 500;
    }
  }

  @keyframes stroke {
    0% {
      fill: rgba(72, 138, 20, 0);
      stroke: #38f;
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 0.8;
    }
    50% {
      fill: rgba(72, 138, 20, 0);
      stroke: #38f;
      stroke-width: 1.5;
    }
    70% {
      fill: rgba(72, 138, 20, 0);
      stroke: #38f;
      stroke-width: 2;
    }
    90%,
    100% {
      fill: #38f;
      stroke: rgba(54, 95, 160, 0);
      stroke-dashoffset: -20%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }
`
const url = 'https://images7.alphacoders.com/410/thumb-1920-410661.jpg'
export const Demo20 = styled(Col)`
  p {
    color: #0000 !important;
    background: url(${url}) no-repeat center center;
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
  }
`

export const Demo23 = styled(Col)`
  color: #202020;
  background-color: #2d2d2d;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111111, 2px 2px 1px #363636;
`

export const Demo22 = styled(Col)`
  video,
  p {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  video {
    object-fit: cover;
  }

  p {
    background: #fff !important;
    mix-blend-mode: screen;
    text-align: center;
  }
`
export const Demo21 = styled(Col)`
  p {
    background-color: #333;
    background-image: linear-gradient(
      45deg,
      transparent 45%,
      hsla(48, 20%, 90%, 1) 45%,
      hsla(48, 20%, 90%, 1) 55%,
      transparent 0
    );
    background-size: 0.05em 0.05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px #111;
  }
`
