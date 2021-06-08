import React from 'react'

import './index.css' // 开启css module @keyframes会不生效

const Font = () => (
  <section className="gradient">
    <div className="gradient-demo-1">雪花</div>
    <div className="gradient-demo-2">hover，缓慢渐变</div>
    <div className="gradient-demo-3">动态渐变</div>
    <div className="gradient-demo-4">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="gradient-demo-5">
      <svg width="100%" height="100%">
        <filter id="surface" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="20"
            result="noise"
          />
          <feDiffuseLighting
            in="noise"
            lightingColor="#d2d2d2"
            surfaceScale="8"
            result="light-left"
          >
            <feDistantLight azimuth="111" elevation="40" />
          </feDiffuseLighting>
        </filter>
      </svg>
    </div>
    <div className="gradient-demo-6">
      <div>条纹背景+毛玻璃</div>
    </div>
    <div className="gradient-demo-7" />
    <div className="gradient-demo-8">球形渐变生成星空背景</div>
    <div className="gradient-demo-9">渐变球形缓动背景</div>
    <div className="gradient-demo-10" />
    <div className="gradient-demo-11">
      <div className="img1" />
      <div className="img2" />
    </div>
    <div className="gradient-demo-12">
      <div className="node" />
    </div>
  </section>
)

export default Font
