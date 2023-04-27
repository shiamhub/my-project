import React, { useContext, useState } from 'react';
import logo from '../../images/Logo.svg';
import { BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const [icon, setIcon] = useState(false);
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <nav className='bg-zinc-700 z-30 flex fixed top-0 left-0 right-0 items-center justify-between p-4 px-24'>
            <img src={logo} alt="" />
            <button className='md:hidden' onClick={() => setIcon(!icon)}>{icon ? <BiX className='bg-white rounded-sm w-7 h-7'></BiX> : <BiMenu className='bg-white rounded-sm w-7 h-7'></BiMenu>}</button>
            
            <div className={`flex flex-col text-cyan-200 md:flex-row absolute md:sticky md:bg-slate-800 gap-6 bg-blue-500 p-4 rounded-xl ${icon? 'top-0': '-top-64'}`}>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/manage">Manage Inventory</Link>              
                <Link to="/login">Login</Link>
                <Link to="/analyses">Analyses</Link>
                {
                    user && <span className='text-email'>{user.email}<button className='ml-3' onClick={handleLogOut}>Sign out</button></span> 
                }
            </div>
        </nav>
    );
};

export default Header;