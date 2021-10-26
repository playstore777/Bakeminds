import React from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './FormFields.css'

export const FormFields:React.FC = () => {
    return <div className="FormFields">
        <input type="text" placeholder="enter some text"/>
        <select>
            <option>active</option>
            <option>offline</option>
        </select>
        <input type="Date" />
            {/* <Calendar onChange={(e: any) => {console.log(e)}}/> */}
        
        <input type="text" placeholder="enter some text"/>
        <select>
            <option>yes</option>
            <option>no</option>
        </select>

        <input type="text" placeholder="enter some text"/>
        <select>
            <option>yes</option>
            <option>no</option>
        </select>

        <input type="text" placeholder="enter some text"/>
        <select>
            <option>yes</option>
            <option>no</option>
        </select>
    </div>
}
