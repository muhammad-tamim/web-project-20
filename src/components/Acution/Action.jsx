import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import { FaRegHeart } from 'react-icons/fa';
import FavItems from './FavItems';
import { toast, ToastContainer } from 'react-toastify';

const Action = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [clicked, setClicked] = useState([])
    const [items, setItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    const tableHeadData = [
        { id: 1, name: "Items" },
        { id: 2, name: "Current Bid" },
        { id: 3, name: "Time Left" },
        { id: 4, name: "Bid Now" }
    ]

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [])

    const handleClick = (item) => {
        setClicked([...clicked, item.id])
        setItems([...items, item])
        setTotalAmount(item.currentBidPrice + totalAmount)
        toast.success('Your item added to the favorite!')
    }

    const handleRemove = (removedItem) => {
        const filterItems = items.filter((item => item.id !== removedItem.id))
        setItems(filterItems)
        setTotalAmount(totalAmount - removedItem.currentBidPrice)

        const filterClicked = clicked.filter(click => click != removedItem.id)
        setClicked(filterClicked)

        toast.error("Your item remove from the favorite")
    }



    return (
        <>
            <ToastContainer autoClose={1000} />
            <div className='bg-[#EBF0F5] py-[132px] px-4 lg:px-12 xl:px-[140px]'>
                <h3 className='text-primary-content text-3xl font-medium pb-5'>Active Auctions</h3>
                <p className='text-xl pb-5'>Discover and bid on extraordinary items</p>

                <div className='grid grid-cols-12 gap-6 items-start'>
                    {/* left side */}
                    <div className='col-span-9 bg-white rounded-3xl'>
                        <div className="overflow-x-auto">
                            {loading && <div className='text-center'>
                                <span className="loading size-16 loading-spinner"></span>
                            </div>}
                            {error && <p className='text-center text-3xl text-red-500'>{error.message}</p>}
                            <table className="table">
                                <thead>
                                    <tr>
                                        {tableHeadData.map(tableHead => <th className='p-8 text-black text-xl font-normal' key={tableHead.id}>{tableHead.name}</th>)}
                                    </tr>
                                </thead>
                                <tbody >
                                    <TableRow clicked={clicked} handleClick={handleClick} data={data}></TableRow>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* right sde */}
                    <div className='col-span-3 bg-white rounded-3xl'>

                        <div>
                            <div className='text-primary-content flex justify-center items-center gap-3 p-8'>
                                <FaRegHeart className="size-7" />
                                <h3 className='font-medium text-2xl'>Favorite Items</h3>
                            </div>
                            <hr className='text-[#DCE5F3] -mt-1' />
                        </div>

                        <div>
                            {/* fallback text */}
                            {items.length === 0 && <div className='py-12 text-center text-black'>
                                <h4 className='font-medium text-xl pb-6'>No Favorites yet</h4>
                                <p className='text-black/70 text-sm'>Click the heart icon on any item<br /> to add it to your favorites</p>
                            </div>}

                            {items.map((item => <FavItems handleRemove={handleRemove} key={item.id} item={item}></FavItems>))}

                        </div>

                        <div>
                            <hr className='text-[#DCE5F3]' />
                            <div className='flex justify-between p-8'>
                                <h3 className='font-medium'>Total bids Amount</h3>
                                <h3 className='font-medium'>${totalAmount}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
};

export default Action;