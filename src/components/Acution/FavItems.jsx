import React from 'react';

const FavItems = ({ item, handleRemove }) => {
    return (
        <div className='flex gap-4 text-primary-content py-8 px-3 border-b border-b-[#DCE5F3]'>
            <div className='flex flex-col justify-center'><img className='size-[60px] object-center' src={item.image} alt="" /></div>
            <div>
                <p className='text-sm pb-2'>{item.title}</p>
                <div className='flex gap-6'>
                    <p>${item.currentBidPrice}</p>
                    <p>Bids:{item.bidsCount}</p>
                </div>
            </div>
            <div >
                <p onClick={() => handleRemove(item)} className='cursor-pointer'>X</p>
            </div>
        </div>
    );
};

export default FavItems;