import React from 'react';
import face from '../images/face.svg';
import { motion } from 'framer-motion';

function SidePanel({setSvgState, svgState}) {
  
  let svgVariants = svgState;

  const handleAnimate = () => {
    switch (svgState.point) {
      case 'right':
        setSvgState({
          ...svgState,
          initial: { rotate: 0},
          animate: {
            rotate: -180,
            transition: {duration: 1}
          },
          point: 'left' 
        })
        break;
      case 'left':
        setSvgState({
          ...svgState,
          initial: { rotate: 0},
          animate: {
            rotate: 0,
            transition: {duration: 1}
          },
          point: 'right' 
        })
        break;
      default:
        break;
    }
  }

  return (
    <div className="bg-yellow-900 h-screen">
      <div className="h-2/5 flex items-end">
        <img className="block mx-auto" src={face} alt="face" />
      </div>
      <div className="h-3/5 text-center py-24">
        <h2 className="font-bold text-4xl text-charcoal-grey-900">Front-end challenge!</h2>
        <p className="text-charcoal-grey-900 text-2xl mt-10 mb-16">This is a design that you will need to <br /> code up and impress us.</p>
        <button onClick={handleAnimate} className="focus:outline-none bg-charcoal-grey-900 rounded-full inline-flex items-center justify-center w-16 h-16">
          <motion.svg className={`h-8 w-8 ${(svgState.point === 'left') ? 'ml-5 mt-1' : 'ml-0 mt-0'} `} xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29"
            variants={svgVariants}
            initial="initial"
            animate="animate"
          >
            <path fill="#FFD300" fill-rule="evenodd" d="M16.969 14.502c0-.519-.195-1.038-.585-1.433L4.128.619a1.974 1.974 0 0 0-2.823 0 2.05 2.05 0 0 0 0 2.867L12.15 14.502 1.306 25.518a2.05 2.05 0 0 0 0 2.867c.78.793 2.043.793 2.823 0l12.256-12.45a2.04 2.04 0 0 0 .584-1.433" />
          </motion.svg>
        </button>
      </div>
    </div>
  )
}

export default SidePanel