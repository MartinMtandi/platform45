import React from 'react'
import MainForm from '../../components/MainForm'
import MyWorld from '../../components/MyWorld';
import SidePanel from '../../components/SidePanel';

function Register() {

  const [svgState, setSvgState] = React.useState({
    initial: { rotate: 0 },
    animate: {
      rotate: 0,
      transition: { duration: 0 }
    },
    point: 'right'
  });

  const [screenSize, getDimension] = React.useState({
    dynamicWidth: window.innerWidth,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    })
  }

  console.log(screenSize.dynamicWidth);

  React.useEffect(() => {
    if(screenSize.dynamicWidth <= 420){
      setSvgState({
        ...svgState,
        animate: {
          rotate: 90,
          transition: { duration: 1 }
        },
        point: 'bottom'
      })
    }else{
      setSvgState({
        ...svgState,
        initial: { rotate: 0 },
        animate: {
          rotate: 0,
          transition: { duration: 0 }
        },
        point: 'right'
      })
    }
  }, [screenSize.dynamicWidth]);

  React.useEffect(() => {
    window.addEventListener('resize', setDimension);

    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize.dynamicWidth])

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