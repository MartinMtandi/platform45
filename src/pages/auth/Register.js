import React from 'react'
import MainForm from '../../components/MainForm'
import SidePanel from '../../components/SidePanel'

function Register() {
  return (
    <div className="grid grid-cols-5 gap-4 h-screen">
        <div className="col-span-2">
          <SidePanel />
        </div>
        <div className="col-span-3">
          <MainForm />
        </div>
    </div>
  )
}

export default Register