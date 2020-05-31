<p align="center">
  <img src="/website/assets/GooglePlayStore.png" width="150" />
</p>
<p align="center">⭐⭐⭐⭐⭐</p>
<h1 align="center">Ethereal Color</h1>
<h4 align="center">
  <b>
    <a href="https://lakscastro.github.io/ethereal-color">
      <code>Library Website</code>
    </a>
  </b>
  <b>
    <a href="https://github.com/LaksCastro/endless-gradients">
      <code>Sample Project</code>
    </a>
  </b>
</h4>
<p align="center">Fast, simple, easy library to work with colors: single, palettes, gradients and more. Written in Typescript</p>
<p align="center">
  <img  src="https://img.shields.io/badge/license-MIT-success" alt="License" />
  <img  src="https://img.shields.io/badge/application-library-orange" alt="Application Type" />
  <img  src="https://img.shields.io/badge/written-typescript-blue" alt="Repo Main Language" />
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

const { Color, Palette, Gradient, Converter } = EtherealColor;

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
    <script type="text/javascript" src="https://unpkg.com/ethereal-color@0.0.5/lib/index.js"></script>
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
| Color Format | Color Key | Color Object Type                            | Color String     |
|--------------|-----------|----------------------------------------------|------------------|
| RGB          | rgb       | `Rgb`: `{ r: number, g: number, b: number }` | `rgb(R, G, B)`   |
| Hexadecimal  | hex       | `Hex`: `{ r: string, g: string, b: string }` | `#rrggbb`        |
| HSL          | hsl       | `Hsl`: `{ h: number, s: number, l: number }` | `hsl(H, S%, L%)` |

## Color Function

### Default return
If you call the Color function without sending any arguments, white will be returned
```js
const color = Color();

color.get("rgb").string; // rgb(255, 255, 255)
```

### 1. Color API Type (ColorAPI)
```ts
{
  get: (format: 'rgb' | 'hex' | 'hsl') => { string: string, object: Rgb | Hex | Hsl  };
  set: (newColor: Rgb | Hex | Hsl | ColorString) => void;
  random: (palette?: PaletteAPI) => void;
}
```

### 2. Create a Color API  
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

### 3. Change the color of an object at run time
```js
const color = Color();

color.get("rgb").string; // rgb(255, 255, 255)

color.set("rgb(150, 150, 150)");

color.get("rgb").string; // rgb(150, 150, 150)
```

### 4. Generate a random color
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
// 120 <= X <= 130
// 100 <= Y <= 180
// 160 <= Z <= 200
```

<br>

## Palette Function

### Default return
If you try to create a palette without sending anything as a parameter, a palette will be created using white as the base
```js
// this...
const palette = Palette();

// ...is the same thing as this:
const palette = Palette(Color());
// ...then:
// Start: rgb(215, 215, 215)
// End: rgb(255, 255, 255)
```

### 1. Palette API Type (PaletteAPI)
```ts
{
  get: () => [ColorAPI, ColorAPI];
  set: (color: ColorAPI | [ColorAPI, ColorAPI], options?: { range: number }) => void;
  random: () => void;
}
```

### 2. Create a Palette API  
A Palette object is used to reference a range of colors, that is, where a certain range begins, and where it ends
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

### 3. Change the value of the palette at run time
```js
const color = Color("rgb(120, 150, 150)");

const palette = Palette(color);
// Start: rgb(80, 110, 110)
// End: rgb(160, 190, 190)

const otherColor = Color("rgb(20, 40, 10)");

palette.set(otherColor, { range: 10 });
// Start: rgb(10, 30, 0)
// End: rgb(30, 50, 20)
```

### 4. Generate a random palette
```js
const palette = Palette(); // default color: white - rgb(255, 255, 255)
// Start: rgb(215, 215, 215)
// End: rgb(255, 255, 255)

// Now...
palette.random();
// Start: rgb(??, ??, ??)
// End: rgb(??, ??, ??)
```

<br>

## Gradient Function

### Default return
If you don't send anything to the Gradient function, it will return a gradient from a white palette
```js
// ...this
const gradient = Gradient();
// [rgb(215, 215, 215)]

