import {
  __async
} from "./chunks/chunk-5Y7WCCIS.js";

// src/uniqueId.js
var idCounter = 0;
function uniqueId(prefix = "") {
  idCounter += 1;
  return `${prefix}${idCounter}`;
}

// src/avatar/svgDictionary.js
var categoryModules = {
  BACKDROP: () => import("./chunks/backdrop-3YCEBRM4.js"),
  CLOTHES: () => import("./chunks/clothes-WM27OMOM.js"),
  MOUTH: () => import("./chunks/mouth-SQ3D7RPY.js"),
  NOSE: () => import("./chunks/nose-BC67RVRC.js"),
  EYES: () => import("./chunks/eyes-5LRHIMDK.js"),
  EYEBROW: () => import("./chunks/eyebrow-ACDTP67H.js"),
  ACCESSORIES: () => import("./chunks/accessories-ZFIUFXC7.js"),
  TOP: () => import("./chunks/top-54FMZDD4.js"),
  FACIAL_HAIR: () => import("./chunks/facialHair-ZIATZI3B.js")
};
var loadedCategories = {};
function loadCategories(categories) {
  return __async(this, null, function* () {
    yield Promise.all(
      categories.map((cat) => __async(this, null, function* () {
        if (loadedCategories[cat])
          return;
        if (!categoryModules[cat])
          return;
        const mod = yield categoryModules[cat]();
        loadedCategories[cat] = mod.default || mod;
      }))
    );
  });
}
var SVG_DICTIONARY = new Proxy({}, {
  get(target, category) {
    return loadedCategories[category];
  }
});

