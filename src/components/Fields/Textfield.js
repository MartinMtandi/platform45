import React from 'react'

function Textfield(props) {
  return (
    <div className="md:flex md:items-center text-charcoal-grey-900 py-3">
        <label className="md:w-48 font-medium">{props.label}</label>
        <div className="w-full">
          <input onChange={props.handleChange} value={props.value} name={props.name} type={props.type} className="p-4 bg-slate-100  font-bold  w-full rounded-md focus:bg-slate-50 focus:outline-slate-200" />
        </div>
    </div>
  )
}

export default Textfield