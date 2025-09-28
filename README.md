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

## Challenges I faced while Building This Project:

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
