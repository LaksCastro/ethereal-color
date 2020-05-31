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

### Default return
If you call the Color function without sending any arguments, white will be returned
```js
const defaultColor = Color();

defaultColor.get("rgb").string; // rgb(255, 255, 255)
```

### 1. Create a Color object  
A Color object is used to represent a separate color, a single color within that infinity of colors that exist

```js
// Way 1 - Using default color: rgb(255, 255, 255)
const color = Color();

color.get("rgb").string; // rgb(255, 255, 255)
color.get("rgb").object; // { r: 255, g: 255, b: 255 }


// Way 2 - Using custom color: Red, for example
const color = Color("rgb(255, 0, 0)");

color.get("rgb").string; // rgb(255, 0, 0)
color.get("rgb").object; // { r: 255, g: 0, b: 0 }


// Way 3 - Using custom color object: Blue, for example
const color = Color({ r: 0, g: 0, b: 255 });

color.get("rgb").string; // rgb(0, 0, 255)
color.get("rgb").object; // { r: 0, g: 0, b: 255 }
```

### 2. Change the color of an object at run time
```js
const color = Color();

color.get("rgb").string; // rgb(255, 255, 255)

color.set("rgb(150, 150, 150)");

color.get("rgb").string; // rgb(255, 255, 255)
```

### 3. Generate a random color
```js
// Way 1 - A totally random color
const color = Color();
color.random();

color.get("rgb").string; // rgb(??, ??, ??)


// Way 2 - Within the range of a palette
const palette = Palette([Color("rgb(120, 100, 160)"), Color("rgb(130, 180, 200)")]);
// Start: rgb(120, 100, 160)
// End: rgb(130, 180, 200)

const color = Color();
color.random(palette);

color.get("rgb").string; // rgb(X, Y, Z)
// X >= 120 && X <= 130
// Y >= 100 && X <= 180
// Z >= 160 && Z <= 200
```

## Palette Function
A Palette object is used to reference a range of colors, that is, where a certain range begins, and where it ends

### 1. Create a Palette object  
```js
// Way 1 - Using defaut range: 40
const color = Color("rgb(150, 150, 150)");

const palette = Palette(color);
// Start: rgb(110, 110, 110)
// End: rgb(190, 190, 190)


// Way 2 - Using custom range: 100
const color = Color("rgb(150, 150, 150)");

const palette = Palette(color, { range: 100 /* need to specify */ });
// Start: rgb(50, 50, 50)
// End: rgb(250, 250, 250)


// Way 3 - Create a custom palette
const startColor = Color("rgb(65, 65, 0)");
const endColor = Color("rgb(230, 230, 230)");

const palette = Palette([startColor, endColor]);
// Start: rgb(65, 65, 0)
// End: rgb(230, 230, 230)
```














