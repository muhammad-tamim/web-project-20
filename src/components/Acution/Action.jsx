import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const Action = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

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

    return (
        <div className='bg-[#EBF0F5] py-[132px] px-4 lg:px-12 xl:px-[140px]'>
            <h3 className='text-primary-content text-3xl font-medium pb-5'>Active Auctions</h3>
            <p className='text-xl pb-5'>Discover and bid on extraordinary items</p>
            <div className='grid grid-cols-12 '>
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
                                <TableRow data={data}></TableRow>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col-span-3'></div>
            </div>
        </div >
    );
};

export default Action;