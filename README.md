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

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
