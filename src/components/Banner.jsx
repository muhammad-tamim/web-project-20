import React from 'react';
import banner from '../assets/images/Banner-min.jpg'

const Banner = () => {
    return (
        <div
            className="relative min-h-screen bg-cover scale-x-[-1] flex flex-col justify-center"
            style={{
                backgroundImage:
                    `url(${banner})`,

            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className='px-4 lg:px-12 xl:px-[140px] scale-x-[-1]'>
                <div className='lg:max-w-[661px] text-center lg:text-left'>
                    <h1 className='font-semibold text-2xl md:text-5xl text-white pb-5'>Bid on Unique Items from Around the World</h1>
                    <p className='md:text-2xl font-light text-white pb-8'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                    <div>
                        <button className='btn rounded-[35px] btn-lg'>Explore Auction</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;