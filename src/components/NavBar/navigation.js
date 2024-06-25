import React from 'react';
import './navigation.scss';
import { Outlet, NavLink, Link } from 'react-router-dom';
import {ReactComponent as Logo }from "../../assests/crown.svg";

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to ="/">
                <Logo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                <NavLink to="/shop" className="nav-link">SHOP</NavLink>
                <NavLink to="/signin" className="nav-link">SIGNIN</NavLink>
                </div>
            </div>
            <Outlet />
        </>

    )
}

export default Navigation