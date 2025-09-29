import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const TableRow = ({ data }) => {
    return (
        <>
            {data.map(item => (
                <tr key={item.id} className='text-primary-content'>
                    <td className='px-8 py-6'>
                        <div className='flex gap-6'>
                            <img className="size-[96px]" src={item.image} alt="" />
                            <p className='text-lg pt-3.5'>{item.title}</p>
                        </div>
                    </td>
                    <td className='text-center px-8 py-6'>${item.currentBidPrice}</td>
                    <td className='text-center'>{item.timeLeft}</td>
                    <td className='px-8 py-6'>
                        <FaRegHeart className="m-auto size-7 cursor-pointer" />
                        <FaHeart className="m-auto size-7 hidden cursor-pointer" />
                    </td>
                </tr>
            ))}
        </>
    );
};

export default TableRow;