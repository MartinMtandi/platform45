import React from 'react'

function Textfield(props) {
  return (
    <div className="flex items-center text-charcoal-grey-900 py-3">
        <label className="w-48 font-medium">{props.label}</label>
        <div className="w-full">
          <input name={props.name} type={props.type} className="p-4 bg-slate-100  font-bold  w-full rounded-md focus:bg-slate-50 focus:outline-slate-200" />
        </div>
    </div>
  )
}

export default Textfield