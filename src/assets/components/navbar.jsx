import React from "react";

function Navbar(){
    return(<div className="nav-container">
    <div className="logo-title">
    <img className='logo' src="https://imgs.search.brave.com/KXL45Ky6mn4L5JZiL_5V069ITX6UnIz6ZTlN8LGDJfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLUljb24t/V2hpdGUtRGFyay1C/YWNrZ3JvdW5kLUxv/Z28ud2luZS5zdmc.svg"/>
    <h3 className="logo-name">Github</h3>
    </div>
    <nav className="nav-bar">
    <ul>
        <li>Overview</li>
        <li>Repositories</li>
        <li>Projects</li>
        <li>Packages</li>
        <li>Stars</li>
    </ul>
    </nav>

    </div>)
}
export default Navbar