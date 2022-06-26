import React from 'react'
import Radio from './fields/Radio';
import Textfield from './fields/Textfield';
import maleIcon from '../images/mars-symbol.svg';
import femaleIcon from '../images/venus-symbol.svg';
import classicIcon from '../images/card.svg';
import { motion } from 'framer-motion';

function MainForm() {

    const [state, setState] = React.useState({
        fullname: '',
        gender: '',
        dob: '',
        email: '',
        mobile: '',
        customerId: '',
        membership: 'classic',
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const gender = [
        {
            id: 1,
            label: 'Male',
            value: 'male',
            icon: maleIcon
        },
        {
            id: 2,
            label: 'Female',
            value: 'female',
            icon: femaleIcon
        }
    ];

    const membership = [
        {
            id: 1,
            label: 'Classic',
            value: 'classic',
            icon: classicIcon
        },
        {
            id: 2,
            label: 'Silver',
            value: 'silver',
            icon: classicIcon
        },
        {
            id: 3,
            label: 'Gold',
            value: 'gold',
            icon: classicIcon
        }
    ]

    const handleClear = () => {
        setState({
            ...state,
            fullname: '',
            gender: '',
            dob: '',
            email: '',
            mobile: '',
            customerId: '',
            membership: 'classic',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <motion.div 
            className="md:w-3/5 px-8 md:px-0 mx-auto my-24"
            id="form"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.1}}
        >
            <form onSubmit={handleSubmit}>
                <Textfield handleChange={handleChange} name="fullname" type="text" label="Name" value={state.fullname} />
                <Radio handleChange={handleChange} options={gender} label="Gender"  name="gender" value={state.gender}  />
                <Textfield handleChange={handleChange} name="dob" type="date" label="Date of Birth" value={state.dob} />
                <Textfield handleChange={handleChange} name="email" type="email" label="Email" value={state.email} />
                <Textfield handleChange={handleChange} name="mobile" type="text" label="Mobile" value={state.mobile} />
                <Textfield handleChange={handleChange} name="customerId" type="text" label="Customer ID" value={state.customerId} />
                <Radio handleChange={handleChange} options={membership} label="Membership"  name="membership" value={state.membership}  />
                <div className="text-right pt-12 font-medium">
                    <button onClick={handleClear} className="my-3 md:my-0 w-full md:w-fit text-charcoal-grey-900 rounded-md py-3 uppercase px-8 bg-slate-200 mr-3">Cancel</button>
                    <button type="submit" className="sm:block md:inline w-full md:w-fit my-3 md:my-0 text-white-100 rounded-md py-3 uppercase px-12 bg-blue-green-900">Save</button>
                </div>
            </form>
        </motion.div>
    )
}

export default MainForm