import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";



// Register the plugin
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const SVGMorphAnimation = () => {
  const svgRef = useRef();
  const timeline = useRef();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;


    // Get all elements
    const beforeGroup = svg.querySelector('.before-state');
    const afterGroup = svg.querySelector('.after-state');
    const heavyLiftingText = svg.querySelector('#heavy-lifting-text');
    const horizontalLineTop = svg.querySelector('#horizontal-line-top');
    const horizontalLineBottom = svg.querySelector('#horizontal-line-bottom');
    const diagonalLine1 = svg.querySelector('#diagonal-line-1');
    const diagonalLine2 = svg.querySelector('#diagonal-line-2');
    const mainText = svg.querySelector('#main-text');
    

    // Create timeline
    timeline.current = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    gsap.set("#start path", { strokeWidth: 8, stroke: "#000" });


    // Animation sequence
    timeline.current
      // Fade out before state

      .to(beforeGroup, { opacity: 1, duration: 1 })
      // Change text content (can't morph text, so we crossfade)
      .to(mainText,{ opacity: 0, duration: 1 })
      .to(heavyLiftingText,{ opacity: 0, duration: 0.8 })
      .add("morphIt")
      .to(horizontalLineTop, {
        y: -180,
        transformOrigin: "50% 50%",
        transformBox: "fill-box",
        duration: 2,
      })
      .to(horizontalLineBottom, {
        y: 204,
        transformOrigin: "50% 50%",
        transformBox: "fill-box",
        duration: 2,
        delay: -2,
      })
      .to(diagonalLine1, {
        y: 20,
        rotation: 35,
        transformOrigin: "50% 50%",
        // transformBox: "fill-box",
        duration: 2,
        delay: -2,
      })
      .to(diagonalLine2, {
        y: 20,
        rotation: -35,
        transformOrigin: "50% 50%",
        // transformBox: "fill-box",
        duration: 2,
        delay: -2,
      })
      .to(afterGroup, { opacity: 1, duration: 1 })
        timeline.current.to("#animationSVG", { opacity: 0, duration: 1 })
  

    return () => timeline.current.kill();
  }, []);

  return (
    <div  id="animationSVG" className='animation-div'>
        <div style={{ width: '100%', backgroundColor:"#f1f4fa" }}>
        <svg 
            ref={svgRef} 
            
            viewBox="0 0 610 610" 
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }} // Usuń width/height, zostaw tylko display
        >
            {/* Background */}
            <rect width="100%" height="100%" fill="#f1f4fa" />

            <g id="start">
                <path id="horizontal-line-top" d="M0 242 L600 242" fill="none" stroke="#000000" strokeWidth="8" />
                <path id="horizontal-line-bottom" d="M0 268 L600 268" fill="none" stroke="#000000" strokeWidth="8" />
                <path id="diagonal-line-1" d="M0, 242 L600, 242" fill="none" stroke="#000000" strokeWidth="3" />
                <path id="diagonal-line-2" d="M0, 242 L600, 242" fill="none" stroke="#000000" strokeWidth="3" />
            </g>         
            
            {/* BEFORE STATE (initial state) */}
            <g className="before-state">
            
            {/* Texts */}
            <text id="heavy-lifting-text" x="300" y="403" fill="#000000" fontFamily="Montserrat" fontSize="70" textAnchor="middle">HEAVY LIFTING</text>
            <text id="main-text" x="300" y="148" fill="black" fontFamily="Montserrat" fontSize="70" textAnchor="middle">SAVE TIME</text>
            </g>
            
            {/* AFTER STATE (target state) */}
            <g className="after-state" style={{ opacity: 0 }}>
            
            <text id="easy-text" x="105" y="288" fill="#000000" fontFamily="Montserrat" fontSize="70" textAnchor="middle">EASY</text>
            <text id="link-text" x="505" y="288" fill="#000000" fontFamily="Montserrat" fontSize="70" textAnchor="middle">LINK</text>
            
            </g>
        </svg>
        </div>
    </div>
  );
};

export default SVGMorphAnimation;