// src/options/index.js
var PALETTES = {
  BACKDROP: "BACKDROP",
  SKIN: "SKIN",
  HAIR: "HAIR",
  FACIAL_HAIR: "FACIAL_HAIR",
  CLOTHES: "CLOTHES",
  HAT: "HAT"
};
var backdropColorPalette = /* @__PURE__ */ new Map();
var skinColorPalette = /* @__PURE__ */ new Map();
var hairColorPalette = /* @__PURE__ */ new Map();
var facialHairColorPalette = /* @__PURE__ */ new Map();
var clotheColorPalette = /* @__PURE__ */ new Map();
var hatColorPalette = /* @__PURE__ */ new Map();
function makeBackdropColor(name, color) {
  backdropColorPalette.set(name, color);
  return color;
}
function makeSkinColor(name, color) {
  skinColorPalette.set(name, color);
  return color;
}
function makeHairColor(name, color) {
  hairColorPalette.set(name, color);
  return color;
}
function makeFacialHairColor(name, color) {
  facialHairColorPalette.set(name, color);
  return color;
}
function makeClotheColor(name, color) {
  clotheColorPalette.set(name, color);
  return color;
}
function makeHatColor(name, color) {
  hatColorPalette.set(name, color);
  return color;
}
makeBackdropColor("Black", "#262E33");
makeBackdropColor("Blue01", "#65C9FF");
makeBackdropColor("Blue02", "#5199E4");
makeBackdropColor("Blue03", "#25557C");
makeBackdropColor("Gray01", "#E6E6E6");
makeBackdropColor("Gray02", "#929598");
makeBackdropColor("Heather", "#3C4F5C");
makeBackdropColor("PastelBlue", "#B1E2FF");
makeBackdropColor("PastelGreen", "#A7FFC4");
makeBackdropColor("PastelOrange", "#FFDEB5");
makeBackdropColor("PastelRed", "#FFAFB9");
makeBackdropColor("PastelYellow", "#FFFFB1");
makeBackdropColor("Pink", "#FF488E");
makeBackdropColor("Red", "#FF5C5C");
makeBackdropColor("White", "#FFFFFF");
makeSkinColor("Tanned", "#FD9841");
makeSkinColor("Yellow", "#F8D25C");
makeSkinColor("Pale", "#FFDBB4");
makeSkinColor("Light", "#EDB98A");
makeSkinColor("Brown", "#D08B5B");
makeSkinColor("DarkBrown", "#AE5D29");
makeSkinColor("Black", "#614335");
makeClotheColor("Black", "#262E33");
makeClotheColor("Blue01", "#65C9FF");
makeClotheColor("Blue02", "#5199E4");
makeClotheColor("Blue03", "#25557C");
makeClotheColor("Gray01", "#E6E6E6");
makeClotheColor("Gray02", "#929598");
makeClotheColor("Heather", "#3C4F5C");
makeClotheColor("PastelBlue", "#B1E2FF");
makeClotheColor("PastelGreen", "#A7FFC4");
makeClotheColor("PastelOrange", "#FFDEB5");
makeClotheColor("PastelRed", "#FFAFB9");
makeClotheColor("PastelYellow", "#FFFFB1");
makeClotheColor("Pink", "#FF488E");
makeClotheColor("Red", "#FF5C5C");
makeClotheColor("White", "#FFFFFF");
makeHairColor("Auburn", "#A55728");
makeHairColor("Black", "#2C1B18");
makeHairColor("Blonde", "#B58143");
makeHairColor("BlondeGolden", "#D6B370");
makeHairColor("Brown", "#724133");
makeHairColor("BrownDark", "#4A312C");
makeHairColor("PastelPink", "#F59797");
makeHairColor("Blue", "#000fdb");
makeHairColor("Platinum", "#ECDCBF");
makeHairColor("Red", "#C93305");
makeHairColor("SilverGray", "#E8E1E1");
makeHatColor("Black", "#262E33");
makeHatColor("Blue01", "#65C9FF");
makeHatColor("Blue02", "#5199E4");
makeHatColor("Blue03", "#25557C");
makeHatColor("Gray01", "#E6E6E6");
makeHatColor("Gray02", "#929598");
makeHatColor("Heather", "#3C4F5C");
makeHatColor("PastelBlue", "#B1E2FF");
makeHatColor("PastelGreen", "#A7FFC4");
makeHatColor("PastelOrange", "#FFDEB5");
makeHatColor("PastelRed", "#FFAFB9");
makeHatColor("PastelYellow", "#FFFFB1");
makeHatColor("Pink", "#FF488E");
makeHatColor("Red", "#FF5C5C");
makeHatColor("White", "#FFFFFF");
makeFacialHairColor("Auburn", "#A55728");
makeFacialHairColor("Black", "#2C1B18");
makeFacialHairColor("Blonde", "#B58143");
makeFacialHairColor("BlondeGolden", "#D6B370");
makeFacialHairColor("Brown", "#724133");
makeFacialHairColor("BrownDark", "#4A312C");
makeFacialHairColor("Platinum", "#ECDCBF");
makeFacialHairColor("Red", "#C93305");
makeFacialHairColor("SilverGray", "#E8E1E1");
function addPaletteColor(palette, name, color) {
  let resolvedColor;
  if (color === void 0) {
    if (registeredGradients.has(name)) {
      resolvedColor = `url(#{uid}-gradient-${name})`;
    } else {
      throw new Error(`Color parameter is required unless '${name}' is a registered gradient.`);
    }
  } else if (typeof color === "object" && color !== null) {
    registerGradient(name, color);
    resolvedColor = `url(#{uid}-gradient-${name})`;
  } else {
    if (typeof color === "string" && color.startsWith("url(#") && !color.includes("{uid}")) {
      const gradName = color.slice(5, -1);
      if (registeredGradients.has(gradName)) {
        resolvedColor = `url(#{uid}-gradient-${gradName})`;
      } else {
        resolvedColor = color;
      }
    } else {
      resolvedColor = color;
    }
  }
  switch (palette) {
    case PALETTES.BACKDROP:
      return makeBackdropColor(name, resolvedColor);
    case PALETTES.SKIN:
      return makeSkinColor(name, resolvedColor);
    case PALETTES.HAIR:
      return makeHairColor(name, resolvedColor);
    case PALETTES.FACIAL_HAIR:
      return makeFacialHairColor(name, resolvedColor);
    case PALETTES.CLOTHES:
      return makeClotheColor(name, resolvedColor);
    case PALETTES.HAT:
      return makeHatColor(name, resolvedColor);
    default:
      throw new Error(`Unknown palette: ${palette}`);
  }
}
function removePaletteColor(palette, name) {
  switch (palette) {
    case PALETTES.BACKDROP:
      backdropColorPalette.delete(name);
      break;
    case PALETTES.SKIN:
      skinColorPalette.delete(name);
      break;
    case PALETTES.HAIR:
      hairColorPalette.delete(name);
      break;
    case PALETTES.FACIAL_HAIR:
      facialHairColorPalette.delete(name);
      break;
    case PALETTES.CLOTHES:
      clotheColorPalette.delete(name);
      break;
    case PALETTES.HAT:
      hatColorPalette.delete(name);
      break;
  }
}
var registeredGradients = /* @__PURE__ */ new Map();
function registerGradient(name, config) {
  registeredGradients.set(name, config);
}
var BACKDROP_TYPES = ["Circle", "Diamond", "NoBackdrop"];
var BACKDROP_COLORS = [
  "Black",
  "Blue01",
  "Blue02",
  "Blue03",
  "Gray01",
  "Gray02",
  "Heather",
  "PastelBlue",
  "PastelGreen",
  "PastelOrange",
  "PastelRed",
  "PastelYellow",
  "Pink",
  "Red",
  "White"
];
var TOP_TYPES = [
  "NoHair",
  "Eyepatch",
  "Hat",
  "Hijab",
  "Turban",
  "WinterHat1",
  "WinterHat2",
  "WinterHat3",
  "WinterHat4",
  "LongHairBigHair",
  "LongHairBob",
  "LongHairBun",
  "LongHairCurly",
  "LongHairCurvy",
  "LongHairDreads",
  "LongHairFrida",
  "LongHairFro",
  "LongHairFroBand",
  "LongHairMiaWallace",
  "LongHairNotTooLong",
  "LongHairShavedSides",
  "LongHairStraight",
  "LongHairStraight2",
  "LongHairStraightStrand",
  "ShortHairDreads01",
  "ShortHairDreads02",
  "ShortHairFrizzle",
  "ShortHairShaggy",
  "ShortHairShaggyMullet",
  "ShortHairShortCurly",
  "ShortHairShortFlat",
  "ShortHairShortRound",
  "ShortHairShortWaved",
  "ShortHairSides",
  "ShortHairTheCaesar",
  "ShortHairTheCaesarSidePart"
];
var HAIR_COLORS = [
  "Auburn",
  "Black",
  "Blonde",
  "BlondeGolden",
  "Brown",
  "BrownDark",
  "PastelPink",
  "Blue",
  "Platinum",
  "Red",
  "SilverGray"
];
var HAT_COLORS = [...BACKDROP_COLORS];
var FACIAL_HAIR_TYPES = [
  "Blank",
  "BeardLight",
  "BeardMajestic",
  "BeardMedium",
  "MoustacheFancy",
  "MoustacheMagnum"
];
var FACIAL_HAIR_COLORS = [...HAIR_COLORS];
var CLOTHE_TYPES = [
  "BlazerShirt",
  "BlazerSweater",
  "CollarSweater",
  "GraphicShirt",
  "Hoodie",
  "Overall",
  "ShirtCrewNeck",
  "ShirtScoopNeck",
  "ShirtVNeck"
];
var CLOTHE_COLORS = [
  "Black",
  "Blue01",
  "Blue02",
  "Blue03",
  "Gray01",
  "Gray02",
  "Heather",
  "PastelBlue",
  "PastelGreen",
  "PastelOrange",
  "PastelRed",
  "PastelYellow",
  "Pink",
  "Red",
  "White"
];
var ACCESSORIES_TYPES = [
  "Blank",
  "Kurt",
  "Prescription01",
  "Prescription02",
  "Round",
  "Sunglasses",
  "Wayfarers"
];
var GRAPHIC_TYPES = [
  "Bat",
  "Cumbia",
  "Deer",
  "Diamond",
  "Hola",
  "Pizza",
  "Resist",
  "Selena",
  "Skull",
  "SkullOutline"
];
var EYE_TYPES = [
  "Close",
  "Cry",
  "Default",
  "Dizzy",
  "EyeRoll",
  "Happy",
  "Hearts",
  "Side",
  "Squint",
  "Surprised",
  "Wink",
  "WinkWacky"
];
var EYEBROW_TYPES = [
  "Angry",
  "AngryNatural",
  "Default",
  "DefaultNatural",
  "FlatNatural",
  "FrownNatural",
  "RaisedExcited",
  "RaisedExcitedNatural",
  "SadConcerned",
  "SadConcernedNatural",
  "UnibrowNatural",
  "UpDown",
  "UpDownNatural"
];
var MOUTH_TYPES = [
  "Concerned",
  "Default",
  "Disbelief",
  "Eating",
  "Grimace",
  "Sad",
  "ScreamOpen",
  "Serious",
  "SideChew",
  "SideSmile",
  "Smile",
  "Tongue",
  "Twinkle",
  "Vomit",
  "Whistling"
];
var SKIN_COLORS = [
  "Tanned",
  "Yellow",
  "Pale",
  "Light",
  "Brown",
  "DarkBrown",
  "Black"
];
var getColorFamily = (color) => {
  const c = color.toLowerCase();
  if (c.includes("red") || c.includes("auburn"))
    return "red";
  if (c.includes("blue"))
    return "blue";
  if (c.includes("green"))
    return "green";
  if (c.includes("yellow") || c.includes("blonde") || c.includes("platinum"))
    return "yellow";
  if (c.includes("pink"))
    return "pink";
  if (c.includes("gray") || c.includes("grey") || c.includes("heather") || c.includes("silver"))
    return "gray";
  if (c.includes("black"))
    return "black";
  if (c.includes("white"))
    return "white";
  if (c.includes("orange"))
    return "orange";
  if (c.includes("brown"))
    return "brown";
  return c;
};
function generateRandomAvataarProps(customOptions) {
  const newProps = {};
  const getOptions = (key, staticList) => {
    return customOptions && customOptions[key] || staticList;
  };
  const backdropTypes = getOptions("backdropType", BACKDROP_TYPES);
  const backdropColors = getOptions("backdropColor", BACKDROP_COLORS);
  const topTypes = getOptions("topType", TOP_TYPES);
  const hairColors = getOptions("hairColor", HAIR_COLORS);
  const hatColors = getOptions("hatColor", HAT_COLORS);
  const facialHairTypes = getOptions("facialHairType", FACIAL_HAIR_TYPES);
  const facialHairColors = getOptions("facialHairColor", FACIAL_HAIR_COLORS);
  const clotheTypes = getOptions("clotheType", CLOTHE_TYPES);
  const clotheColors = getOptions("clotheColor", CLOTHE_COLORS);
  const accessoriesTypes = getOptions("accessoriesType", ACCESSORIES_TYPES);
  const graphicTypes = getOptions("graphicType", GRAPHIC_TYPES);
  const eyeTypes = getOptions("eyeType", EYE_TYPES);
  const eyebrowTypes = getOptions("eyebrowType", EYEBROW_TYPES);
  const mouthTypes = getOptions("mouthType", MOUTH_TYPES);
  const skinColors = getOptions("skinColor", SKIN_COLORS);
  if (backdropTypes.length > 0) {
    newProps.backdropType = backdropTypes[Math.floor(Math.random() * backdropTypes.length)];
  }
  if (topTypes.length === 0)
    return newProps;
  const topType = topTypes[Math.floor(Math.random() * topTypes.length)];
  newProps.topType = topType;
  const isShortHair = topType.startsWith("ShortHair") || topType === "NoHair" || topType === "Eyepatch";
  const isLongHair = topType.startsWith("LongHair");
  const isWinterHat = topType.startsWith("WinterHat");
  const isHat = topType === "Hat" || isWinterHat;
  const isHijab = topType === "Hijab";
  let hairColor = "BrownDark";
  if (hairColors.length > 0) {
    const pinkColors = hairColors.filter((c) => c.toLowerCase().includes("pink"));
    const nonPinkColors = hairColors.filter((c) => !c.toLowerCase().includes("pink"));
    const pinkChance = isLongHair ? 0.15 : 0.02;
    if (pinkColors.length > 0 && Math.random() < pinkChance) {
      hairColor = pinkColors[Math.floor(Math.random() * pinkColors.length)];
    } else if (nonPinkColors.length > 0) {
      hairColor = nonPinkColors[Math.floor(Math.random() * nonPinkColors.length)];
    } else {
      hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    }
  }
  newProps.hairColor = hairColor;
  let hatColor = "Black";
  if (isHat && hatColors.length > 0) {
    hatColor = hatColors[Math.floor(Math.random() * hatColors.length)];
    newProps.hatColor = hatColor;
  }
  if (facialHairTypes.length > 0) {
    let facialHairChance = 0.25;
    if (isHijab) {
      facialHairChance = 5e-3;
    } else if (isShortHair) {
      facialHairChance = 0.4;
    } else if (isLongHair) {
      facialHairChance = 0.15;
    }
    if (hairColor.toLowerCase().includes("pink")) {
      facialHairChance = 0.03;
    }
    const hasFacialHair = Math.random() < facialHairChance;
    const nonBlankFacialHair = facialHairTypes.filter((f) => f !== "Blank");
    if (hasFacialHair && nonBlankFacialHair.length > 0) {
      newProps.facialHairType = nonBlankFacialHair[Math.floor(Math.random() * nonBlankFacialHair.length)];
      const shouldMatchColor = Math.random() < 0.85;
      if (shouldMatchColor && facialHairColors.includes(hairColor)) {
        newProps.facialHairColor = hairColor;
      } else if (facialHairColors.length > 0) {
        newProps.facialHairColor = facialHairColors[Math.floor(Math.random() * facialHairColors.length)];
      } else {
        newProps.facialHairColor = hairColor;
      }
    } else {
      newProps.facialHairType = "Blank";
      newProps.facialHairColor = "Blank";
    }
  }
  if (clotheTypes.length > 0) {
    let restrictedClothes = [...clotheTypes];
    const shouldCoordinateOutfit = Math.random() < 0.85;
    if (shouldCoordinateOutfit) {
      if (isWinterHat) {
        restrictedClothes = clotheTypes.filter(
          (c) => c === "Hoodie" || c === "CollarSweater" || c === "BlazerSweater" || c === "Overall"
        );
      } else if (topType === "Hat") {
        restrictedClothes = clotheTypes.filter(
          (c) => c === "Hoodie" || c === "GraphicShirt" || c === "ShirtCrewNeck" || c === "ShirtVNeck" || c === "ShirtScoopNeck" || c === "Overall"
        );
      }
    }
    if (restrictedClothes.length === 0) {
      restrictedClothes = [...clotheTypes];
    }
    newProps.clotheType = restrictedClothes[Math.floor(Math.random() * restrictedClothes.length)];
  }
  if (clotheColors.length > 0) {
    const shouldMatchHat = isHat && clotheColors.includes(hatColor) && Math.random() < 0.35;
    if (shouldMatchHat) {
      newProps.clotheColor = hatColor;
    } else {
      newProps.clotheColor = clotheColors[Math.floor(Math.random() * clotheColors.length)];
    }
  }
  const otherKeys = {
    accessoriesType: accessoriesTypes,
    graphicType: graphicTypes,
    eyeType: eyeTypes,
    eyebrowType: eyebrowTypes,
    mouthType: mouthTypes,
    skinColor: skinColors
  };
  for (const [key, opts] of Object.entries(otherKeys)) {
    if (opts.length > 0) {
      newProps[key] = opts[Math.floor(Math.random() * opts.length)];
    }
  }
  if (backdropColors.length > 0) {
    const activeFamilies = /* @__PURE__ */ new Set();
    const addColorFamily = (colorName) => {
      if (colorName && colorName !== "Blank") {
        activeFamilies.add(getColorFamily(colorName));
      }
    };
    addColorFamily(newProps.clotheColor);
    if (isHat) {
      addColorFamily(newProps.hatColor);
    }
    const hairIsVisible = !isHijab && !isWinterHat && topType !== "NoHair" && topType !== "Eyepatch";
    if (hairIsVisible) {
      addColorFamily(newProps.hairColor);
    }
    if (newProps.facialHairType && newProps.facialHairType !== "Blank") {
      addColorFamily(newProps.facialHairColor);
    }
    const safeBackdropColors = backdropColors.filter((color) => {
      const family = getColorFamily(color);
      return !activeFamilies.has(family);
    });
    if (safeBackdropColors.length > 0) {
      newProps.backdropColor = safeBackdropColors[Math.floor(Math.random() * safeBackdropColors.length)];
    } else {
      newProps.backdropColor = backdropColors[Math.floor(Math.random() * backdropColors.length)];
    }
  }
  return newProps;
}
var BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var HASH_ORDER = [
  "backdropType",
  "backdropColor",
  "topType",
  "accessoriesType",
  "hatColor",
  "hairColor",
  "facialHairType",
  "facialHairColor",
  "clotheType",
  "clotheColor",
  "graphicType",
  "eyeType",
  "eyebrowType",
  "mouthType",
  "skinColor"
];
var DEFAULT_AVATAR_PROPS = {
  backdropType: "Diamond",
  backdropColor: "PastelBlue",
  topType: "ShortHairShortFlat",
  accessoriesType: "Prescription02",
  hairColor: "Black",
  hatColor: "Black",
  facialHairType: "BeardLight",
  facialHairColor: "BrownDark",
  clotheType: "BlazerShirt",
  clotheColor: "Heather",
  graphicType: "Bat",
  eyeType: "Side",
  eyebrowType: "Default",
  mouthType: "Default",
  skinColor: "Tanned"
};
function getOptionList(key) {
  switch (key) {
    case "backdropType":
      return BACKDROP_TYPES;
    case "backdropColor":
      return Array.from(backdropColorPalette.keys());
    case "topType":
      return TOP_TYPES;
    case "accessoriesType":
      return ACCESSORIES_TYPES;
    case "hatColor":
      return Array.from(hatColorPalette.keys());
    case "hairColor":
      return Array.from(hairColorPalette.keys());
    case "facialHairType":
      return FACIAL_HAIR_TYPES;
    case "facialHairColor":
      return Array.from(facialHairColorPalette.keys());
    case "clotheType":
      return CLOTHE_TYPES;
    case "clotheColor":
      return Array.from(clotheColorPalette.keys());
    case "graphicType":
      return GRAPHIC_TYPES;
    case "eyeType":
      return EYE_TYPES;
    case "eyebrowType":
      return EYEBROW_TYPES;
    case "mouthType":
      return MOUTH_TYPES;
    case "skinColor":
      return Array.from(skinColorPalette.keys());
    default:
      return [];
  }
}
function getAvatarHash(config) {
  let hash = "";
  for (const key of HASH_ORDER) {
    const list = getOptionList(key);
    const val = config[key] || DEFAULT_AVATAR_PROPS[key];
    let index = list.indexOf(val);
    if (index === -1) {
      index = list.indexOf(DEFAULT_AVATAR_PROPS[key]);
      if (index === -1)
        index = 0;
    }
    const char = BASE62[index] || "0";
    hash += char;
  }
  return hash;
}
function getAvatarConfigFromHash(hash) {
  const config = {};
  const cleanHash = (hash || "").trim();
  HASH_ORDER.forEach((key, i) => {
    const list = getOptionList(key);
    const char = cleanHash[i];
    if (!char) {
      config[key] = DEFAULT_AVATAR_PROPS[key];
      return;
    }
    const index = BASE62.indexOf(char);
    if (index === -1 || index >= list.length) {
      config[key] = DEFAULT_AVATAR_PROPS[key];
    } else {
      config[key] = list[index];
    }
  });
  return config;
}

