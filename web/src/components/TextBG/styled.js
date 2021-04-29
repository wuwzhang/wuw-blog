import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 1000px;
  display: grid;
  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
  grid-template-rows: 200px 200px 200px;
  grid-row-gap: 0px;
  grid-column-gap: 0px;
  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 7px;
    background: #fafafa;
    p {
      margin: auto;
      font-family: 'Krona One', sans-serif;
      font-size: 3em;
      color: #666;
      white-space: nowrap;
    }
    &:nth-child(n + 7) {
      background: #000;
    }
  }
`

export const Demo1 = styled.div`
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
export const Demo2 = styled.div`
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
      content: ${(props) => props.data};
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
export const Demo3 = styled.div`
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
export const Demo4 = styled.div`
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
export const Demo5 = styled.div`
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
export const Demo6 = styled.div`
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
export const Demo7 = styled.div`
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
export const Demo8 = styled.div`
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
export const Demo9 = styled.div`
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
export const Demo10 = styled.div`
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
export const Demo11 = styled.div`
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
export const Demo12 = styled.div`
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
export const Demo13 = styled.div`
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
export const Demo14 = styled.div`
  p {
    position: relative;
    color: #38f !important;
    background-color: #38f;
    -webkit-background-clip: text;
    background-clip: text;
    &::after {
      color: #0000;
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
      animation: shine 5s infinite linear;
    }
  }
  @keyframes shine {
    0% {
      background-position: 50% 0;
    }
    100% {
      background-position: -190% 0;
    }
  }
`
export const Demo15 = styled.div`
  p {
    position: relative;
    color: #0000 !important;
    background: linear-gradient(#38f 0 100%) left / 0 no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    transition: 0.5s linear;
    -webkit-text-stroke: 2px #38f;
    animation: shine 5s alternate infinite;
  }
  @keyframes shine {
    0% {
      background-size: 0%;
    }
    40% {
      background-size: 100%;
    }
    80% {
      background-size: 0%;
    }
    100% {
      background-size: 100%;
    }
  }
`
