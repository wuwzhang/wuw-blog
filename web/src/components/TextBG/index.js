import React from 'react'
import {
  Container,
  Demo1,
  Demo10,
  Demo11,
  Demo12,
  Demo13,
  Demo14,
  Demo15,
  Demo2,
  Demo3,
  Demo4,
  Demo5,
  Demo6,
  Demo7,
  Demo8,
  Demo9,
  Demo16,
  Demo17,
  Demo18,
  Demo19,
  Demo20,
  Demo21,
  Tip,
} from './styled'
const BG = ({ show = false }) => (
  <Container>
    <Demo1>
      <p>Hello World</p>
      <Tip show={show}>鼠标hover, text-decoration下移</Tip>
    </Demo1>
    <Demo2>
      <p data="Hello World Hello World">Hello World</p>
      <Tip show={show}>鼠标hover, text-decoration滚动</Tip>
    </Demo2>
    <Demo3>
      <p>
        <span>Hello</span> <span>World</span>
      </p>
      <Tip show={show}>文字强调</Tip>
    </Demo3>
    <Demo4>
      <p>
        Hello <a>World</a>
      </p>
      <Tip show={show}>模拟下划线, hover动效</Tip>
    </Demo4>
    <Demo5>
      <p>
        Hello <a>World</a>
      </p>
      <Tip show={show}>模拟下划线, hover动效</Tip>
    </Demo5>
    <Demo6>
      <p>
        Hello <a>World</a>
      </p>
      <Tip show={show}>模拟下划线, hover动效</Tip>
    </Demo6>
    <Demo16>
      <p>Hello World</p>
      <Tip show={show}>长阴影</Tip>
    </Demo16>
    <Demo17>
      <p>Hello World</p>
      <Tip show={show}>立体阴影</Tip>
    </Demo17>
    <Demo18>
      <p>Hello World</p>
      <Tip show={show}>多层阴影</Tip>
    </Demo18>
    <Demo19>
      <svg viewBox="0 0 260 180">
        <text x="2%" y="55%">
          Hello World
        </text>
      </svg>
      <Tip show={show}>线条文字</Tip>
    </Demo19>
    <Demo20>
      <p>Hello World</p>
      <Tip show={show}>图片+clip</Tip>
    </Demo20>
    <Demo21>
      <p>Hello World</p>
      <Tip show={show}>条纹背景</Tip>
    </Demo21>
    <Demo7>
      <p>Hello World</p>
      <Tip show={show}>霓虹灯</Tip>
    </Demo7>
    <Demo8>
      <p>
        <a>Hello World</a>
      </p>
      <Tip show={show}>闪烁霓虹灯</Tip>
    </Demo8>
    <Demo9>
      <p>
        Hello <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>l</span>
        <span>d</span>
      </p>
      <Tip show={show}>逐字闪烁霓虹灯</Tip>
    </Demo9>
    <Demo10>
      <p>Hello World</p>
      <Tip show={show}>文字融合</Tip>
    </Demo10>
    <Demo11>
      <p>Hello World</p>
      <Tip show={show}>Mask遮罩</Tip>
    </Demo11>
    <Demo12>
      <p>Hello World</p>
      <Tip show={show}>字体渐变动画</Tip>
    </Demo12>
    <Demo14>
      <p>Hello World</p>
      <Tip show={show}>高光</Tip>
    </Demo14>
    <Demo13>
      <p>Hello World</p>
      <Tip show={show}>高光+渐变</Tip>
    </Demo13>
    <Demo15>
      <p>Hello World</p>
      <Tip show={show}>线条文字</Tip>
    </Demo15>
  </Container>
)

export default BG
