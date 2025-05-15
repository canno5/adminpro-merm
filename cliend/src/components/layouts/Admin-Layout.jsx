import React, { useState } from "react"
import { Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
    const location = useLocation();
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <h1>Loading</h1>
    }
    if (!user.isAdmin) {
        return <Navigate to="/" />;
    }
    const [contact, setContact] = useState({
        email: "",
        password: ""
    })

    const InputEvent = (e) => {
        const { value, name } = e.target;
        setContact({
            ...contact,
            [name]: value
        })
    }
    const dataSubmit = () => {
        toast.success("Helli Admin")
    }

    return (
        <>
            <header>
                <div className="container container-admin bg-none">
                    <nav>
                        <ul>
                            <li><NavLink to="/admin/users">
                                <FaUser /> users</NavLink></li>
                            <li>
                                <NavLink to="/admin/contacts">
                                    <MdContacts /> contact</NavLink></li>
                            <li><NavLink to="/admin/services">
                                <MdOutlineMiscellaneousServices /> services</NavLink></li>
                            <li><NavLink to="/admin/home">
                                <IoMdHome /> home</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />

            {location.pathname === "/admin" ?
                <div className="registraction-form admin_vertical_center">
                    <form action="#" method="post" className="adminForm">
                        <h2 className='heading-register mb-3 text-center'>Admin</h2>
                        <div className="inputBox">
                            <label htmlFor="Email">Email Address</label>
                            <input type="email" name="email" id="email" placeholder='Email Address' onChange={InputEvent} value={contact.email} required autoComplete="off" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Password">Password</label>
                            <input type="password"
                                name="password"
                                id="password"
                                placeholder='Password'
                                onChange={InputEvent}
                                value={contact.password}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <button onClick={dataSubmit} className="d-bock mx-auto">Login</button>

                    </form>
                </div> : <h1>Only Access is Admin</h1>
            }
        </>
    )
}
