import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
                <h1 className='name-logo'>Jensen Howard</h1>
                <Link className='page-link' to="/">Home</Link>
                <Link className='page-link' to="/about">About</Link>
        </div>
    )
}

export default Navbar
