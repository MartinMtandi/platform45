import React from 'react'

function Radio(props) {
  return (
        <div className="flex items-center text-charcoal-grey-900 py-3">
            <label className="w-36 font-medium mr-1">{props.label}</label>
            {props.options.map(el => (
                <div key={el.id}>
                    <div className="flex items-center mr-6">
                        <input onChange={props.handleChange} id={el.value} type="radio" value={el.value} name={props.name} className="hidden" checked={props.value === el.value} />
                        <label htmlFor={el.value} className="flex items-center cursor-pointer font-medium text-slate-400">
                            <button className="w-14 h-14 bg-slate-100 inline-flex items-center justify-center mr-5 rounded-full flex-no-shrink">
                                <img alt="icon" className="w-7 h-7" src={el.icon} />
                            </button>
                            {el.label}
                        </label>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Radio