import React from 'react'
import MainForm from '../../components/MainForm'
import MyWorld from '../../components/MyWorld';
import SidePanel from '../../components/SidePanel'

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
    <div className="grid grid-cols-5 gap-0 h-screen">
        <div className="col-span-2">
          <SidePanel svgState={svgState} setSvgState={setSvgState} />
        </div>
        <div className="col-span-3">
          {(svgState.point === 'right') ? <MainForm /> : <MyWorld />}
        </div>
    </div>
  )
}

export default Register