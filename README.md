<p align="center">
  <img src="/website/assets/GooglePlayStore.png" width="150" />
</p>
<p align="center">⭐⭐⭐⭐⭐</p>
<h1 align="center">Ethereal Color</h1>
<h4 align="center">
  <b>
    <a href="https://lakscastro.github.io/ethereal-color">
      <code>Try Demo</code>
    </a>
  </b>
</h4>
<p align="center">Fast, simple, easy library to work with colors: single, palettes, gradients and more. Written in Typescript</p>
<p align="center">
  <img  src="https://img.shields.io/badge/license-MIT-success" alt="License" />
  <img  src="https://img.shields.io/badge/application-library-orange" alt="Application Type" />
  <img  src="https://img.shields.io/badge/wiritten-typescript-blue" alt="Repo Main Language" />
  <img  src="https://img.shields.io/badge/tests-passing-green" alt="Tests" />
  <img  src="https://img.shields.io/badge/code_style-prettier-ff69b4" alt="Repo Type" />
</p>

<br>
<br>

<p>
  <img src="./website/assets/pt-br.png" alt="Portuguese" height="16">
  <a href="https://github.com/LaksCastro/ethereal-color/blob/master/README-ptbr.md">Ler em português</a>
</p>

## Try demo
Visite library [web page clicking here](https://lakscastro.github.io/ethereal-color)  
Or, visit a [demo project clicking here](https://github.com/LaksCastro/endless-gradients)

## Installation

### 1. Package
Npm
```
npm i ethereal-color
```

Yarn
```
yarn add ethereal-color
```

### 2. CDN
```html
<script type="text/javascript" src="https://unpkg.com/ethereal-color@0.0.5/lib/index.js"></script>
```

## Quickstart

### 1. Package
`~/index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ethereal Color Quickstart with Package</title>
</head>

<body>
</body>

<script src="./app.js"></script>

</html>
```
`~/app.js`
```js
// ES6
import EtherealColor from "ethereal-color";

// CommomJS
const EtherealColor = require("ethereal-color");

// ...Now it's up to you, enjoy this API
```

### 2. CDN
`~/index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ethereal Color Quickstart with CDN</title>
    <script type="text/javascript" src="https://unpkg.com/ethereal-color@0.0.4/lib/index.js"></script>
</head>

<body>
</body>

<script>
    const { Color, Converter, Gradient, Palette } = EtherealColor;
  
    // ...Now it's up to you, enjoy this API
</script>

</html>
```

## Color Types
For all examples below, RGB will be used, but you can also use the Hexadecimal or HSL color format  
| Color Format | Color Key | Color Object                          | Color String   |
|--------------|-----------|---------------------------------------|----------------|
| RGB          | rgb       | `{ r: number, g: number, b: number }` | rgb(R, G, B)   |
| Hexadecimal  | hex       | `{ r: string, g: string, b: string }` | #rrggbb        |
| HSL          | hsl       | `{ h: number, s: number, l: number }` | hsl(H, S%, L%) |

## Color Function
### 1. Create a new Color object  
```js
// Way 1 - Using defaut color: #fff
const color = Color();

console.log(color.get("rgb").string); // rgb(255, 255, 255)
console.log(color.get("rgb").object); // { r: 255, g: 255, b: 255 }


// Way 2 - Using custom color: Red, for example
const color = Color("rgb(255, 0, 0)");

console.log(color.get("rgb").string); // rgb(255, 0, 0)
console.log(color.get("rgb").object); // { r: 255, g: 0, b: 0 }


// Way 3 - Using custom color object: Blue, for example
const color = Color({ r: 0, g: 0, b: 255 });

console.log(color.get("rgb").string); // rgb(0, 0, 255)
console.log(color.get("rgb").object); // { r: 0, g: 0, b: 255 }
```

## Palette Function
### 1. Create a new Palette object  
```js
// Way 1 - Using defaut range: 40
const color = Color("rgb(150, 150, 150)"); // can be any color

const palette = Palette(color, { range: 40 /* 40 is default */ });
// Start: rgb (110, 110, 110)
// End: rgb (190, 190, 190)
```














