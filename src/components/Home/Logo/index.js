import './index.scss'
import logoM from '../../../assets/images/M-fill.png'
import React, { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 2,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={logoM} alt="M" ref={solidLogoRef} />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="381.000000pt"
        height="436.000000pt"
        viewBox="0 0 381.000000 436.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,436.000000) scale(0.100000,-0.100000)"
          fill="#600000"
          stroke="none"
        >
          <path
            ref={outlineLogoRef}
            d="M506 3774 c-14 -14 -16 -179 -16 -1669 0 -1490 2 -1655 16 -1669 23
-24 455 -24 478 0 14 14 16 126 16 1089 0 811 3 1080 12 1100 14 31 55 55 93
55 70 0 62 13 389 -682 169 -359 315 -659 324 -665 24 -19 306 -18 324 1 8 7
156 312 328 676 334 703 327 690 395 690 38 0 79 -24 93 -55 9 -20 12 -291 12
-1110 0 -972 2 -1085 16 -1099 23 -24 475 -24 498 0 14 14 16 179 16 1669 0
1490 -2 1655 -16 1669 -13 14 -57 16 -330 16 -174 0 -323 -4 -332 -9 -9 -5
-179 -359 -377 -786 -384 -830 -371 -805 -442 -805 -72 0 -63 -15 -457 809
-207 433 -377 776 -387 782 -10 5 -154 9 -328 9 -268 0 -312 -2 -325 -16z
m667 -106 c19 -40 175 -365 346 -723 172 -357 352 -732 399 -833 l87 -184 21
49 c12 26 68 147 124 268 56 121 142 306 190 410 184 397 300 647 400 863
l103 222 308 0 309 0 0 -1635 0 -1635 -225 0 -225 0 -2 1389 -3 1388 -57 -121
c-32 -66 -159 -335 -283 -596 -124 -261 -299 -629 -388 -817 l-162 -343 -136
0 -136 0 -373 793 c-205 435 -406 860 -446 942 l-72 150 -1 -1392 -1 -1393
-210 0 -210 0 0 1635 0 1635 305 0 304 0 34 -72z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
