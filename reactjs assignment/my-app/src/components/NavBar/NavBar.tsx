import React from 'react'
import './NavBar.css'


export const NavBar: React.FC = () => {
    return <div className="navbar">
    <div className="drawer">
        <i className="fas fa-bars"></i>
    </div>
    
    <div className="container">
        <div className="content">
            <div id="heading">
                Create a purchase receipt
            </div>
        </div>
        <div className="buttons">
            <div className="button">New</div>
            <div className="button">View</div>
            <div className="button">Print</div>
            <div className="button">Delete</div>
            <div className="button save">Save as draft</div>
            <div className="button submit">Submit</div>
        </div>
    </div>

    </div>
}

