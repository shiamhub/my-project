import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='bg-zinc-700 flex items-center justify-between p-4 px-24'>
            <img src={logo} alt="" />
            <div className='text-cyan-50 flex gap-6'>
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;