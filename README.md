# Avataaars HTML Custom Elements

A lightweight, dependency-free library implementing the popular **Avataaars** avatar generator as native HTML Custom Elements (Web Components). 

This project is written entirely in **Vanilla JavaScript** using ES Modules. It runs natively in modern web browsers without requiring React, Node.js, bundlers, or compile steps.

![Avataaars Showcase](./avataaars-example.png)

> [!TIP]
> **Live Demo**: A live demo of this library is hosted on GitHub Pages at [gschoppe.github.io/avataaars.js](https://gschoppe.github.io/avataaars.js/).

---

## Features

- 🚀 **Zero Dependencies**: Native browser custom elements; no React, TypeScript, or Node prerequisites required at runtime.
- 📦 **Shadow DOM Encapsulated**: Encapsulates avatar styling and SVG dynamic mask IDs inside a Shadow DOM, preventing conflict with host page styles.
- 🎨 **Fully Customisable**: Controls for hair/headwear styles, face, eyes, eyebrows, mouth, clothes, fabrics, graphics, accessories, skin tone, and backdrop styles.
- ⚡ **Animations Built-in**: Smooth CSS keyframe animations for default, surprised, heart, cry, dizzy, and side-eye variations (can be disabled at will).
- 🔗 **Hash Serialization**: Serialize any customized avatar configuration into a compact 15-character Base-62 hash or instantiate an avatar directly from a hash.
- 🧩 **Sub-pieces Rendering**: Render individual parts of an avatar (e.g. just a hat, just clothes, just eyes) using `<avataaars-piece>`.

---

## Installation & Setup

Since the project uses browser-native ES Modules, you can load the library directly in your HTML:

```html
<!-- Import the custom elements -->
<script type="module" src="./src/avataaars.js"></script>

<!-- Use the custom elements in your document -->
<avataaars-avatar top-type="LongHairCurly" hair-color="SilverGray" clothe-type="Hoodie" clothe-color="Red"></avataaars-avatar>
```

> [!IMPORTANT]
> **CORS Restriction**: Because browser-native ES modules are loaded, opening `index.html` directly via the `file://` protocol will trigger CORS blocks. You must serve the folder using a local web server, for example:
> ```bash
> python3 -m http.server 8000
> ```
> Then navigate to `http://localhost:8000/`.

### Production Bundling & Code-Splitting (Filesize Optimization)

To optimize page-load performance, this library supports automatic SVG coordinate rounding, JSON schema key minification, and dynamic ESM code-splitting. 

To run the full compression and build pipeline, run:

```bash
# Install development dependencies (esbuild)
npm install

# Run the build pipeline
npm run build
```

The build command automatically executes two tasks in sequence:
1. **Compression & Dictionary Splitting**: Runs `scripts/compress.js` to parse the raw monolithic dictionary, round float coordinates to 1 decimal place, convert small scientific notations to 0, minify key names, and write individual category files into `src/avatar/pieces/`.
2. **ESM Code-Splitting compilation**: Runs `scripts/build.js` using `esbuild` to compile the library into lazy-loadable modules.

This creates the following file structure in the `dist/` directory:
- `dist/avataaars.js` (Standard ES module entrypoint)
- `dist/avataaars.min.js` (Minified ES module entrypoint — **only ~31 KB**!)
- `dist/chunks/` (Directory containing code-split category chunks like `eyes-*.js`, `top-*.js`, etc. which are loaded dynamically as needed)

> [!IMPORTANT]
> **Production Hosting**: When deploying the library to production, you must serve the `dist/chunks/` directory alongside the main entrypoint files. The main script (`avataaars.min.js`) automatically fetches the split chunks dynamically from the relative `./chunks/` subfolder at runtime.

---

## Usage Guide

### 1. Main Avatar Element (`<avataaars-avatar>`)

Use the `<avataaars-avatar>` element to render a full avatar.

#### Basic Customization via Attributes:
```html
<avataaars-avatar 
  backdrop-type="Circle"
  backdrop-color="PastelBlue"
  skin-color="Pale"
  top-type="ShortHairShaggy"
  hair-color="Black"
  clothe-type="GraphicShirt"
  graphic-type="Pizza"
  eye-type="Hearts"
  mouth-type="Smile"
  animated
></avataaars-avatar>
```

#### Initialization from a Hash:
You can instantiate a pre-configured avatar using a compact 15-character Base-62 hash:
```html
<avataaars-avatar hash="18K2934D2165037" animated></avataaars-avatar>
```

#### Feature Override Precedence:
If you supply a base configuration hash, you can still overwrite specific features individually. The order of priority is:
1. **JavaScript Property** (highest) — e.g. `avatar.topType = 'ShortHairShortFlat'`
2. **HTML Attribute** — e.g. `<avataaars-avatar top-type="ShortHairShortFlat">`
3. **Hash Config** — loaded from the `hash` value
4. **Default Config** (lowest) — fallback default configuration values

---

### 2. Avatar Pieces Element (`<avataaars-piece>`)

Use `<avataaars-piece>` to render individual avatar sub-components:

```html
<!-- Render just the Winter Hat piece -->
<avataaars-piece piece-type="top" top-type="WinterHat3" hat-color="Pink" piece-size="100"></avataaars-piece>

<!-- Render just the Surprised Eyes piece -->
<avataaars-piece piece-type="eyes" eye-type="Surprised" piece-size="80"></avataaars-piece>
```

---

## API & Configuration Options

The custom elements observe attribute changes and provide matching camelCase JavaScript properties.

### Observed Styling Attributes & Properties

| HTML Attribute | JavaScript Property | Available Option Lists |
| :--- | :--- | :--- |
| `backdrop-type` | `backdropType` | `Circle`, `Diamond`, `NoBackdrop` |
| `backdrop-color`| `backdropColor`| `Black`, `Blue01`, `Blue02`, `Blue03`, `Gray01`, `Gray02`, `Heather`, `PastelBlue`, `PastelGreen`, `PastelOrange`, `PastelRed`, `PastelYellow`, `Pink`, `Red`, `White` |
| `skin-color` | `skinColor` | `Tanned`, `Yellow`, `Pale`, `Light`, `Brown`, `DarkBrown`, `Black` |
| `top-type` | `topType` | `NoHair`, `Eyepatch`, `Hat`, `Hijab`, `Turban`, `WinterHat1`, `WinterHat2`, `WinterHat3`, `WinterHat4`, `LongHairBigHair`, `LongHairBob`, `LongHairBun`, `LongHairCurly`, `LongHairCurvy`, `LongHairDreads`, `LongHairFrida`, `LongHairFro`, `LongHairFroBand`, `LongHairMiaWallace`, `LongHairNotTooLong`, `LongHairShavedSides`, `LongHairStraight`, `LongHairStraight2`, `LongHairStraightStrand`, `ShortHairDreads01`, `ShortHairDreads02`, `ShortHairFrizzle`, `ShortHairShaggy`, `ShortHairShaggyMullet`, `ShortHairShortCurly`, `ShortHairShortFlat`, `ShortHairShortRound`, `ShortHairShortWaved`, `ShortHairSides`, `ShortHairTheCaesar`, `ShortHairTheCaesarSidePart` |
| `hair-color` | `hairColor` | `Auburn`, `Black`, `Blonde`, `BlondeGolden`, `Brown`, `BrownDark`, `PastelPink`, `Blue`, `Platinum`, `Red`, `SilverGray` |
| `hat-color` | `hatColor` | Same as `backdrop-color` |
| `clothe-type` | `clotheType` | `BlazerShirt`, `BlazerSweater`, `CollarSweater`, `GraphicShirt`, `Hoodie`, `Overall`, `ShirtCrewNeck`, `ShirtScoopNeck`, `ShirtVNeck` |
| `clothe-color` | `clotheColor` | Same as `backdrop-color` |
| `graphic-type` | `graphicType` | `Bat`, `Cumbia`, `Deer`, `Diamond`, `Hola`, `Pizza`, `Resist`, `Selena`, `Skull`, `SkullOutline` |
| `eye-type` | `eyeType` | `Close`, `Cry`, `Default`, `Dizzy`, `EyeRoll`, `Happy`, `Hearts`, `Side`, `Squint`, `Surprised`, `Wink`, `WinkWacky` |
| `eyebrow-type` | `eyebrowType` | `Angry`, `AngryNatural`, `Default`, `DefaultNatural`, `FlatNatural`, `FrownNatural`, `RaisedExcited`, `RaisedExcitedNatural`, `SadConcerned`, `SadConcernedNatural`, `UnibrowNatural`, `UpDown`, `UpDownNatural` |
| `mouth-type` | `mouthType` | `Concerned`, `Default`, `Disbelief`, `Eating`, `Grimace`, `Sad`, `ScreamOpen`, `Serious`, `SideChew`, `SideSmile`, `Smile`, `Tongue`, `Twinkle`, `Vomit`, `Whistling` |
| `facial-hair-type`| `facialHairType`| `Blank`, `BeardLight`, `BeardMajestic`, `BeardMedium`, `MoustacheFancy`, `MoustacheMagnum` |
| `facial-hair-color`| `facialHairColor`| Same as `hair-color` |
| `accessories-type`| `accessoriesType`| `Blank`, `Kurt`, `Prescription01`, `Prescription02`, `Round`, `Sunglasses`, `Wayfarers` |

### Utility Attributes & Properties
- **`hash`** (`hash`): 15-character configuration string.
- **`animated`** (`animated`): Boolean attribute. Include to trigger dynamic blinking and mouth/nose wiggle animations on the SVG.
- **`uid`** (`uid`): Optional override for SVG element IDs (automatically generates a unique string if omitted).
- **`animation-delay`** (`animationDelay`): Override starting offset time for keyframe animations (automatically defaults to a random value from `0s` to `5s` so that multiple avatars on the same page do not blink in synchronised unison).

---

## JavaScript API Exports

You can import utilities directly from `src/avataaars.js` to build external UI editors or edit colors:

```javascript
import { 
  generateRandomAvataarProps, 
  getAvatarHash,
  getAvatarConfigFromHash,
  addPaletteColor,
  removePaletteColor
} from './src/avataaars.js';

// 1. Generate randomized coordinates (coordinated to prevent color clashes)
const randomProps = generateRandomAvataarProps();

// 2. Generate serialization hash from a configuration
const hash = getAvatarHash(randomProps); // e.g. "18K2934D2165037"

// 3. Register custom colors at runtime (dynamic gradients or solid colors)
addPaletteColor('BACKDROP', 'SunsetGlow', {
  type: 'linear',
  attrs: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
  stops: [
    { offset: '0%', color: '#ff7e5f' },
    { offset: '100%', color: '#feb47b' }
  ]
});
```

---

## License

This project is released under the MIT License.
