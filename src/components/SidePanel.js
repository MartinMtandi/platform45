import React from 'react';
import face from '../images/face.svg';
import arrow from '../images/arrow.svg';

function SidePanel() {
  return (
    <div className="bg-yellow-900 h-screen">
        <div className="h-2/5 flex items-end">
          <img className="block mx-auto" src={face} alt="face" />
        </div>
        <div className="h-3/5 text-center py-24">
            <h2 className="font-bold text-4xl text-charcoal-grey-900">Front-end challenge!</h2>
            <p className="text-charcoal-grey-900 text-2xl mt-10 mb-16">This is a design that you will need to <br /> code up and impress us.</p>
            <button className="focus:outline-none bg-charcoal-grey-900 rounded-full inline-flex items-center justify-center w-16 h-16">
              <img className="h-8 w-8" src={arrow} alt="arrow" />
            </button>
        </div>
    </div>
  )
}

export default SidePanel