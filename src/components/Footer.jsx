import React from 'react';

const Footer = () => {

    const links = [
        <a href="#">Bid.</a>,
        <a href="#">Win.</a>,
        <a href="#">Own.</a>
    ]

    const menu = [
        <a href='#'>Home</a>,
        <a href='#'>Auction</a>,
        <a href='#'>Categories</a>,
        <a href='#'>How to works</a>
    ]

    return (
        <div className='text-center py-[130px]'>
            <h3 className='text-2xl md:text-3xl font-medium pb-3'><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337]'>Gallery</span></h3>
            <ul className='flex justify-center gap-4 pb-6'>
                {links.map((link, index) => <li key={index}>{link}</li>)}
            </ul>
            <ul className='flex justify-center gap-20 pb-8'>
                {menu.map((menuItem, index) => <li key={index}>{menuItem}</li>)}
            </ul>
            <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;