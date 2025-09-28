import React from 'react';
import avatar from '../assets/images/avatar.png'

const Navbar = () => {

    const menu = [
        <a href='#'>Auction</a>,
        <a href='#'>Categories</a>,
        <a href='#'>How to works</a>
    ]

    return (
        <div className="navbar poppins py-6 px-4 lg:px-12 xl:px-[140px]">
            <div className="navbar-start">
                <h3 className='text-2xl md:text-3xl font-medium'><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 xl:gap-20 text-xl">
                    {menu.map((menuItem, index) => <li key={index}>{menuItem}</li>)}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn btn-circle hidden lg:flex">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs text-white bg-primary-content indicator-item">9</span>
                    </div>
                </button>
                <div className="avatar hidden lg:flex">
                    <div className="size-10 rounded-full">
                        <img src={avatar} />
                    </div>
                </div>

                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menu.map((menuItem, index) => <li key={index}>{menuItem}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;