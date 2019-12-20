import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {UserContext} from './context/UserProvider'

const Navbar = (props) => {
    const { token } = useContext(UserContext)
    return (
        <div className='navbar'>
                
                <Link className='name-logo' to="/"><h1 className='name-logo'>Jensen Howard</h1></Link>
                <Link className='page-link' to="/">Home</Link>
                <Link className='page-link' to="/about">About</Link>
                { token && <button onClick={props.logout}>Logout</button>}
        </div>
    )
}

export default Navbar