// ...is the same thing as this:
const gradient = Gradient(Palette());
// ...then:
// [rgb(215, 215, 215), ..., rgb(255, 255, 255)]
```

### 1. Gradient Object Type (GradientAPI)
```ts
{
  toStringArray: (format: 'rgb' | 'hex' | 'hsl') => string[];
  toObjectArray: (format: 'rgb' | 'hex' | 'hsl') => Rgb[] | Hex[] | Hsl[];
  toColorArray: () => ColorAPI[];
  set: (palette: PaletteAPI) => void;
  random: () => void;
}
```

### 2. Create a Gradient API
A Gradient object is used to represent a sequence of colors, which sequence consists of a starting color and an ending color
```js
// 1. Init start and end colors:
const startColor = Color("rgb(255, 0, 0)");
const endColor = Color("rgb(0, 0, 255)");

// 2. Init palette:
const palette = Palette([startColor, endColor]);

// 3. Now, the gradients:

// Way 1 - Create a default gradient:
const gradient = Gradient(palette); // Precision by default: 5

// Note: All arrays will have the specified size, in this case, by default it will be 5
gradient.toStringArray("rgb"); // ["rgb(255, 0, 0)", ..., rgb(0, 0, 255)]
gradient.toObjectArray("rgb"); // [{ r: 255, 0, 0 }, ..., { r: 0, g: 0, b: 255 }]
gradient.toColorArray("rgb"); // [ColorAPI, ..., ColorAPI]


// Way 2 - Create with custom precision
const gradient = Gradient(palette, { count: 20 }); // Custom precision: 20

// Note: All arrays will have the specified size, in this case, this size will be 20
gradient.toStringArray("rgb"); // ["rgb(255, 0, 0)", ..., rgb(0, 0, 255)].length === 20
gradient.toObjectArray("rgb"); // [{ r: 255, 0, 0 }, ..., { r: 0, g: 0, b: 255 }].length === 20
gradient.toColorArray("rgb"); // [ColorAPI, ..., ColorAPI].length === 20
```

<br>

## Converter Function
> _Note: [keep this table](#color-types) in mind when using this function:_

### Converter Object
The Convert object is a separate object, that is, it works as if it were a static class and can help you convert different color formats without having to create another object. The library uses this object under the hood to work with the different color formats.
```js
// New converter object
const converter = Converter();
```

### How to use
#### 1. `hexToRgb()`
_**Description**_: Function that receives an object in the "hex" format and returns an object in the "rgb" format  
_**Type**_: `(color: Hex) => Rgb`  
```js
const output = converter.hexToRgb({ r: "ff", g: "ff", b: "ff" });
// output = { r: 255, g: 255, b: 255 }
```

#### 2. `hslToRgb()`
_**Description**_: Function that receives an object in the "hsl" format and returns an object in the "rgb" format  
_**Type**_: `(color: Hsl) => Rgb`  
```js
const output = converter.hslToRgb({ h: 0, s: 0, l: 100 });
// output = { r: 255, g: 255, b: 255 }
```

#### 3. `rgbToHex()`
_**Description**_: Function that receives an object in the "rgb" format and returns an object in the "hex" format  
_**Type**_: `(color: Rgb) => Hex`  
```js
const output = converter.rgbToHex({ r: 255, g: 255, b: 255 });
// output = { r: "ff", g: "ff", b: "ff" }
```

#### 4. `rgbToHsl()`
_**Description**_: Function that receives an object in the "hex" format and returns an object in the "rgb" format   
_**Type**_: `(color: Rgb) => Hsl`  
```js
const output = converter.rgbToHsl({ r: 255, g: 255, b: 255 });
// output = { h: 0, s: 0, l: 100 }
```

<br>

## Some frequently asked questions

### 1. Can I work using different color formats?
Yes, it is totally possible, although there may be some minor incompatibilities, for example: every hex color can be represented in the RGB, but not every RGB color can be represented in the hex format
```js
const color = Color("rgb(150, 140, 160)");

color.get("hex").string; // #968ca0
color.get("hsl").string; // hsl(270, 10%, 59%)

color.set("#ffffff");

color.get("rgb"); // rgb(255, 255, 255)
color.get("hsl"); // hsl(0, 0%, 100%)
```











