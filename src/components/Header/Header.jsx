import React, { useState } from 'react';
import logo from '../../images/Logo.svg';
import { BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [icon, setIcon] = useState(false);

    return (
        <nav className='bg-zinc-700 z-30 flex fixed top-0 left-0 right-0 items-center justify-between p-4 px-24'>
            <img src={logo} alt="" />
            <button className='md:hidden' onClick={() => setIcon(!icon)}>{icon ? <BiX className='bg-white rounded-sm w-7 h-7'></BiX> : <BiMenu className='bg-white rounded-sm w-7 h-7'></BiMenu>}</button>
            
            <div className={`flex flex-col text-cyan-200 md:flex-row absolute md:sticky md:bg-slate-800 gap-6 bg-blue-500 p-4 rounded-xl ${icon? 'top-0': '-top-64'}`}>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/Manage Inventory">Manage Inventory</Link>              
                <Link to="/Login">Login</Link>
                <Link to="/analyses">Analyses</Link>
            </div>
        </nav>
    );
};

export default Header;