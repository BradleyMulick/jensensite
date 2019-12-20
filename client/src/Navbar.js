import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import {UserContext} from './context/UserProvider'

const Navbar = (props) => {
    const { token, logout } = useContext(UserContext)
    return (
        <div className='navbar'>
                
                <Link className='name-logo' to="/"><h1 className='name-logo'>Jensen Howard</h1></Link>
                <Link className='page-link' to="/">Home</Link>
                <Link className='page-link' to="/about">About</Link>
                {token && <Link className='page-link' to="/public">private</Link> }
                {token && <Link className='page-link' to="/profile">Post New</Link> }
                { token && <button onClick={logout}>Logout</button>}
        </div>
    )
}

export default Navbar
