# Project Name:

## Project Description:  

## Live Site Link:

## Project Video:

## features

## What I Learned New while Building This Project:
1. How to use multiple google fonts on react project: 

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="action-gallery.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Action Gallery</title>

  <!-- connect index.css -->
  <link rel="stylesheet" href="./src/index.css">

  <!-- google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&display=swap"
    rel="stylesheet">
</head>

<body class="sora">
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

```css
/* index.css */
@import "tailwindcss";
@plugin "daisyui";

/* google fonts */
.sora {
    font-family: "Sora", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}

.poppins {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}
```

2. How to customize DaisyUi in react project

```css
/* index.css */
@import "tailwindcss";
@plugin "daisyui";

/* daisyUi customization */
@plugin "daisyui/theme" {
    name: "light";
    default: true;
    --color-primary-content: #0E2954;
}
```
3. How to add a backing images on tailwind: 
   - Option 1: Use style prop (recommended for dynamic imports)

```jsx
import React from 'react';
import banner from '../assets/images/Banner-min.jpg';

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="h-screen bg-cover bg-center"
    >
      <div className="px-4 lg:px-12 xl:px-[140px]">
        {/* Your content */}
      </div>
    </div>
  );
};

export default Banner;
```

   - Option 2: Put image in public folder and use Tailwind `bg-[url()]`

```jsx
<div className="h-screen bg-[url('/images/Banner-min.jpg')] bg-cover bg-center">
  <div className="px-4 lg:px-12 xl:px-[140px]">
    {/* Content */}
  </div>
</div>
```
4. How to flip a background image in tailwind: 

In normal CSS, flipping something horizontally is done with:
- A positive scale (scaleX(1)) = normal width.
- A negative scale (scaleX(-1)) = flipped horizontally (mirror effect).

```jsx
import React from 'react';
import banner from '../assets/images/Banner-min.jpg'

const Banner = () => {
    return (
        <div
            className="hero min-h-screen scale-x-[-1]"
            style={{
                backgroundImage:
                    `url(${banner})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center scale-x-[-1]">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;
```

5. How to add a overlay in tailwind:

```jsx
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
                <div className='max-w-[661px]'>
                    <h1 className='font-semibold text-5xl text-white pb-5'>Bid on Unique Items from Around the World</h1>
                    <p className='text-2xl font-light text-white pb-8'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                    <div>
                        <button className='btn rounded-[35px] btn-lg'>Explore Auction</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;
```

here, `inset-0` is a shorthand for: 

```css
top: 0;
right: 0;
bottom: 0;
left: 0;
```
Meaning the div stretches to cover the whole parent. Since the parent has position: relative, this child absolutely fills it. So now, your overlay spans the full size of the banner.

6. How to add react-toastify

```jsx
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
                <div className='grid grid-cols-12 gap-6'>
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
```

## Challenges I faced while Building This Project:

1. I couldn’t horizontally and vertically center the table heart icons using flex because table cells (`<td>`) behave like inline-block elements, and flex alignment doesn’t always work accurately inside them—even when wrapping the icon in a `<div>`. After some experimentation, I used mx-auto with a fixed icon size, and it worked perfectly.

```jsx
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const TableRow = ({ data }) => {
    return (
        <>
            {data.map(item => (
                <tr key={item.id} className='text-primary-content'>
                    <td >
                        <div className='flex gap-6'>
                            <img className="size-[96px]" src={item.image} alt="" />
                            <p className='text-lg pt-3.5'>{item.title}</p>
                        </div>
                    </td>
                    <td className='text-center'>${item.currentBidPrice}</td>
                    <td className='text-center'>{item.timeLeft}</td>
                    <td>
                        <FaRegHeart className="m-auto size-7" />
                        <FaHeart className="m-auto size-7 hidden" />
                    </td>
                </tr>
            ))}
        </>
    );
};

export default TableRow;
```
2. I couldn’t figure out the logic to turn a normal heart into a red heart icon when I clicked on a single item. At first, I tried using useState with a boolean, but if I clicked one item, all the hearts turned red, which wasn’t what I wanted.

So I took help from ChatGPT and got an awesome idea: instead of using a boolean useState, I used an array to store the IDs of clicked items. Then, in the table row, I checked if the item’s id was included in the array — if it was, I changed the heart to red.

```jsx
import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import { FaRegHeart } from 'react-icons/fa';

const Action = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [clicked, setClicked] = useState([])

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
        console.log(item)
        setClicked([...clicked, item.id])
    }
    console.log(clicked)

    return (
        <div className='bg-[#EBF0F5] py-[132px] px-4 lg:px-12 xl:px-[140px]'>
            <h3 className='text-primary-content text-3xl font-medium pb-5'>Active Auctions</h3>
            <p className='text-xl pb-5'>Discover and bid on extraordinary items</p>
            <div className='grid grid-cols-12 gap-6'>
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

                <div className='col-span-3 bg-white rounded-3xl'>

                    <div>
                        <div className='text-primary-content flex justify-center items-center gap-3 p-8'>
                            <FaRegHeart className="size-7" />
                            <h3 className='font-medium text-2xl'>Favorite Items</h3>
                        </div>
                        <hr className='text-[#DCE5F3] -mt-1' />
                    </div>
                    <div className='py-12 text-center text-black'>
                        <h4 className='font-medium text-xl pb-6'>No Favorites yet</h4>
                        <p className='text-black/70 text-sm'>Click the heart icon on any item<br /> to add it to your favorites</p>
                    </div>
                    <div>
                        <hr className='text-[#DCE5F3]' />
                        <div className='flex justify-between p-8'>
                            <h3 className='font-medium'>Total bids Amount</h3>
                            <h3 className='font-medium'>$0000</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Action;
```

```jsx
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const TableRow = ({ data, handleClick, clicked }) => {
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
                        {clicked.includes(item.id)
                            ? < FaHeart className="m-auto size-7 cursor-not-allowed text-red-500" />
                            : <FaRegHeart onClick={() => {
                                handleClick(item)
                            }} className="m-auto size-7 cursor-pointer" />}
                    </td>
                </tr>
            ))}
        </>
    );
};

export default TableRow;
```

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
