import React from 'react'
import MainForm from '../../components/MainForm'
import MyWorld from '../../components/MyWorld';
import SidePanel from '../../components/SidePanel';

function Register() {
  const [svgState, setSvgState] = React.useState({
    initial: { rotate: 0},
    animate: {
      rotate: 0,
      transition: {duration: 0}
    },
    point: 'right' 
  });

  return (
    <div className="md:grid md:grid-cols-5 gap-0 md:h-screen">
        <div className="md:col-span-2">
          <SidePanel svgState={svgState} setSvgState={setSvgState} />
        </div>
        <div className="md:col-span-3">
          {(svgState.point === 'right') ? <MainForm /> : <MyWorld />}
        </div>
    </div>
  )
}

export default Register