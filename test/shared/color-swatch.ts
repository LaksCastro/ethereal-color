/*Thanks to Jonas Jacek (https://jonasjacek.github.io/colors/) for providing this sample data*/

export type SampleColor = {
  colorId: number
  hexString: string
  rgb: {
    r: number
    g: number
    b: number
  }
  hsl: {
    h: number
    s: number
    l: number
  }
}
const data: SampleColor[] = [
  { colorId: 0, hexString: '#000000', rgb: { r: 0, g: 0, b: 0 }, hsl: { h: 0, s: 0, l: 0 } },
  { colorId: 1, hexString: '#800000', rgb: { r: 128, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 25.1 } },
  {
    colorId: 2,
    hexString: '#008000',
    rgb: { r: 0, g: 128, b: 0 },
    hsl: { h: 120, s: 100, l: 25.1 }
  },
  {
    colorId: 3,
    hexString: '#808000',
    rgb: { r: 128, g: 128, b: 0 },
    hsl: { h: 60, s: 100, l: 25.1 }
  },
  {
    colorId: 4,
    hexString: '#000080',
    rgb: { r: 0, g: 0, b: 128 },
    hsl: { h: 240, s: 100, l: 25.1 }
  },
  {
    colorId: 5,
    hexString: '#800080',
    rgb: { r: 128, g: 0, b: 128 },
    hsl: { h: 300, s: 100, l: 25.1 }
  },
  {
    colorId: 6,
    hexString: '#008080',
    rgb: { r: 0, g: 128, b: 128 },
    hsl: { h: 180, s: 100, l: 25.1 }
  },
  {
    colorId: 7,
    hexString: '#c0c0c0',
    rgb: { r: 192, g: 192, b: 192 },
    hsl: { h: 0, s: 0, l: 75.3 }
  },
  {
    colorId: 8,
    hexString: '#808080',
    rgb: { r: 128, g: 128, b: 128 },
    hsl: { h: 0, s: 0, l: 50.2 }
  },
  { colorId: 9, hexString: '#ff0000', rgb: { r: 255, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 50 } },
  {
    colorId: 10,
    hexString: '#00ff00',
    rgb: { r: 0, g: 255, b: 0 },
    hsl: { h: 120, s: 100, l: 50 }
  },
  {
    colorId: 11,
    hexString: '#ffff00',
    rgb: { r: 255, g: 255, b: 0 },
    hsl: { h: 60, s: 100, l: 50 }
  },
  {
    colorId: 12,
    hexString: '#0000ff',
    rgb: { r: 0, g: 0, b: 255 },
    hsl: { h: 240, s: 100, l: 50 }
  },
  {
    colorId: 13,
    hexString: '#ff00ff',
    rgb: { r: 255, g: 0, b: 255 },
    hsl: { h: 300, s: 100, l: 50 }
  },
  {
    colorId: 14,
    hexString: '#00ffff',
    rgb: { r: 0, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 50 }
  },
  {
    colorId: 15,
    hexString: '#ffffff',
    rgb: { r: 255, g: 255, b: 255 },
    hsl: { h: 0, s: 0, l: 100 }
  },
  { colorId: 16, hexString: '#000000', rgb: { r: 0, g: 0, b: 0 }, hsl: { h: 0, s: 0, l: 0 } },
  {
    colorId: 17,
    hexString: '#00005f',
    rgb: { r: 0, g: 0, b: 95 },
    hsl: { h: 240, s: 100, l: 18.6 }
  },
  {
    colorId: 18,
    hexString: '#000087',
    rgb: { r: 0, g: 0, b: 135 },
    hsl: { h: 240, s: 100, l: 26.5 }
  },
  {
    colorId: 19,
    hexString: '#0000af',
    rgb: { r: 0, g: 0, b: 175 },
    hsl: { h: 240, s: 100, l: 34.3 }
  },
  {
    colorId: 20,
    hexString: '#0000d7',
    rgb: { r: 0, g: 0, b: 215 },
    hsl: { h: 240, s: 100, l: 42.2 }
  },
  {
    colorId: 21,
    hexString: '#0000ff',
    rgb: { r: 0, g: 0, b: 255 },
    hsl: { h: 240, s: 100, l: 50 }
  },
  {
    colorId: 22,
    hexString: '#005f00',
    rgb: { r: 0, g: 95, b: 0 },
    hsl: { h: 120, s: 100, l: 18.6 }
  },
  {
    colorId: 23,
    hexString: '#005f5f',
    rgb: { r: 0, g: 95, b: 95 },
    hsl: { h: 180, s: 100, l: 18.6 }
  },
  {
    colorId: 24,
    hexString: '#005f87',
    rgb: { r: 0, g: 95, b: 135 },
    hsl: { h: 197.8, s: 100, l: 26.5 }
  },
  {
    colorId: 25,
    hexString: '#005faf',
    rgb: { r: 0, g: 95, b: 175 },
    hsl: { h: 207.4, s: 100, l: 34.3 }
  },
  {
    colorId: 26,
    hexString: '#005fd7',
    rgb: { r: 0, g: 95, b: 215 },
    hsl: { h: 213.5, s: 100, l: 42.2 }
  },
  {
    colorId: 27,
    hexString: '#005fff',
    rgb: { r: 0, g: 95, b: 255 },
    hsl: { h: 217.7, s: 100, l: 50 }
  },
  {
    colorId: 28,
    hexString: '#008700',
    rgb: { r: 0, g: 135, b: 0 },
    hsl: { h: 120, s: 100, l: 26.5 }
  },
  {
    colorId: 29,
    hexString: '#00875f',
    rgb: { r: 0, g: 135, b: 95 },
    hsl: { h: 162.2, s: 100, l: 26.5 }
  },
  {
    colorId: 30,
    hexString: '#008787',
    rgb: { r: 0, g: 135, b: 135 },
    hsl: { h: 180, s: 100, l: 26.5 }
  },
  {
    colorId: 31,
    hexString: '#0087af',
    rgb: { r: 0, g: 135, b: 175 },
    hsl: { h: 193.7, s: 100, l: 34.3 }
  },
  {
    colorId: 32,
    hexString: '#0087d7',
    rgb: { r: 0, g: 135, b: 215 },
    hsl: { h: 202.3, s: 100, l: 42.2 }
  },
  {
    colorId: 33,
    hexString: '#0087ff',
    rgb: { r: 0, g: 135, b: 255 },
    hsl: { h: 208.2, s: 100, l: 50 }
  },
  {
    colorId: 34,
    hexString: '#00af00',
    rgb: { r: 0, g: 175, b: 0 },
    hsl: { h: 120, s: 100, l: 34.3 }
  },
  {
    colorId: 35,
    hexString: '#00af5f',
    rgb: { r: 0, g: 175, b: 95 },
    hsl: { h: 152.6, s: 100, l: 34.3 }
  },
  {
    colorId: 36,
    hexString: '#00af87',
    rgb: { r: 0, g: 175, b: 135 },
    hsl: { h: 166.3, s: 100, l: 34.3 }
  },
  {
    colorId: 37,
    hexString: '#00afaf',
    rgb: { r: 0, g: 175, b: 175 },
    hsl: { h: 180, s: 100, l: 34.3 }
  },
  {
    colorId: 38,
    hexString: '#00afd7',
    rgb: { r: 0, g: 175, b: 215 },
    hsl: { h: 191.2, s: 100, l: 42.2 }
  },
  {
    colorId: 39,
    hexString: '#00afff',
    rgb: { r: 0, g: 175, b: 255 },
    hsl: { h: 198.8, s: 100, l: 50 }
  },
  {
    colorId: 40,
    hexString: '#00d700',
    rgb: { r: 0, g: 215, b: 0 },
    hsl: { h: 120, s: 100, l: 42.2 }
  },
  {
    colorId: 41,
    hexString: '#00d75f',
    rgb: { r: 0, g: 215, b: 95 },
    hsl: { h: 146.5, s: 100, l: 42.2 }
  },
  {
    colorId: 42,
    hexString: '#00d787',
    rgb: { r: 0, g: 215, b: 135 },
    hsl: { h: 157.7, s: 100, l: 42.2 }
  },
  {
    colorId: 43,
    hexString: '#00d7af',
    rgb: { r: 0, g: 215, b: 175 },
    hsl: { h: 168.8, s: 100, l: 42.2 }
  },
  {
    colorId: 44,
    hexString: '#00d7d7',
    rgb: { r: 0, g: 215, b: 215 },
    hsl: { h: 180, s: 100, l: 42.2 }
  },
  {
    colorId: 45,
    hexString: '#00d7ff',
    rgb: { r: 0, g: 215, b: 255 },
    hsl: { h: 189.4, s: 100, l: 50 }
  },
  {
    colorId: 46,
    hexString: '#00ff00',
    rgb: { r: 0, g: 255, b: 0 },
    hsl: { h: 120, s: 100, l: 50 }
  },
  {
    colorId: 47,
    hexString: '#00ff5f',
    rgb: { r: 0, g: 255, b: 95 },
    hsl: { h: 142.3, s: 100, l: 50 }
  },
  {
    colorId: 48,
    hexString: '#00ff87',
    rgb: { r: 0, g: 255, b: 135 },
    hsl: { h: 151.8, s: 100, l: 50 }
  },
  {
    colorId: 49,
    hexString: '#00ffaf',
    rgb: { r: 0, g: 255, b: 175 },
    hsl: { h: 161.2, s: 100, l: 50 }
  },
  {
    colorId: 50,
    hexString: '#00ffd7',
    rgb: { r: 0, g: 255, b: 215 },
    hsl: { h: 170.6, s: 100, l: 50 }
  },
  {
    colorId: 51,
    hexString: '#00ffff',
    rgb: { r: 0, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 50 }
  },
  { colorId: 52, hexString: '#5f0000', rgb: { r: 95, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 18.6 } },
  {
    colorId: 53,
    hexString: '#5f005f',
    rgb: { r: 95, g: 0, b: 95 },
    hsl: { h: 300, s: 100, l: 18.6 }
  },
  {
    colorId: 54,
    hexString: '#5f0087',
    rgb: { r: 95, g: 0, b: 135 },
    hsl: { h: 282.2, s: 100, l: 26.5 }
  },
  {
    colorId: 55,
    hexString: '#5f00af',
    rgb: { r: 95, g: 0, b: 175 },
    hsl: { h: 272.6, s: 100, l: 34.3 }
  },
  {
    colorId: 56,
    hexString: '#5f00d7',
    rgb: { r: 95, g: 0, b: 215 },
    hsl: { h: 266.5, s: 100, l: 42.2 }
  },
  {
    colorId: 57,
    hexString: '#5f00ff',
    rgb: { r: 95, g: 0, b: 255 },
    hsl: { h: 262.4, s: 100, l: 50 }
  },
  {
    colorId: 58,
    hexString: '#5f5f00',
    rgb: { r: 95, g: 95, b: 0 },
    hsl: { h: 60, s: 100, l: 18.6 }
  },
  { colorId: 59, hexString: '#5f5f5f', rgb: { r: 95, g: 95, b: 95 }, hsl: { h: 0, s: 0, l: 37.3 } },
  {
    colorId: 60,
    hexString: '#5f5f87',
    rgb: { r: 95, g: 95, b: 135 },
    hsl: { h: 240, s: 17.4, l: 45.1 }
  },
  {
    colorId: 61,
    hexString: '#5f5faf',
    rgb: { r: 95, g: 95, b: 175 },
    hsl: { h: 240, s: 33.3, l: 52.9 }
  },
  {
    colorId: 62,
    hexString: '#5f5fd7',
    rgb: { r: 95, g: 95, b: 215 },
    hsl: { h: 240, s: 60, l: 60.8 }
  },
  {
    colorId: 63,
    hexString: '#5f5fff',
    rgb: { r: 95, g: 95, b: 255 },
    hsl: { h: 240, s: 100, l: 68.6 }
  },
  {
    colorId: 64,
    hexString: '#5f8700',
    rgb: { r: 95, g: 135, b: 0 },
    hsl: { h: 77.8, s: 100, l: 26.5 }
  },
  {
    colorId: 65,
    hexString: '#5f875f',
    rgb: { r: 95, g: 135, b: 95 },
    hsl: { h: 120, s: 17.4, l: 45.1 }
  },
  {
    colorId: 66,
    hexString: '#5f8787',
    rgb: { r: 95, g: 135, b: 135 },
    hsl: { h: 180, s: 17.4, l: 45.1 }
  },
  {
    colorId: 67,
    hexString: '#5f87af',
    rgb: { r: 95, g: 135, b: 175 },
    hsl: { h: 210, s: 33.3, l: 52.9 }
  },
  {
    colorId: 68,
    hexString: '#5f87d7',
    rgb: { r: 95, g: 135, b: 215 },
    hsl: { h: 220, s: 60, l: 60.8 }
  },
  {
    colorId: 69,
    hexString: '#5f87ff',
    rgb: { r: 95, g: 135, b: 255 },
    hsl: { h: 225, s: 100, l: 68.6 }
  },
  {
    colorId: 70,
    hexString: '#5faf00',
    rgb: { r: 95, g: 175, b: 0 },
    hsl: { h: 87.4, s: 100, l: 34.3 }
  },
  {
    colorId: 71,
    hexString: '#5faf5f',
    rgb: { r: 95, g: 175, b: 95 },
    hsl: { h: 120, s: 33.3, l: 52.9 }
  },
  {
    colorId: 72,
    hexString: '#5faf87',
    rgb: { r: 95, g: 175, b: 135 },
    hsl: { h: 150, s: 33.3, l: 52.9 }
  },
  {
    colorId: 73,
    hexString: '#5fafaf',
    rgb: { r: 95, g: 175, b: 175 },
    hsl: { h: 180, s: 33.3, l: 52.9 }
  },
  {
    colorId: 74,
    hexString: '#5fafd7',
    rgb: { r: 95, g: 175, b: 215 },
    hsl: { h: 200, s: 60, l: 60.8 }
  },
  {
    colorId: 75,
    hexString: '#5fafff',
    rgb: { r: 95, g: 175, b: 255 },
    hsl: { h: 210, s: 100, l: 68.6 }
  },
  {
    colorId: 76,
    hexString: '#5fd700',
    rgb: { r: 95, g: 215, b: 0 },
    hsl: { h: 93.5, s: 100, l: 42.2 }
  },
  {
    colorId: 77,
    hexString: '#5fd75f',
    rgb: { r: 95, g: 215, b: 95 },
    hsl: { h: 120, s: 60, l: 60.8 }
  },
  {
    colorId: 78,
    hexString: '#5fd787',
    rgb: { r: 95, g: 215, b: 135 },
    hsl: { h: 140, s: 60, l: 60.8 }
  },
  {
    colorId: 79,
    hexString: '#5fd7af',
    rgb: { r: 95, g: 215, b: 175 },
    hsl: { h: 160, s: 60, l: 60.8 }
  },
  {
    colorId: 80,
    hexString: '#5fd7d7',
    rgb: { r: 95, g: 215, b: 215 },
    hsl: { h: 180, s: 60, l: 60.8 }
  },
  {
    colorId: 81,
    hexString: '#5fd7ff',
    rgb: { r: 95, g: 215, b: 255 },
    hsl: { h: 195, s: 100, l: 68.6 }
  },
  {
    colorId: 82,
    hexString: '#5fff00',
    rgb: { r: 95, g: 255, b: 0 },
    hsl: { h: 97.7, s: 100, l: 50 }
  },
  {
    colorId: 83,
    hexString: '#5fff5f',
    rgb: { r: 95, g: 255, b: 95 },
    hsl: { h: 120, s: 100, l: 68.6 }
  },
  {
    colorId: 84,
    hexString: '#5fff87',
    rgb: { r: 95, g: 255, b: 135 },
    hsl: { h: 135, s: 100, l: 68.6 }
  },
  {
    colorId: 85,
    hexString: '#5fffaf',
    rgb: { r: 95, g: 255, b: 175 },
    hsl: { h: 150, s: 100, l: 68.6 }
  },
  {
    colorId: 86,
    hexString: '#5fffd7',
    rgb: { r: 95, g: 255, b: 215 },
    hsl: { h: 165, s: 100, l: 68.6 }
  },
  {
    colorId: 87,
    hexString: '#5fffff',
    rgb: { r: 95, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 68.6 }
  },
  {
    colorId: 88,
    hexString: '#870000',
    rgb: { r: 135, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 26.5 }
  },
  {
    colorId: 89,
    hexString: '#87005f',
    rgb: { r: 135, g: 0, b: 95 },
    hsl: { h: 317.8, s: 100, l: 26.5 }
  },
  {
    colorId: 90,
    hexString: '#870087',
    rgb: { r: 135, g: 0, b: 135 },
    hsl: { h: 300, s: 100, l: 26.5 }
  },
  {
    colorId: 91,
    hexString: '#8700af',
    rgb: { r: 135, g: 0, b: 175 },
    hsl: { h: 286.3, s: 100, l: 34.3 }
  },
  {
    colorId: 92,
    hexString: '#8700d7',
    rgb: { r: 135, g: 0, b: 215 },
    hsl: { h: 277.7, s: 100, l: 42.2 }
  },
  {
    colorId: 93,
    hexString: '#8700ff',
    rgb: { r: 135, g: 0, b: 255 },
    hsl: { h: 271.8, s: 100, l: 50 }
  },
  {
    colorId: 94,
    hexString: '#875f00',
    rgb: { r: 135, g: 95, b: 0 },
    hsl: { h: 42.2, s: 100, l: 26.5 }
  },
  {
    colorId: 95,
    hexString: '#875f5f',
    rgb: { r: 135, g: 95, b: 95 },
    hsl: { h: 0, s: 17.4, l: 45.1 }
  },
  {
    colorId: 96,
    hexString: '#875f87',
    rgb: { r: 135, g: 95, b: 135 },
    hsl: { h: 300, s: 17.4, l: 45.1 }
  },
  {
    colorId: 97,
    hexString: '#875faf',
    rgb: { r: 135, g: 95, b: 175 },
    hsl: { h: 270, s: 33.3, l: 52.9 }
  },
  {
    colorId: 98,
    hexString: '#875fd7',
    rgb: { r: 135, g: 95, b: 215 },
    hsl: { h: 260, s: 60, l: 60.8 }
  },
  {
    colorId: 99,
    hexString: '#875fff',
    rgb: { r: 135, g: 95, b: 255 },
    hsl: { h: 255, s: 100, l: 68.6 }
  },
  {
    colorId: 100,
    hexString: '#878700',
    rgb: { r: 135, g: 135, b: 0 },
    hsl: { h: 60, s: 100, l: 26.5 }
  },
  {
    colorId: 101,
    hexString: '#87875f',
    rgb: { r: 135, g: 135, b: 95 },
    hsl: { h: 60, s: 17.4, l: 45.1 }
  },
  {
    colorId: 102,
    hexString: '#878787',
    rgb: { r: 135, g: 135, b: 135 },
    hsl: { h: 0, s: 0, l: 52.9 }
  },
  {
    colorId: 103,
    hexString: '#8787af',
    rgb: { r: 135, g: 135, b: 175 },
    hsl: { h: 240, s: 20, l: 60.8 }
  },
  {
    colorId: 104,
    hexString: '#8787d7',
    rgb: { r: 135, g: 135, b: 215 },
    hsl: { h: 240, s: 50, l: 68.6 }
  },
  {
    colorId: 105,
    hexString: '#8787ff',
    rgb: { r: 135, g: 135, b: 255 },
    hsl: { h: 240, s: 100, l: 76.5 }
  },
  {
    colorId: 106,
    hexString: '#87af00',
    rgb: { r: 135, g: 175, b: 0 },
    hsl: { h: 73.7, s: 100, l: 34.3 }
  },
  {
    colorId: 107,
    hexString: '#87af5f',
    rgb: { r: 135, g: 175, b: 95 },
    hsl: { h: 90, s: 33.3, l: 52.9 }
  },
  {
    colorId: 108,
    hexString: '#87af87',
    rgb: { r: 135, g: 175, b: 135 },
    hsl: { h: 120, s: 20, l: 60.8 }
  },
  {
    colorId: 109,
    hexString: '#87afaf',
    rgb: { r: 135, g: 175, b: 175 },
    hsl: { h: 180, s: 20, l: 60.8 }
  },
  {
    colorId: 110,
    hexString: '#87afd7',
    rgb: { r: 135, g: 175, b: 215 },
    hsl: { h: 210, s: 50, l: 68.6 }
  },
  {
    colorId: 111,
    hexString: '#87afff',
    rgb: { r: 135, g: 175, b: 255 },
    hsl: { h: 220, s: 100, l: 76.5 }
  },
  {
    colorId: 112,
    hexString: '#87d700',
    rgb: { r: 135, g: 215, b: 0 },
    hsl: { h: 82.3, s: 100, l: 42.2 }
  },
  {
    colorId: 113,
    hexString: '#87d75f',
    rgb: { r: 135, g: 215, b: 95 },
    hsl: { h: 100, s: 60, l: 60.8 }
  },
  {
    colorId: 114,
    hexString: '#87d787',
    rgb: { r: 135, g: 215, b: 135 },
    hsl: { h: 120, s: 50, l: 68.6 }
  },
  {
    colorId: 115,
    hexString: '#87d7af',
    rgb: { r: 135, g: 215, b: 175 },
    hsl: { h: 150, s: 50, l: 68.6 }
  },
  {
    colorId: 116,
    hexString: '#87d7d7',
    rgb: { r: 135, g: 215, b: 215 },
    hsl: { h: 180, s: 50, l: 68.6 }
  },
  {
    colorId: 117,
    hexString: '#87d7ff',
    rgb: { r: 135, g: 215, b: 255 },
    hsl: { h: 200, s: 100, l: 76.5 }
  },
  {
    colorId: 118,
    hexString: '#87ff00',
    rgb: { r: 135, g: 255, b: 0 },
    hsl: { h: 88.2, s: 100, l: 50 }
  },
  {
    colorId: 119,
    hexString: '#87ff5f',
    rgb: { r: 135, g: 255, b: 95 },
    hsl: { h: 105, s: 100, l: 68.6 }
  },
  {
    colorId: 120,
    hexString: '#87ff87',
    rgb: { r: 135, g: 255, b: 135 },
    hsl: { h: 120, s: 100, l: 76.5 }
  },
  {
    colorId: 121,
    hexString: '#87ffaf',
    rgb: { r: 135, g: 255, b: 175 },
    hsl: { h: 140, s: 100, l: 76.5 }
  },
  {
    colorId: 122,
    hexString: '#87ffd7',
    rgb: { r: 135, g: 255, b: 215 },
    hsl: { h: 160, s: 100, l: 76.5 }
  },
  {
    colorId: 123,
    hexString: '#87ffff',
    rgb: { r: 135, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 76.5 }
  },
  {
    colorId: 124,
    hexString: '#af0000',
    rgb: { r: 175, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 34.3 }
  },
  {
    colorId: 125,
    hexString: '#af005f',
    rgb: { r: 175, g: 0, b: 95 },
    hsl: { h: 327.4, s: 100, l: 34.3 }
  },
  {
    colorId: 126,
    hexString: '#af0087',
    rgb: { r: 175, g: 0, b: 135 },
    hsl: { h: 313.7, s: 100, l: 34.3 }
  },
  {
    colorId: 127,
    hexString: '#af00af',
    rgb: { r: 175, g: 0, b: 175 },
    hsl: { h: 300, s: 100, l: 34.3 }
  },
  {
    colorId: 128,
    hexString: '#af00d7',
    rgb: { r: 175, g: 0, b: 215 },
    hsl: { h: 288.8, s: 100, l: 42.2 }
  },
  {
    colorId: 129,
    hexString: '#af00ff',
    rgb: { r: 175, g: 0, b: 255 },
    hsl: { h: 281.2, s: 100, l: 50 }
  },
  {
    colorId: 130,
    hexString: '#af5f00',
    rgb: { r: 175, g: 95, b: 0 },
    hsl: { h: 32.6, s: 100, l: 34.3 }
  },
  {
    colorId: 131,
    hexString: '#af5f5f',
    rgb: { r: 175, g: 95, b: 95 },
    hsl: { h: 0, s: 33.3, l: 52.9 }
  },
  {
    colorId: 132,
    hexString: '#af5f87',
    rgb: { r: 175, g: 95, b: 135 },
    hsl: { h: 330, s: 33.3, l: 52.9 }
  },
  {
    colorId: 133,
    hexString: '#af5faf',
    rgb: { r: 175, g: 95, b: 175 },
    hsl: { h: 300, s: 33.3, l: 52.9 }
  },
  {
    colorId: 134,
    hexString: '#af5fd7',
    rgb: { r: 175, g: 95, b: 215 },
    hsl: { h: 280, s: 60, l: 60.8 }
  },
  {
    colorId: 135,
    hexString: '#af5fff',
    rgb: { r: 175, g: 95, b: 255 },
    hsl: { h: 270, s: 100, l: 68.6 }
  },
  {
    colorId: 136,
    hexString: '#af8700',
    rgb: { r: 175, g: 135, b: 0 },
    hsl: { h: 46.3, s: 100, l: 34.3 }
  },
  {
    colorId: 137,
    hexString: '#af875f',
    rgb: { r: 175, g: 135, b: 95 },
    hsl: { h: 30, s: 33.3, l: 52.9 }
  },
  {
    colorId: 138,
    hexString: '#af8787',
    rgb: { r: 175, g: 135, b: 135 },
    hsl: { h: 0, s: 20, l: 60.8 }
  },
  {
    colorId: 139,
    hexString: '#af87af',
    rgb: { r: 175, g: 135, b: 175 },
    hsl: { h: 300, s: 20, l: 60.8 }
  },
  {
    colorId: 140,
    hexString: '#af87d7',
    rgb: { r: 175, g: 135, b: 215 },
    hsl: { h: 270, s: 50, l: 68.6 }
  },
  {
    colorId: 141,
    hexString: '#af87ff',
    rgb: { r: 175, g: 135, b: 255 },
    hsl: { h: 260, s: 100, l: 76.5 }
  },
  {
    colorId: 142,
    hexString: '#afaf00',
    rgb: { r: 175, g: 175, b: 0 },
    hsl: { h: 60, s: 100, l: 34.3 }
  },
  {
    colorId: 143,
    hexString: '#afaf5f',
    rgb: { r: 175, g: 175, b: 95 },
    hsl: { h: 60, s: 33.3, l: 52.9 }
  },
  {
    colorId: 144,
    hexString: '#afaf87',
    rgb: { r: 175, g: 175, b: 135 },
    hsl: { h: 60, s: 20, l: 60.8 }
  },
  {
    colorId: 145,
    hexString: '#afafaf',
    rgb: { r: 175, g: 175, b: 175 },
    hsl: { h: 0, s: 0, l: 68.6 }
  },
  {
    colorId: 146,
    hexString: '#afafd7',
    rgb: { r: 175, g: 175, b: 215 },
    hsl: { h: 240, s: 33.3, l: 76.5 }
  },
  {
    colorId: 147,
    hexString: '#afafff',
    rgb: { r: 175, g: 175, b: 255 },
    hsl: { h: 240, s: 100, l: 84.3 }
  },
  {
    colorId: 148,
    hexString: '#afd700',
    rgb: { r: 175, g: 215, b: 0 },
    hsl: { h: 71.2, s: 100, l: 42.2 }
  },
  {
    colorId: 149,
    hexString: '#afd75f',
    rgb: { r: 175, g: 215, b: 95 },
    hsl: { h: 80, s: 60, l: 60.8 }
  },
  {
    colorId: 150,
    hexString: '#afd787',
    rgb: { r: 175, g: 215, b: 135 },
    hsl: { h: 90, s: 50, l: 68.6 }
  },
  {
    colorId: 151,
    hexString: '#afd7af',
    rgb: { r: 175, g: 215, b: 175 },
    hsl: { h: 120, s: 33.3, l: 76.5 }
  },
  {
    colorId: 152,
    hexString: '#afd7d7',
    rgb: { r: 175, g: 215, b: 215 },
    hsl: { h: 180, s: 33.3, l: 76.5 }
  },
  {
    colorId: 153,
    hexString: '#afd7ff',
    rgb: { r: 175, g: 215, b: 255 },
    hsl: { h: 210, s: 100, l: 84.3 }
  },
  {
    colorId: 154,
    hexString: '#afff00',
    rgb: { r: 175, g: 255, b: 0 },
    hsl: { h: 78.8, s: 100, l: 50 }
  },
  {
    colorId: 155,
    hexString: '#afff5f',
    rgb: { r: 175, g: 255, b: 95 },
    hsl: { h: 90, s: 100, l: 68.6 }
  },
  {
    colorId: 156,
    hexString: '#afff87',
    rgb: { r: 175, g: 255, b: 135 },
    hsl: { h: 100, s: 100, l: 76.5 }
  },
  {
    colorId: 157,
    hexString: '#afffaf',
    rgb: { r: 175, g: 255, b: 175 },
    hsl: { h: 120, s: 100, l: 84.3 }
  },
  {
    colorId: 158,
    hexString: '#afffd7',
    rgb: { r: 175, g: 255, b: 215 },
    hsl: { h: 150, s: 100, l: 84.3 }
  },
  {
    colorId: 159,
    hexString: '#afffff',
    rgb: { r: 175, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 84.3 }
  },
  {
    colorId: 160,
    hexString: '#d70000',
    rgb: { r: 215, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 42.2 }
  },
  {
    colorId: 161,
    hexString: '#d7005f',
    rgb: { r: 215, g: 0, b: 95 },
    hsl: { h: 333.5, s: 100, l: 42.2 }
  },
  {
    colorId: 162,
    hexString: '#d70087',
    rgb: { r: 215, g: 0, b: 135 },
    hsl: { h: 322.3, s: 100, l: 42.2 }
  },
  {
    colorId: 163,
    hexString: '#d700af',
    rgb: { r: 215, g: 0, b: 175 },
    hsl: { h: 311.2, s: 100, l: 42.2 }
  },
  {
    colorId: 164,
    hexString: '#d700d7',
    rgb: { r: 215, g: 0, b: 215 },
    hsl: { h: 300, s: 100, l: 42.2 }
  },
  {
    colorId: 165,
    hexString: '#d700ff',
    rgb: { r: 215, g: 0, b: 255 },
    hsl: { h: 290.6, s: 100, l: 50 }
  },
  {
    colorId: 166,
    hexString: '#d75f00',
    rgb: { r: 215, g: 95, b: 0 },
    hsl: { h: 26.5, s: 100, l: 42.2 }
  },
  {
    colorId: 167,
    hexString: '#d75f5f',
    rgb: { r: 215, g: 95, b: 95 },
    hsl: { h: 0, s: 60, l: 60.8 }
  },
  {
    colorId: 168,
    hexString: '#d75f87',
    rgb: { r: 215, g: 95, b: 135 },
    hsl: { h: 340, s: 60, l: 60.8 }
  },
  {
    colorId: 169,
    hexString: '#d75faf',
    rgb: { r: 215, g: 95, b: 175 },
    hsl: { h: 320, s: 60, l: 60.8 }
  },
  {
    colorId: 170,
    hexString: '#d75fd7',
    rgb: { r: 215, g: 95, b: 215 },
    hsl: { h: 300, s: 60, l: 60.8 }
  },
  {
    colorId: 171,
    hexString: '#d75fff',
    rgb: { r: 215, g: 95, b: 255 },
    hsl: { h: 285, s: 100, l: 68.6 }
  },
  {
    colorId: 172,
    hexString: '#d78700',
    rgb: { r: 215, g: 135, b: 0 },
    hsl: { h: 37.7, s: 100, l: 42.2 }
  },
  {
    colorId: 173,
    hexString: '#d7875f',
    rgb: { r: 215, g: 135, b: 95 },
    hsl: { h: 20, s: 60, l: 60.8 }
  },
  {
    colorId: 174,
    hexString: '#d78787',
    rgb: { r: 215, g: 135, b: 135 },
    hsl: { h: 0, s: 50, l: 68.6 }
  },
  {
    colorId: 175,
    hexString: '#d787af',
    rgb: { r: 215, g: 135, b: 175 },
    hsl: { h: 330, s: 50, l: 68.6 }
  },
  {
    colorId: 176,
    hexString: '#d787d7',
    rgb: { r: 215, g: 135, b: 215 },
    hsl: { h: 300, s: 50, l: 68.6 }
  },
  {
    colorId: 177,
    hexString: '#d787ff',
    rgb: { r: 215, g: 135, b: 255 },
    hsl: { h: 280, s: 100, l: 76.5 }
  },
  {
    colorId: 178,
    hexString: '#d7af00',
    rgb: { r: 215, g: 175, b: 0 },
    hsl: { h: 48.8, s: 100, l: 42.2 }
  },
  {
    colorId: 179,
    hexString: '#d7af5f',
    rgb: { r: 215, g: 175, b: 95 },
    hsl: { h: 40, s: 60, l: 60.8 }
  },
  {
    colorId: 180,
    hexString: '#d7af87',
    rgb: { r: 215, g: 175, b: 135 },
    hsl: { h: 30, s: 50, l: 68.6 }
  },
  {
    colorId: 181,
    hexString: '#d7afaf',
    rgb: { r: 215, g: 175, b: 175 },
    hsl: { h: 0, s: 33.3, l: 76.5 }
  },
  {
    colorId: 182,
    hexString: '#d7afd7',
    rgb: { r: 215, g: 175, b: 215 },
    hsl: { h: 300, s: 33.3, l: 76.5 }
  },
  {
    colorId: 183,
    hexString: '#d7afff',
    rgb: { r: 215, g: 175, b: 255 },
    hsl: { h: 270, s: 100, l: 84.3 }
  },
  {
    colorId: 184,
    hexString: '#d7d700',
    rgb: { r: 215, g: 215, b: 0 },
    hsl: { h: 60, s: 100, l: 42.2 }
  },
  {
    colorId: 185,
    hexString: '#d7d75f',
    rgb: { r: 215, g: 215, b: 95 },
    hsl: { h: 60, s: 60, l: 60.8 }
  },
  {
    colorId: 186,
    hexString: '#d7d787',
    rgb: { r: 215, g: 215, b: 135 },
    hsl: { h: 60, s: 50, l: 68.6 }
  },
  {
    colorId: 187,
    hexString: '#d7d7af',
    rgb: { r: 215, g: 215, b: 175 },
    hsl: { h: 60, s: 33.3, l: 76.5 }
  },
  {
    colorId: 188,
    hexString: '#d7d7d7',
    rgb: { r: 215, g: 215, b: 215 },
    hsl: { h: 0, s: 0, l: 84.3 }
  },
  {
    colorId: 189,
    hexString: '#d7d7ff',
    rgb: { r: 215, g: 215, b: 255 },
    hsl: { h: 240, s: 100, l: 92.2 }
  },
  {
    colorId: 190,
    hexString: '#d7ff00',
    rgb: { r: 215, g: 255, b: 0 },
    hsl: { h: 69.4, s: 100, l: 50 }
  },
  {
    colorId: 191,
    hexString: '#d7ff5f',
    rgb: { r: 215, g: 255, b: 95 },
    hsl: { h: 75, s: 100, l: 68.6 }
  },
  {
    colorId: 192,
    hexString: '#d7ff87',
    rgb: { r: 215, g: 255, b: 135 },
    hsl: { h: 80, s: 100, l: 76.5 }
  },
  {
    colorId: 193,
    hexString: '#d7ffaf',
    rgb: { r: 215, g: 255, b: 175 },
    hsl: { h: 90, s: 100, l: 84.3 }
  },
  {
    colorId: 194,
    hexString: '#d7ffd7',
    rgb: { r: 215, g: 255, b: 215 },
    hsl: { h: 120, s: 100, l: 92.2 }
  },
  {
    colorId: 195,
    hexString: '#d7ffff',
    rgb: { r: 215, g: 255, b: 255 },
    hsl: { h: 180, s: 100, l: 92.2 }
  },
  { colorId: 196, hexString: '#ff0000', rgb: { r: 255, g: 0, b: 0 }, hsl: { h: 0, s: 100, l: 50 } },
  {
    colorId: 197,
    hexString: '#ff005f',
    rgb: { r: 255, g: 0, b: 95 },
    hsl: { h: 337.6, s: 100, l: 50 }
  },
  {
    colorId: 198,
    hexString: '#ff0087',
    rgb: { r: 255, g: 0, b: 135 },
    hsl: { h: 328.2, s: 100, l: 50 }
  },
  {
    colorId: 199,
    hexString: '#ff00af',
    rgb: { r: 255, g: 0, b: 175 },
    hsl: { h: 318.8, s: 100, l: 50 }
  },
  {
    colorId: 200,
    hexString: '#ff00d7',
    rgb: { r: 255, g: 0, b: 215 },
    hsl: { h: 309.4, s: 100, l: 50 }
  },
  {
    colorId: 201,
    hexString: '#ff00ff',
    rgb: { r: 255, g: 0, b: 255 },
    hsl: { h: 300, s: 100, l: 50 }
  },
  {
    colorId: 202,
    hexString: '#ff5f00',
    rgb: { r: 255, g: 95, b: 0 },
    hsl: { h: 22.4, s: 100, l: 50 }
  },
  {
    colorId: 203,
    hexString: '#ff5f5f',
    rgb: { r: 255, g: 95, b: 95 },
    hsl: { h: 0, s: 100, l: 68.6 }
  },
  {
    colorId: 204,
    hexString: '#ff5f87',
    rgb: { r: 255, g: 95, b: 135 },
    hsl: { h: 345, s: 100, l: 68.6 }
  },
  {
    colorId: 205,
    hexString: '#ff5faf',
    rgb: { r: 255, g: 95, b: 175 },
    hsl: { h: 330, s: 100, l: 68.6 }
  },
  {
    colorId: 206,
    hexString: '#ff5fd7',
    rgb: { r: 255, g: 95, b: 215 },
    hsl: { h: 315, s: 100, l: 68.6 }
  },
  {
    colorId: 207,
    hexString: '#ff5fff',
    rgb: { r: 255, g: 95, b: 255 },
    hsl: { h: 300, s: 100, l: 68.6 }
  },
  {
    colorId: 208,
    hexString: '#ff8700',
    rgb: { r: 255, g: 135, b: 0 },
    hsl: { h: 31.8, s: 100, l: 50 }
  },
  {
    colorId: 209,
    hexString: '#ff875f',
    rgb: { r: 255, g: 135, b: 95 },
    hsl: { h: 15, s: 100, l: 68.6 }
  },
  {
    colorId: 210,
    hexString: '#ff8787',
    rgb: { r: 255, g: 135, b: 135 },
    hsl: { h: 0, s: 100, l: 76.5 }
  },
  {
    colorId: 211,
    hexString: '#ff87af',
    rgb: { r: 255, g: 135, b: 175 },
    hsl: { h: 340, s: 100, l: 76.5 }
  },
  {
    colorId: 212,
    hexString: '#ff87d7',
    rgb: { r: 255, g: 135, b: 215 },
    hsl: { h: 320, s: 100, l: 76.5 }
  },
  {
    colorId: 213,
    hexString: '#ff87ff',
    rgb: { r: 255, g: 135, b: 255 },
    hsl: { h: 300, s: 100, l: 76.5 }
  },
  {
    colorId: 214,
    hexString: '#ffaf00',
    rgb: { r: 255, g: 175, b: 0 },
    hsl: { h: 41.2, s: 100, l: 50 }
  },
  {
    colorId: 215,
    hexString: '#ffaf5f',
    rgb: { r: 255, g: 175, b: 95 },
    hsl: { h: 30, s: 100, l: 68.6 }
  },
  {
    colorId: 216,
    hexString: '#ffaf87',
    rgb: { r: 255, g: 175, b: 135 },
    hsl: { h: 20, s: 100, l: 76.5 }
  },
  {
    colorId: 217,
    hexString: '#ffafaf',
    rgb: { r: 255, g: 175, b: 175 },
    hsl: { h: 0, s: 100, l: 84.3 }
  },
  {
    colorId: 218,
    hexString: '#ffafd7',
    rgb: { r: 255, g: 175, b: 215 },
    hsl: { h: 330, s: 100, l: 84.3 }
  },
  {
    colorId: 219,
    hexString: '#ffafff',
    rgb: { r: 255, g: 175, b: 255 },
    hsl: { h: 300, s: 100, l: 84.3 }
  },
  {
    colorId: 220,
    hexString: '#ffd700',
    rgb: { r: 255, g: 215, b: 0 },
    hsl: { h: 50.6, s: 100, l: 50 }
  },
  {
    colorId: 221,
    hexString: '#ffd75f',
    rgb: { r: 255, g: 215, b: 95 },
    hsl: { h: 45, s: 100, l: 68.6 }
  },
  {
    colorId: 222,
    hexString: '#ffd787',
    rgb: { r: 255, g: 215, b: 135 },
    hsl: { h: 40, s: 100, l: 76.5 }
  },
  {
    colorId: 223,
    hexString: '#ffd7af',
    rgb: { r: 255, g: 215, b: 175 },
    hsl: { h: 30, s: 100, l: 84.3 }
  },
  {
    colorId: 224,
    hexString: '#ffd7d7',
    rgb: { r: 255, g: 215, b: 215 },
    hsl: { h: 0, s: 100, l: 92.2 }
  },
  {
    colorId: 225,
    hexString: '#ffd7ff',
    rgb: { r: 255, g: 215, b: 255 },
    hsl: { h: 300, s: 100, l: 92.2 }
  },
  {
    colorId: 226,
    hexString: '#ffff00',
    rgb: { r: 255, g: 255, b: 0 },
    hsl: { h: 60, s: 100, l: 50 }
  },
  {
    colorId: 227,
    hexString: '#ffff5f',
    rgb: { r: 255, g: 255, b: 95 },
    hsl: { h: 60, s: 100, l: 68.6 }
  },
  {
    colorId: 228,
    hexString: '#ffff87',
    rgb: { r: 255, g: 255, b: 135 },
    hsl: { h: 60, s: 100, l: 76.5 }
  },
  {
    colorId: 229,
    hexString: '#ffffaf',
    rgb: { r: 255, g: 255, b: 175 },
    hsl: { h: 60, s: 100, l: 84.3 }
  },
  {
    colorId: 230,
    hexString: '#ffffd7',
    rgb: { r: 255, g: 255, b: 215 },
    hsl: { h: 60, s: 100, l: 92.2 }
  },
  {
    colorId: 231,
    hexString: '#ffffff',
    rgb: { r: 255, g: 255, b: 255 },
    hsl: { h: 0, s: 0, l: 100 }
  },
  { colorId: 232, hexString: '#080808', rgb: { r: 8, g: 8, b: 8 }, hsl: { h: 0, s: 0, l: 3.1 } },
  { colorId: 233, hexString: '#121212', rgb: { r: 18, g: 18, b: 18 }, hsl: { h: 0, s: 0, l: 7.1 } },
  { colorId: 234, hexString: '#1c1c1c', rgb: { r: 28, g: 28, b: 28 }, hsl: { h: 0, s: 0, l: 11 } },
  {
    colorId: 235,
    hexString: '#262626',
    rgb: { r: 38, g: 38, b: 38 },
    hsl: { h: 0, s: 0, l: 14.9 }
  },
  {
    colorId: 236,
    hexString: '#303030',
    rgb: { r: 48, g: 48, b: 48 },
    hsl: { h: 0, s: 0, l: 18.8 }
  },
  {
    colorId: 237,
    hexString: '#3a3a3a',
    rgb: { r: 58, g: 58, b: 58 },
    hsl: { h: 0, s: 0, l: 22.8 }
  },
  {
    colorId: 238,
    hexString: '#444444',
    rgb: { r: 68, g: 68, b: 68 },
    hsl: { h: 0, s: 0, l: 26.7 }
  },
  {
    colorId: 239,
    hexString: '#4e4e4e',
    rgb: { r: 78, g: 78, b: 78 },
    hsl: { h: 0, s: 0, l: 30.6 }
  },
  {
    colorId: 240,
    hexString: '#585858',
    rgb: { r: 88, g: 88, b: 88 },
    hsl: { h: 0, s: 0, l: 34.5 }
  },
  {
    colorId: 241,
    hexString: '#626262',
    rgb: { r: 98, g: 98, b: 98 },
    hsl: { h: 0, s: 0, l: 38.4 }
  },
  {
    colorId: 242,
    hexString: '#6c6c6c',
    rgb: { r: 108, g: 108, b: 108 },
    hsl: { h: 0, s: 0, l: 42.4 }
  },
  {
    colorId: 243,
    hexString: '#767676',
    rgb: { r: 118, g: 118, b: 118 },
    hsl: { h: 0, s: 0, l: 46.3 }
  },
  {
    colorId: 244,
    hexString: '#808080',
    rgb: { r: 128, g: 128, b: 128 },
    hsl: { h: 0, s: 0, l: 50.2 }
  },
  {
    colorId: 245,
    hexString: '#8a8a8a',
    rgb: { r: 138, g: 138, b: 138 },
    hsl: { h: 0, s: 0, l: 54.1 }
  },
  {
    colorId: 246,
    hexString: '#949494',
    rgb: { r: 148, g: 148, b: 148 },
    hsl: { h: 0, s: 0, l: 58 }
  },
  {
    colorId: 247,
    hexString: '#9e9e9e',
    rgb: { r: 158, g: 158, b: 158 },
    hsl: { h: 0, s: 0, l: 62 }
  },
  {
    colorId: 248,
    hexString: '#a8a8a8',
    rgb: { r: 168, g: 168, b: 168 },
    hsl: { h: 0, s: 0, l: 65.9 }
  },
  {
    colorId: 249,
    hexString: '#b2b2b2',
    rgb: { r: 178, g: 178, b: 178 },
    hsl: { h: 0, s: 0, l: 69.8 }
  },
  {
    colorId: 250,
    hexString: '#bcbcbc',
    rgb: { r: 188, g: 188, b: 188 },
    hsl: { h: 0, s: 0, l: 73.7 }
  },
  {
    colorId: 251,
    hexString: '#c6c6c6',
    rgb: { r: 198, g: 198, b: 198 },
    hsl: { h: 0, s: 0, l: 77.7 }
  },
  {
    colorId: 252,
    hexString: '#d0d0d0',
    rgb: { r: 208, g: 208, b: 208 },
    hsl: { h: 0, s: 0, l: 81.6 }
  },
  {
    colorId: 253,
    hexString: '#dadada',
    rgb: { r: 218, g: 218, b: 218 },
    hsl: { h: 0, s: 0, l: 85.5 }
  },
  {
    colorId: 254,
    hexString: '#e4e4e4',
    rgb: { r: 228, g: 228, b: 228 },
    hsl: { h: 0, s: 0, l: 89.4 }
  },
  {
    colorId: 255,
    hexString: '#eeeeee',
    rgb: { r: 238, g: 238, b: 238 },
    hsl: { h: 0, s: 0, l: 93.3 }
  }
]

export default data