// src/avatar/SvgDictionaryRenderer.js
function renderSvgNode(node, uid, options = {}, childrenHtml = "") {
  var _a, _b, _c;
  if (!node)
    return "";
  const type = node.t !== void 0 ? node.t : node.type;
  const nodeProps = node.p !== void 0 ? node.p : node.props;
  const nodeChildren = node.c !== void 0 ? node.c : node.children;
  const resolveProps = (rawProps) => {
    if (!rawProps)
      return {};
    const resolved = {};
    Object.entries(rawProps).forEach(([key, val]) => {
      if (typeof val === "string") {
        let processedVal = val.replace(/\${uid}/g, "{uid}").replace(/\${uid}/g, "{uid}");
        processedVal = processedVal.replace(/{uid}/g, uid).replace(/{uid}/g, uid);
        if (processedVal.startsWith("`") && processedVal.endsWith("`")) {
          processedVal = processedVal.substring(1, processedVal.length - 1);
          processedVal = processedVal.replace(/\${([^}]+)}/g, "$1");
        }
        const concatMatch = processedVal.match(/^'#' \+ (path|filter|mask|accessories)([0-9]+)$/);
        if (concatMatch) {
          processedVal = `#${uid}-top-${concatMatch[1]}${concatMatch[2]}`;
        }
        const urlMatch = processedVal.match(/url\(#(path|filter|mask|accessories)([0-9]+)\)/g);
        if (urlMatch) {
          processedVal = processedVal.replace(/url\(#(path|filter|mask|accessories)([0-9]+)\)/g, `url(#${uid}-top-$1$2)`);
        }
        processedVal = processedVal.replace(/url\(#clothingColorMask\)/gi, `url(#${uid}-Clothing-Color-Mask)`);
        processedVal = processedVal.replace(/url\(#hatColorMask\)/g, `url(#${uid}-Hat-Color-Mask)`);
        processedVal = processedVal.replace(/url\(#facialHairMask\)/g, `url(#${uid}-Facial-Hair-Mask)`);
        processedVal = processedVal.replace(/url\(#hairColorMask\)/g, `url(#${uid}-Hair-Color-Mask)`);
        processedVal = processedVal.replace(/#clothingColorMask/gi, `#${uid}-Clothing-Color-Mask`);
        processedVal = processedVal.replace(/#hatColorMask/g, `#${uid}-Hat-Color-Mask`);
        processedVal = processedVal.replace(/#facialHairMask/g, `#${uid}-Facial-Hair-Mask`);
        processedVal = processedVal.replace(/#hairColorMask/g, `#${uid}-Hair-Color-Mask`);
        for (const gradName of registeredGradients.keys()) {
          processedVal = processedVal.replace(new RegExp(`url\\(#${gradName}\\)`, "g"), `url(#${uid}-gradient-${gradName})`);
          processedVal = processedVal.replace(new RegExp(`#${gradName}`, "g"), `#${uid}-gradient-${gradName}`);
        }
        resolved[key] = processedVal;
      } else {
        resolved[key] = val;
      }
    });
    if (resolved.id && typeof resolved.id === "string") {
      const idMatch = resolved.id.match(/^(path|filter|mask|accessories)([0-9]+)$/);
      if (idMatch) {
        resolved.id = `${uid}-top-${idMatch[1]}${idMatch[2]}`;
      }
    }
    if (resolved.id === "clothingColorMask" || resolved.id === "ClothingColorMask") {
      resolved.id = `${uid}-Clothing-Color-Mask`;
    } else if (resolved.id === "hatColorMask") {
      resolved.id = `${uid}-Hat-Color-Mask`;
    } else if (resolved.id === "facialHairMask") {
      resolved.id = `${uid}-Facial-Hair-Mask`;
    } else if (resolved.id === "hairColorMask") {
      resolved.id = `${uid}-Hair-Color-Mask`;
    }
    let idSuffix = "";
    Object.keys(resolved).forEach((key) => {
      if (key.startsWith("-") && !key.startsWith("--")) {
        idSuffix = key.substring(1);
        delete resolved[key];
      }
    });
    if (idSuffix && (resolved.id === "{uid}" || resolved.id === "uid" || resolved.id === uid)) {
      resolved.id = `${uid}-${idSuffix}`;
    }
    return resolved;
  };
  const resolvedProps = resolveProps(nodeProps);
  switch (type) {
    case "":
    case "React.Fragment":
      return (nodeChildren || []).map((child) => renderSvgNode(child, uid, options, childrenHtml)).join("");
    case "Children":
      return childrenHtml;
    case "FacialHair": {
      const fType = options.facialHairType || "Blank";
      if (fType === "Blank")
        return "";
      const subNode = (_a = SVG_DICTIONARY["FACIAL_HAIR"]) == null ? void 0 : _a[fType];
      return renderSvgNode(subNode, uid, options, childrenHtml);
    }
    case "HairColor": {
      const val = options.hairColor || "Black";
      const colorVal = hairColorPalette.get(val) || hairColorPalette.get("Black") || "#000000";
      const resolvedColor = colorVal.replace(/{uid}/g, uid);
      return `<g id="${uid}-HairColor/${val}" mask="url(#${uid}-Hair-Color-Mask)" fill="${resolvedColor}">
        <g transform="translate(0.000000, 0.000000)" id="Color">
          <rect x="0" y="0" width="264" height="280" />
        </g>
      </g>`;
    }
    case "Accessories": {
      const aType = options.accessoriesType || "Blank";
      if (aType === "Blank")
        return "";
      const subNode = (_b = SVG_DICTIONARY["ACCESSORIES"]) == null ? void 0 : _b[aType];
      return renderSvgNode(subNode, uid, options, childrenHtml);
    }
    case "BackdropColor": {
      const defaultColor = resolvedProps.defaultColor || "Blue01";
      const val = options.backdropColor || defaultColor;
      const colorVal = backdropColorPalette.get(val) || backdropColorPalette.get("Blue01") || "#000000";
      const resolvedColor = colorVal.replace(/{uid}/g, uid);
      return `<g id="${uid}-BackdropColor/${val}" mask="url(#${uid}-Backdrop-Color-Mask)" fill="${resolvedColor}">
        <rect id="${uid}-\u{1F58D}Color" x="0" y="0" width="280" height="280" />
      </g>`;
    }
    case "ClotheColor":
    case "Colors": {
      const val = options.clotheColor || "Gray01";
      const colorVal = clotheColorPalette.get(val) || clotheColorPalette.get("Gray01") || "#000000";
      const resolvedColor = colorVal.replace(/{uid}/g, uid);
      return `<g id="${uid}-ClotheColor/${val}" mask="url(#${uid}-Clothing-Color-Mask)" fillRule="evenodd" fill="${resolvedColor}">
        <rect id="${uid}-\u{1F58D}Color" x="0" y="0" width="264" height="110" />
      </g>`;
    }
    case "HatColor": {
      const val = options.hatColor || "Black";
      const colorVal = hatColorPalette.get(val) || hatColorPalette.get("Black") || "#000000";
      const resolvedColor = colorVal.replace(/{uid}/g, uid);
      return `<g id="${uid}-HatColor/${val}" mask="url(#${uid}-Hat-Color-Mask)" fillRule="evenodd" fill="${resolvedColor}">
        <rect id="${uid}-\u{1F58D}Color" x="0" y="0" width="264" height="280" />
      </g>`;
    }
    case "Skin": {
      const val = options.skinColor || "Tanned";
      const colorVal = skinColorPalette.get(val) || skinColorPalette.get("Tanned") || "#000000";
      const resolvedColor = colorVal.replace(/{uid}/g, uid);
      return `<g id="${uid}-SkinColor/${val}" mask="url(#${uid}-Skin-Color-Mask)" fill="${resolvedColor}">
        <g transform="translate(0.000000, 0.000000)" id="Color">
          <rect x="0" y="0" width="264" height="280" />
        </g>
      </g>`;
    }
    case "Graphics": {
      const gType = options.graphicType || "Bat";
      const subNode = (_c = SVG_DICTIONARY["CLOTHES"]) == null ? void 0 : _c[gType];
      return renderSvgNode(subNode, uid, options, childrenHtml);
    }
    case "FacialHairColor": {
      const val = options.facialHairColor || "BrownDark";
      const colorVal = facialHairColorPalette.get(val) || facialHairColorPalette.get("BrownDark") || "#000000";
      const resolvedColor = colorVal.replace(/{uid}/g, uid);
      return `<g id="${uid}-FacialHairColor/${val}" mask="url(#${uid}-Facial-Hair-Mask)" fill="${resolvedColor}">
        <g transform="translate(-32.000000, 0.000000)" id="${uid}-Facial-Hair-Color">
          <rect x="0" y="0" width="264" height="244" />
        </g>
      </g>`;
    }
    case "text": {
      const txt = resolvedProps.text || "";
      if (txt.trim().startsWith("{/*") && txt.trim().endsWith("*/}")) {
        return "";
      }
      return txt;
    }
    default: {
      const attrStr = Object.entries(resolvedProps).map(([k, v]) => {
        let attrName = k;
        if (k === "fillRule")
          attrName = "fill-rule";
        else if (k === "strokeWidth")
          attrName = "stroke-width";
        else if (k === "strokeDasharray")
          attrName = "stroke-dasharray";
        else if (k === "xlinkHref")
          attrName = "xlink:href";
        else if (k === "xmlSpace")
          attrName = "xml:space";
        else if (k === "fillOpacity")
          attrName = "fill-opacity";
        else if (k === "strokeLinecap")
          attrName = "stroke-linecap";
        else if (k === "strokeLinejoin")
          attrName = "stroke-linejoin";
        if (k === "style") {
          if (typeof v === "object" && v !== null) {
            const styleStr = Object.entries(v).map(([sK, sV]) => {
              const kebabK = sK.replace(/([A-Z])/g, "-$1").toLowerCase();
              return `${kebabK}: ${sV}`;
            }).join("; ");
            return `style="${styleStr}"`;
          } else {
            return `style="${v}"`;
          }
        }
        return `${attrName}="${String(v).replace(/"/g, "&quot;")}"`;
      }).join(" ");
      const innerChildrenHtml = (nodeChildren || []).map((child) => renderSvgNode(child, uid, options, childrenHtml)).join("");
      const spacer = attrStr ? " " : "";
      return `<${type}${spacer}${attrStr}>${innerChildrenHtml}</${type}>`;
    }
  }
}

// src/entry-temp.js
var OPTIONS_KEYS = [
  "backdropType",
  "backdropColor",
  "topType",
  "accessoriesType",
  "hatColor",
  "hairColor",
  "facialHairType",
  "facialHairColor",
  "clotheType",
  "clotheColor",
  "graphicType",
  "eyeType",
  "eyebrowType",
  "mouthType",
  "skinColor"
];
var styleContent = '@keyframes blinkeyes {\n  0% {\n    transform: scale(1, 1);\n  }\n\n  4.5% {\n    transform: scale(1, 1);\n  }\n\n  5% {\n    transform: scale(1, 0);\n  }\n\n  5.5% {\n    transform: scale(1, 1);\n  }\n\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n@keyframes eyeroll {\n  0.0% {\n    transform: rotate(0deg);\n  }\n\n  95.0% {\n    transform: rotate(0deg);\n  }\n\n  97.5% {\n    transform: rotate(180deg);\n  }\n\n  100.0% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sideeye {\n  0% {\n    transform: rotateY(0deg);\n  }\n\n  95% {\n    transform: rotateY(0deg);\n  }\n\n  96% {\n    transform: rotateY(180deg);\n  }\n\n  99% {\n    transform: rotateY(180deg);\n  }\n\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n\n@keyframes throbeye {\n  0% {\n    transform: scale(1.0);\n  }\n\n  88% {\n    transform: scale(1.0);\n  }\n\n  90% {\n    transform: scale(1.2);\n  }\n\n  92% {\n    transform: scale(0.8);\n  }\n\n  94% {\n    transform: scale(1.2);\n  }\n\n  96% {\n    transform: scale(0.9);\n  }\n\n  98% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(1.0);\n  }\n}\n\n@keyframes teardrop {\n  0% {\n    transform: translateY(0) scale(1.0);\n  }\n\n  80% {\n    transform: translateY(0) scale(1.0);\n  }\n\n  81% {\n    transform: translateY(5px) scale(0.95);\n  }\n\n  82% {\n    transform: translateY(10px) scale(0.90);\n  }\n\n  83% {\n    transform: translateY(15px) scale(0.85);\n  }\n\n  84% {\n    transform: translateY(20px) scale(0.80);\n  }\n\n  85% {\n    transform: translateY(25px) scale(0.75);\n  }\n\n  86% {\n    transform: translateY(30px) scale(0.70);\n  }\n\n  87% {\n    transform: translateY(35px) scale(0.65);\n  }\n\n  88% {\n    transform: translateY(40px) scale(0.60);\n  }\n\n  89% {\n    transform: translateY(45px) scale(0.55);\n  }\n\n  90% {\n    transform: translateY(50px) scale(0.0);\n  }\n\n  91% {\n    transform: translateY(0) scale(0.0);\n  }\n\n  100% {\n    transform: translateY(0) scale(1.0);\n  }\n}\n\n@keyframes nosewiggle {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  96% {\n    transform: translate(0, 0);\n  }\n\n  97% {\n    transform: translate(1px, -1px);\n  }\n\n  98% {\n    transform: translate(0, 1px);\n  }\n\n  99% {\n    transform: translate(-1px, -1px);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes mouthwiggle {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  96% {\n    transform: rotate(0deg);\n  }\n\n  97% {\n    transform: rotate(5deg);\n  }\n\n  98% {\n    transform: rotate(0deg);\n  }\n\n  99% {\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n[id$="-Avataaar"] * {\n  animation-delay: inherit;\n}\n\n/* Blinking Eyes */\n[id$="-Avataaar"] [id*="Eyes/Default"]>[id$="Eye-Left"] {\n  transform-origin: 30px 22px;\n  animation: 10s linear infinite blinkeyes;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/Default"]>[id$="Eye-Right"] {\n  transform-origin: 82px 22px;\n  animation: 10s linear infinite blinkeyes;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/Squint"]>[id$="Eye-Left"] {\n  transform-origin: 14px 9px;\n  animation: 10s linear infinite blinkeyes;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/Squint"]>[id$="Eye-Right"] {\n  transform-origin: 14px 9px;\n  animation: 10s linear infinite blinkeyes;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/Surprised"]>[id$="Eye-Left"] {\n  transform-origin: 30px 22px;\n  animation: 10s linear infinite blinkeyes;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/Surprised"]>[id$="Eye-Right"] {\n  transform-origin: 82px 22px;\n  animation: 10s linear infinite blinkeyes;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/X-Dizzy"]>[id$="Eye-Left"] {\n  transform-origin: 30px 22px;\n  animation: 10s linear infinite blinkeyes;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/X-Dizzy"]>[id$="Eye-Right"] {\n  transform-origin: 82px 22px;\n  animation: 10s linear infinite blinkeyes;\n  animation-delay: inherit;\n}\n\n/* Eye Roll */\n[id$="-Avataaar"] [id*="Eyes/Eye-Roll"]>[id$="Eye-Left"] {\n  transform-origin: 30px 22px;\n  animation: 10s linear infinite eyeroll;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/Eye-Roll"]>[id$="Eye-Right"] {\n  transform-origin: 82px 22px;\n  animation: 10s linear infinite eyeroll;\n  animation-delay: inherit;\n}\n\n/* Side Eye Swipe */\n[id$="-Avataaar"] [id*="Eyes/Side"]>[id$="Eye-Left"] {\n  transform-origin: 30px 22px;\n  animation: 13s linear infinite sideeye;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/Side"]>[id$="Eye-Right"] {\n  transform-origin: 82px 22px;\n  animation: 13s linear infinite sideeye;\n  animation-delay: inherit;\n}\n\n/* Heart Eye Throb */\n[id$="-Avataaar"] [id*="Eyes/Hearts"]>[id$="Eye-Left"] {\n  transform-origin: 30px 22px;\n  animation: 7s linear infinite throbeye;\n  animation-delay: inherit;\n}\n\n[id$="-Avataaar"] [id*="Eyes/Hearts"]>[id$="Eye-Right"] {\n  transform-origin: 82px 22px;\n  animation: 7s linear infinite throbeye;\n  animation-delay: inherit;\n}\n\n/* Tear Drop Animation */\n[id$="-Avataaar"] [id*="Eyes/Cry"]>[id$="Teardrop"] {\n  transform-origin: 30px 25px;\n  animation: 7s linear infinite teardrop;\n  animation-delay: inherit;\n}\n\n/* Nose Wiggle */\n[id$="-Avataaar"] [id*="Nose/Default"]>[id$="Nose"] {\n  animation: 20s linear infinite nosewiggle;\n  animation-delay: inherit;\n}\n\n/* Serious Mouth Wiggle */\n[id$="-Avataaar"] [id*="Mouth/Serious"]>[id$="Mouth"] {\n  transform-origin: 51px 22px;\n  animation: 13s linear infinite mouthwiggle;\n  animation-delay: inherit;\n}';
var AvataaarsAvatar = class extends HTMLElement {
  static get observedAttributes() {
    const attrs = OPTIONS_KEYS.map((key) => key.replace(/([A-Z])/g, "-$1").toLowerCase());
    return [...attrs, "hash", "animated", "uid", "animation-delay", "randomize"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._options = {};
    this._generatedUid = uniqueId("avatar-");
    this._generatedDelay = `${Math.random() * 5}s`;
    this._randomizedProps = {};
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal)
      return;
    this.render();
  }
  get animated() {
    const attr = this.getAttribute("animated");
    return attr !== "false" && attr !== null;
  }
  set animated(val) {
    if (val) {
      this.setAttribute("animated", "");
    } else {
      this.removeAttribute("animated");
    }
  }
  get hash() {
    return this.getAttribute("hash") || "";
  }
  set hash(val) {
    if (val) {
      this.setAttribute("hash", val);
    } else {
      this.removeAttribute("hash");
    }
  }
  get uid() {
    return this.getAttribute("uid") || this._generatedUid;
  }
  set uid(val) {
    if (val) {
      this.setAttribute("uid", val);
    } else {
      this.removeAttribute("uid");
    }
  }
  get animationDelay() {
    return this.getAttribute("animation-delay") || this._generatedDelay;
  }
  set animationDelay(val) {
    if (val) {
      this.setAttribute("animation-delay", val);
    } else {
      this.removeAttribute("animation-delay");
    }
  }
  get randomize() {
    const attr = this.getAttribute("randomize");
    const hasSubComponent = this.querySelector("avataaars-randomize") !== null;
    return attr !== "false" && attr !== null || hasSubComponent;
  }
  set randomize(val) {
    if (val) {
      this.setAttribute("randomize", "");
    } else {
      this.removeAttribute("randomize");
    }
  }
  getOptions() {
    const options = {};
    const currentHash = this.hash;
    if (currentHash) {
      const hashConfig = getAvatarConfigFromHash(currentHash);
      Object.assign(options, hashConfig);
    }
    const isRandomizeEnabled = this.randomize;
    if (!isRandomizeEnabled) {
      this._randomizedProps = {};
    }
    OPTIONS_KEYS.forEach((key) => {
      const attrName = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      if (this._options[key] !== void 0) {
        options[key] = this._options[key];
      } else if (this.hasAttribute(attrName)) {
        options[key] = this.getAttribute(attrName);
      } else if (options[key] === void 0) {
        if (isRandomizeEnabled) {
          if (this._randomizedProps[key] === void 0) {
            const list = getOptionList(key);
            if (list && list.length > 0) {
              this._randomizedProps[key] = list[Math.floor(Math.random() * list.length)];
            }
          }
          options[key] = this._randomizedProps[key];
        } else {
          options[key] = DEFAULT_AVATAR_PROPS[key];
        }
      }
    });
    return options;
  }
  render() {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (!this.isConnected)
        return;
      const renderToken = Symbol("render");
      this._latestRenderToken = renderToken;
      const options = this.getOptions();
      const uid = this.uid;
      const animated = this.animated;
      const animationDelay = this.animationDelay;
      const categoriesToLoad = ["NOSE"];
      if ((options.backdropType || "Diamond") !== "NoBackdrop")
        categoriesToLoad.push("BACKDROP");
      categoriesToLoad.push("CLOTHES");
      categoriesToLoad.push("MOUTH");
      categoriesToLoad.push("EYES");
      categoriesToLoad.push("EYEBROW");
      if ((options.accessoriesType || "Blank") !== "Blank")
        categoriesToLoad.push("ACCESSORIES");
      categoriesToLoad.push("TOP");
      if ((options.facialHairType || "Blank") !== "Blank")
        categoriesToLoad.push("FACIAL_HAIR");
      yield loadCategories(categoriesToLoad);
      if (this._latestRenderToken !== renderToken)
        return;
      const backdropType = options.backdropType || "Diamond";
      let backdropHtml = "";
      if (backdropType !== "NoBackdrop") {
        const backdropNode = (_a = SVG_DICTIONARY["BACKDROP"]) == null ? void 0 : _a[backdropType];
        backdropHtml = renderSvgNode(backdropNode, uid, options);
      }
      const skinNode = { type: "Skin", props: {}, children: [] };
      const skinHtml = renderSvgNode(skinNode, uid, options);
      const clotheType = options.clotheType || "BlazerShirt";
      const clotheNode = (_b = SVG_DICTIONARY["CLOTHES"]) == null ? void 0 : _b[clotheType];
      const clotheHtml = renderSvgNode(clotheNode, uid, options);
      const mouthType = options.mouthType || "Default";
      const mouthNode = (_c = SVG_DICTIONARY["MOUTH"]) == null ? void 0 : _c[mouthType];
      const mouthHtml = renderSvgNode(mouthNode, uid, options);
      const noseHtml = renderSvgNode((_d = SVG_DICTIONARY["NOSE"]) == null ? void 0 : _d["Default"], uid, options);
      const eyeType = options.eyeType || "Default";
      const eyeNode = (_e = SVG_DICTIONARY["EYES"]) == null ? void 0 : _e[eyeType];
      const eyeHtml = renderSvgNode(eyeNode, uid, options);
      const eyebrowType = options.eyebrowType || "Default";
      const eyebrowNode = (_f = SVG_DICTIONARY["EYEBROW"]) == null ? void 0 : _f[eyebrowType];
      const eyebrowHtml = renderSvgNode(eyebrowNode, uid, options);
      const faceHtml = `
      <g id="${uid}-Face" transform="translate(76.000000, 82.000000)" fill="#000000">
        ${mouthHtml}
        ${noseHtml}
        ${eyeHtml}
        ${eyebrowHtml}
      </g>
    `;
      const accessoriesType = options.accessoriesType || "Blank";
      let accessoriesHtml = "";
      if (accessoriesType !== "Blank") {
        const accNode = (_g = SVG_DICTIONARY["ACCESSORIES"]) == null ? void 0 : _g[accessoriesType];
        accessoriesHtml = renderSvgNode(accNode, uid, options);
      }
      const topType = options.topType || "ShortHairShortFlat";
      const topNode = (_h = SVG_DICTIONARY["TOP"]) == null ? void 0 : _h[topType];
      const topHtml = renderSvgNode(topNode, uid, options, accessoriesHtml);
      const gradMarkup = Array.from(registeredGradients.entries()).map(([gradName, config]) => {
        const tag = config.type === "radial" ? "radialGradient" : "linearGradient";
        const id = `${uid}-gradient-${gradName}`;
        const attrs = Object.entries(config.attrs || {}).map(([k, v]) => `${k}="${v}"`).join(" ");
        const stops = (config.stops || []).map((stop) => {
          const opacityAttr = stop.opacity !== void 0 ? ` stop-opacity="${stop.opacity}"` : "";
          return `<stop offset="${stop.offset}" stop-color="${stop.color}"${opacityAttr}></stop>`;
        }).join("");
        return `<${tag} id="${id}" ${attrs}>${stops}</${tag}>`;
      }).join("");
      const personHtml = `
      <g id="${uid}-Person" stroke-width="1" fill-rule="evenodd" mask="url(#${uid}-Backdrop-Mask)">
        <g id="${uid}-Body" transform="translate(32.000000, 36.000000)">
          <mask id="${uid}-Skin-Color-Mask" fill="white">
            <use href="#${uid}-path-skin" xlink:href="#${uid}-path-skin"></use>
          </mask>
          <use fill="#D0C6AC" href="#${uid}-path-skin" xlink:href="#${uid}-path-skin"></use>
          ${skinHtml}
          <path d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z" id="${uid}-Neck-Shadow" fill-opacity="0.100000001" fill="#000000" mask="url(#${uid}-Skin-Color-Mask)"></path>
        </g>
        ${clotheHtml}
        ${faceHtml}
        ${topHtml}
      </g>
    `;
      const groupName = animated ? `${uid}-Avataaar` : `${uid}-Avataaar-Static`;
      const animationStyle = animated ? `style="animation-delay: ${animationDelay}"` : "";
      const svgContent = `
      <style>${styleContent}</style>
      <svg data-uid="${uid}" width="100%" height="100%" viewBox="0 0 264 280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>Created with avataaars custom HTML element</desc>
        <defs>
          <path d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z" id="${uid}-path-skin"></path>
          ${gradMarkup}
        </defs>
        <g id="${groupName}" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" ${animationStyle}>
          <g transform="translate(-825.000000, -1100.000000)" id="${uid}-Avataaar/Backdrop">
            <g transform="translate(825.000000, 1100.000000)">
              ${backdropHtml}
              ${personHtml}
            </g>
          </g>
        </g>
      </svg>
    `;
      this.shadowRoot.innerHTML = svgContent;
    });
  }
};
OPTIONS_KEYS.forEach((key) => {
  const attrName = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  Object.defineProperty(AvataaarsAvatar.prototype, key, {
    get() {
      if (this._options[key] !== void 0)
        return this._options[key];
      return this.getAttribute(attrName) || DEFAULT_AVATAR_PROPS[key];
    },
    set(val) {
      if (val === null || val === void 0) {
        delete this._options[key];
        this.removeAttribute(attrName);
      } else {
        this._options[key] = val;
        this.setAttribute(attrName, val);
      }
      this.render();
    },
    enumerable: true,
    configurable: true
  });
});
var AvataaarsPiece = class extends HTMLElement {
  static get observedAttributes() {
    const attrs = OPTIONS_KEYS.map((key) => key.replace(/([A-Z])/g, "-$1").toLowerCase());
    return [...attrs, "piece-type", "piece-size", "view-box", "uid", "randomize"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._options = {};
    this._generatedUid = uniqueId("avatar-");
    this._randomizedProps = {};
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal)
      return;
    this.render();
  }
  get pieceType() {
    return this.getAttribute("piece-type") || "";
  }
  set pieceType(val) {
    if (val) {
      this.setAttribute("piece-type", val);
    } else {
      this.removeAttribute("piece-type");
    }
  }
  get pieceSize() {
    return this.getAttribute("piece-size") || "";
  }
  set pieceSize(val) {
    if (val) {
      this.setAttribute("piece-size", val);
    } else {
      this.removeAttribute("piece-size");
    }
  }
  get viewBox() {
    return this.getAttribute("view-box") || "0 0 264 280";
  }
  set viewBox(val) {
    if (val) {
      this.setAttribute("view-box", val);
    } else {
      this.removeAttribute("view-box");
    }
  }
  get uid() {
    return this.getAttribute("uid") || this._generatedUid;
  }
  set uid(val) {
    if (val) {
      this.setAttribute("uid", val);
    } else {
      this.removeAttribute("uid");
    }
  }
  get randomize() {
    const attr = this.getAttribute("randomize");
    const hasSubComponent = this.querySelector("avataaars-randomize") !== null;
    return attr !== "false" && attr !== null || hasSubComponent;
  }
  set randomize(val) {
    if (val) {
      this.setAttribute("randomize", "");
    } else {
      this.removeAttribute("randomize");
    }
  }
  getOptions() {
    const options = {};
    const isRandomizeEnabled = this.randomize;
    if (!isRandomizeEnabled) {
      this._randomizedProps = {};
    }
    OPTIONS_KEYS.forEach((key) => {
      const attrName = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      if (this._options[key] !== void 0) {
        options[key] = this._options[key];
      } else if (this.hasAttribute(attrName)) {
        options[key] = this.getAttribute(attrName);
      } else {
        if (isRandomizeEnabled) {
          if (this._randomizedProps[key] === void 0) {
            const list = getOptionList(key);
            if (list && list.length > 0) {
              this._randomizedProps[key] = list[Math.floor(Math.random() * list.length)];
            }
          }
          options[key] = this._randomizedProps[key];
        } else {
          options[key] = DEFAULT_AVATAR_PROPS[key];
        }
      }
    });
    return options;
  }
  render() {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if (!this.isConnected)
        return;
      const renderToken = Symbol("render");
      this._latestRenderToken = renderToken;
      const options = this.getOptions();
      const pieceType = this.pieceType;
      const pieceSize = this.pieceSize;
      const viewBox = this.viewBox;
      const uid = this.uid;
      const categoriesToLoad = [];
      if (pieceType === "top") {
        categoriesToLoad.push("TOP");
        if ((options.accessoriesType || "Blank") !== "Blank") {
          categoriesToLoad.push("ACCESSORIES");
        }
      } else if (pieceType === "clothe") {
        categoriesToLoad.push("CLOTHES");
      } else if (pieceType === "graphics") {
        categoriesToLoad.push("CLOTHES");
      } else if (pieceType === "accessories" || pieceType === "accesories") {
        categoriesToLoad.push("ACCESSORIES");
      } else if (pieceType === "facialHair") {
        categoriesToLoad.push("FACIAL_HAIR");
      } else if (pieceType === "eyes") {
        categoriesToLoad.push("EYES");
      } else if (pieceType === "eyebrows") {
        categoriesToLoad.push("EYEBROW");
      } else if (pieceType === "mouth") {
        categoriesToLoad.push("MOUTH");
      } else if (pieceType === "nose") {
        categoriesToLoad.push("NOSE");
      }
      if (categoriesToLoad.length > 0) {
        yield loadCategories(categoriesToLoad);
      }
      if (this._latestRenderToken !== renderToken)
        return;
      let pieceHtml = "";
      if (pieceType === "top") {
        const accessoriesType = options.accessoriesType || "Blank";
        let accessoriesHtml = "";
        if (accessoriesType !== "Blank") {
          const accNode = (_a = SVG_DICTIONARY["ACCESSORIES"]) == null ? void 0 : _a[accessoriesType];
          accessoriesHtml = renderSvgNode(accNode, uid, options);
        }
        const topType = options.topType || "ShortHairShortFlat";
        const topNode = (_b = SVG_DICTIONARY["TOP"]) == null ? void 0 : _b[topType];
        pieceHtml = renderSvgNode(topNode, uid, options, accessoriesHtml);
      } else if (pieceType === "clothe") {
        const clotheType = options.clotheType || "BlazerShirt";
        const clotheNode = (_c = SVG_DICTIONARY["CLOTHES"]) == null ? void 0 : _c[clotheType];
        pieceHtml = renderSvgNode(clotheNode, uid, options);
      } else if (pieceType === "graphics") {
        const gType = options.graphicType || "Bat";
        const subNode = (_d = SVG_DICTIONARY["CLOTHES"]) == null ? void 0 : _d[gType];
        pieceHtml = renderSvgNode(subNode, uid, options);
      } else if (pieceType === "accessories" || pieceType === "accesories") {
        const accessoriesType = options.accessoriesType || "Blank";
        if (accessoriesType !== "Blank") {
          const accNode = (_e = SVG_DICTIONARY["ACCESSORIES"]) == null ? void 0 : _e[accessoriesType];
          pieceHtml = renderSvgNode(accNode, uid, options);
        }
      } else if (pieceType === "facialHair") {
        const fType = options.facialHairType || "Blank";
        if (fType !== "Blank") {
          const subNode = (_f = SVG_DICTIONARY["FACIAL_HAIR"]) == null ? void 0 : _f[fType];
          pieceHtml = renderSvgNode(subNode, uid, options);
        }
      } else if (pieceType === "eyes") {
        const eyeType = options.eyeType || "Default";
        const eyeNode = (_g = SVG_DICTIONARY["EYES"]) == null ? void 0 : _g[eyeType];
        pieceHtml = renderSvgNode(eyeNode, uid, options);
      } else if (pieceType === "eyebrows") {
        const eyebrowType = options.eyebrowType || "Default";
        const eyebrowNode = (_h = SVG_DICTIONARY["EYEBROW"]) == null ? void 0 : _h[eyebrowType];
        pieceHtml = renderSvgNode(eyebrowNode, uid, options);
      } else if (pieceType === "mouth") {
        const mouthType = options.mouthType || "Default";
        const mouthNode = (_i = SVG_DICTIONARY["MOUTH"]) == null ? void 0 : _i[mouthType];
        pieceHtml = renderSvgNode(mouthNode, uid, options);
      } else if (pieceType === "nose") {
        pieceHtml = renderSvgNode((_j = SVG_DICTIONARY["NOSE"]) == null ? void 0 : _j["Default"], uid, options);
      } else if (pieceType === "skin") {
        const skinNode = { type: "Skin", props: {}, children: [] };
        pieceHtml = renderSvgNode(skinNode, uid, options);
      }
      const gradMarkup = Array.from(registeredGradients.entries()).map(([gradName, config]) => {
        const tag = config.type === "radial" ? "radialGradient" : "linearGradient";
        const id = `${uid}-gradient-${gradName}`;
        const attrs = Object.entries(config.attrs || {}).map(([k, v]) => `${k}="${v}"`).join(" ");
        const stops = (config.stops || []).map((stop) => {
          const opacityAttr = stop.opacity !== void 0 ? ` stop-opacity="${stop.opacity}"` : "";
          return `<stop offset="${stop.offset}" stop-color="${stop.color}"${opacityAttr}></stop>`;
        }).join("");
        return `<${tag} id="${id}" ${attrs}>${stops}</${tag}>`;
      }).join("");
      const widthAttr = pieceSize ? `width="${pieceSize}"` : 'width="100%"';
      const heightAttr = pieceSize ? `height="${pieceSize}"` : 'height="100%"';
      const svgContent = `
      <style>${styleContent}</style>
      <svg ${widthAttr} ${heightAttr} viewBox="${viewBox}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <path d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z" id="${uid}-path-skin"></path>
          <mask id="${uid}-Skin-Color-Mask" fill="white">
            <use href="#${uid}-path-skin" xlink:href="#${uid}-path-skin"></use>
          </mask>
          ${gradMarkup}
        </defs>
        ${pieceHtml}
      </svg>
    `;
      this.shadowRoot.innerHTML = svgContent;
    });
  }
};
OPTIONS_KEYS.forEach((key) => {
  const attrName = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  Object.defineProperty(AvataaarsPiece.prototype, key, {
    get() {
      if (this._options[key] !== void 0)
        return this._options[key];
      return this.getAttribute(attrName) || DEFAULT_AVATAR_PROPS[key];
    },
    set(val) {
      if (val === null || val === void 0) {
        delete this._options[key];
        this.removeAttribute(attrName);
      } else {
        this._options[key] = val;
        this.setAttribute(attrName, val);
      }
      this.render();
    },
    enumerable: true,
    configurable: true
  });
});
var AvataaarsRandomize = class extends HTMLElement {
  connectedCallback() {
    if (this.parentElement && typeof this.parentElement.render === "function") {
      this.parentElement.render();
    }
  }
  disconnectedCallback() {
    if (this.parentElement && typeof this.parentElement.render === "function") {
      this.parentElement.render();
    }
  }
};
if (typeof window !== "undefined" && window.customElements) {
  if (!window.customElements.get("avataaars-avatar")) {
    window.customElements.define("avataaars-avatar", AvataaarsAvatar);
  }
  if (!window.customElements.get("avataaars-piece")) {
    window.customElements.define("avataaars-piece", AvataaarsPiece);
  }
  if (!window.customElements.get("avataaars-randomize")) {
    window.customElements.define("avataaars-randomize", AvataaarsRandomize);
  }
}
export {
  ACCESSORIES_TYPES,
  AvataaarsAvatar,
  AvataaarsPiece,
  AvataaarsRandomize,
  BACKDROP_COLORS,
  BACKDROP_TYPES,
  CLOTHE_COLORS,
  CLOTHE_TYPES,
  DEFAULT_AVATAR_PROPS,
  EYEBROW_TYPES,
  EYE_TYPES,
  FACIAL_HAIR_COLORS,
  FACIAL_HAIR_TYPES,
  GRAPHIC_TYPES,
  HAIR_COLORS,
  HASH_ORDER,
  HAT_COLORS,
  MOUTH_TYPES,
  PALETTES,
  SKIN_COLORS,
  TOP_TYPES,
  addPaletteColor,
  backdropColorPalette,
  clotheColorPalette,
  facialHairColorPalette,
  generateRandomAvataarProps,
  getAvatarConfigFromHash,
  getAvatarHash,
  getColorFamily,
  getOptionList,
  hairColorPalette,
  hatColorPalette,
  registerGradient,
  registeredGradients,
  removePaletteColor,
  skinColorPalette
};
