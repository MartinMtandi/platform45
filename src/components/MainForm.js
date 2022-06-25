import React from 'react'
import Radio from './Fields/Radio';
import Textfield from './Fields/Textfield';
import maleIcon from '../images/mars-symbol.svg';
import femaleIcon from '../images/venus-symbol.svg';
import classicIcon from '../images/card.svg';

function MainForm() {

    const gender = [
        {
            id: 1,
            label: 'Male',
            icon: maleIcon
        },
        {
            id: 2,
            label: 'Female',
            icon: femaleIcon
        }
    ];

    const membership = [
        {
            id: 1,
            label: 'Classic',
            icon: classicIcon
        },
        {
            id: 2,
            label: 'Silver',
            icon: classicIcon
        },
        {
            id: 3,
            label: 'Gold',
            icon: classicIcon
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className="w-3/5 mx-auto my-24">
            <form onSubmit={handleSubmit}>
                <Textfield name="fullname" type="text" label="Name" />
                <Radio options={gender} label="Gender"  name="gender"  />
                <Textfield name="dob" type="date" label="Date of Birth" />
                <Textfield name="email" type="email" label="Email" />
                <Textfield name="mobile" type="text" label="Mobile" />
                <Textfield name="customerId" type="text" label="Customer ID" />
                <Radio options={membership} label="Membership"  name="membership"  />
                <div className="text-right pt-12 font-medium">
                    <button className="text-charcoal-grey-900 rounded-md py-3 uppercase px-8 bg-slate-200 mr-3">Cancel</button>
                    <button type="submit" className="text-white-100 rounded-md py-3 uppercase px-12 bg-blue-green-900">Save</button>
                </div>
            </form>
        </div>
    )
}

export default MainForm