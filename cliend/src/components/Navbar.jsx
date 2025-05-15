import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'


const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to='/'>Canan Develop</NavLink>
                    </div>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/contact'>Contact Us</NavLink></li>
                        {isLoggedIn ? <li><NavLink to='/logout'>Logout</NavLink></li> :
                            <>
                                <li><NavLink to='/register'>Register</NavLink></li>
                                <li><NavLink to='/login'>Login</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Navbar