import uniqueId from './uniqueId.js'
import { renderSvgNode } from './avatar/SvgDictionaryRenderer.js'
import { SVG_DICTIONARY, loadCategories } from './avatar/svgDictionary.js'
import {
  PALETTES,
  backdropColorPalette,
  skinColorPalette,
  hairColorPalette,
  facialHairColorPalette,
  clotheColorPalette,
  hatColorPalette,
  addPaletteColor,
  removePaletteColor,
  registeredGradients,
  registerGradient,
  BACKDROP_TYPES,
  BACKDROP_COLORS,
  TOP_TYPES,
  HAIR_COLORS,
  HAT_COLORS,
  FACIAL_HAIR_TYPES,
  FACIAL_HAIR_COLORS,
  CLOTHE_TYPES,
  CLOTHE_COLORS,
  ACCESSORIES_TYPES,
  GRAPHIC_TYPES,
  EYE_TYPES,
  EYEBROW_TYPES,
  MOUTH_TYPES,
  SKIN_COLORS,
  getColorFamily,
  generateRandomAvataarProps,
  HASH_ORDER,
  DEFAULT_AVATAR_PROPS,
  getOptionList,
  getAvatarHash,
  getAvatarConfigFromHash
} from './options/index.js'

// Export all the helper methods and palettes for backwards compatibility
export {
  PALETTES,
  backdropColorPalette,
  skinColorPalette,
  hairColorPalette,
  facialHairColorPalette,
  clotheColorPalette,
  hatColorPalette,
  addPaletteColor,
  removePaletteColor,
  registeredGradients,
  registerGradient,
  BACKDROP_TYPES,
  BACKDROP_COLORS,
  TOP_TYPES,
  HAIR_COLORS,
  HAT_COLORS,
  FACIAL_HAIR_TYPES,
  FACIAL_HAIR_COLORS,
  CLOTHE_TYPES,
  CLOTHE_COLORS,
  ACCESSORIES_TYPES,
  GRAPHIC_TYPES,
  EYE_TYPES,
  EYEBROW_TYPES,
  MOUTH_TYPES,
  SKIN_COLORS,
  getColorFamily,
  generateRandomAvataarProps,
  HASH_ORDER,
  DEFAULT_AVATAR_PROPS,
  getOptionList,
  getAvatarHash,
  getAvatarConfigFromHash
}

const OPTIONS_KEYS = [
  'backdropType', 'backdropColor', 'topType', 'accessoriesType',
  'hatColor', 'hairColor', 'facialHairType', 'facialHairColor',
  'clotheType', 'clotheColor', 'graphicType', 'eyeType',
  'eyebrowType', 'mouthType', 'skinColor'
]

// Absolute URL of stylesheet relative to this module
const cssUrl = new URL('./animations.css', import.meta.url).href

export class AvataaarsAvatar extends HTMLElement {
  static get observedAttributes() {
    const attrs = OPTIONS_KEYS.map(key => key.replace(/([A-Z])/g, '-$1').toLowerCase())
    return [...attrs, 'hash', 'animated', 'uid', 'animation-delay', 'randomize']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this._options = {}
    this._generatedUid = uniqueId('avatar-')
    this._generatedDelay = `${Math.random() * 5}s`
    this._randomizedProps = {}
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal) return
    this.render()
  }

  get animated() {
    const attr = this.getAttribute('animated')
    return attr !== 'false' && attr !== null
  }

  set animated(val) {
    if (val) {
      this.setAttribute('animated', '')
    } else {
      this.removeAttribute('animated')
    }
  }

  get hash() {
    return this.getAttribute('hash') || ''
  }

  set hash(val) {
    if (val) {
      this.setAttribute('hash', val)
    } else {
      this.removeAttribute('hash')
    }
  }

  get uid() {
    return this.getAttribute('uid') || this._generatedUid
  }

  set uid(val) {
    if (val) {
      this.setAttribute('uid', val)
    } else {
      this.removeAttribute('uid')
    }
  }

  get animationDelay() {
    return this.getAttribute('animation-delay') || this._generatedDelay
  }

  set animationDelay(val) {
    if (val) {
      this.setAttribute('animation-delay', val)
    } else {
      this.removeAttribute('animation-delay')
    }
  }

  get randomize() {
    const attr = this.getAttribute('randomize')
    const hasSubComponent = this.querySelector('avataaars-randomize') !== null
    return (attr !== 'false' && attr !== null) || hasSubComponent
  }

  set randomize(val) {
    if (val) {
      this.setAttribute('randomize', '')
    } else {
      this.removeAttribute('randomize')
    }
  }

  getOptions() {
    const options = {}
    const currentHash = this.hash

    if (currentHash) {
      const hashConfig = getAvatarConfigFromHash(currentHash)
      Object.assign(options, hashConfig)
    }

    const isRandomizeEnabled = this.randomize
    if (!isRandomizeEnabled) {
      this._randomizedProps = {}
    }

    OPTIONS_KEYS.forEach(key => {
      const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      // Property takes highest precedence, then attribute, then hash config, then default
      if (this._options[key] !== undefined) {
        options[key] = this._options[key]
      } else if (this.hasAttribute(attrName)) {
        options[key] = this.getAttribute(attrName)
      } else if (options[key] === undefined) {
        if (isRandomizeEnabled) {
          if (this._randomizedProps[key] === undefined) {
            const list = getOptionList(key)
            if (list && list.length > 0) {
              this._randomizedProps[key] = list[Math.floor(Math.random() * list.length)]
            }
          }
          options[key] = this._randomizedProps[key]
        } else {
          options[key] = DEFAULT_AVATAR_PROPS[key]
        }
      }
    })

    return options
  }

  async render() {
    if (!this.isConnected) return

    const renderToken = Symbol('render')
    this._latestRenderToken = renderToken

    const options = this.getOptions()
    const uid = this.uid
    const animated = this.animated
    const animationDelay = this.animationDelay

    const categoriesToLoad = ['NOSE']
    if ((options.backdropType || 'Diamond') !== 'NoBackdrop') categoriesToLoad.push('BACKDROP')
    categoriesToLoad.push('CLOTHES')
    categoriesToLoad.push('MOUTH')
    categoriesToLoad.push('EYES')
    categoriesToLoad.push('EYEBROW')
    if ((options.accessoriesType || 'Blank') !== 'Blank') categoriesToLoad.push('ACCESSORIES')
    categoriesToLoad.push('TOP')
    if ((options.facialHairType || 'Blank') !== 'Blank') categoriesToLoad.push('FACIAL_HAIR')

    await loadCategories(categoriesToLoad)

    if (this._latestRenderToken !== renderToken) return

    // Backdrop
    const backdropType = options.backdropType || 'Diamond'
    let backdropHtml = ''
    if (backdropType !== 'NoBackdrop') {
      const backdropNode = SVG_DICTIONARY['BACKDROP']?.[backdropType]
      backdropHtml = renderSvgNode(backdropNode, uid, options)
    }

    // Skin
    const skinNode = { type: 'Skin', props: {}, children: [] }
    const skinHtml = renderSvgNode(skinNode, uid, options)

    // Clothes
    const clotheType = options.clotheType || 'BlazerShirt'
    const clotheNode = SVG_DICTIONARY['CLOTHES']?.[clotheType]
    const clotheHtml = renderSvgNode(clotheNode, uid, options)

    // Face
    const mouthType = options.mouthType || 'Default'
    const mouthNode = SVG_DICTIONARY['MOUTH']?.[mouthType]
    const mouthHtml = renderSvgNode(mouthNode, uid, options)

    const noseHtml = renderSvgNode(SVG_DICTIONARY['NOSE']?.['Default'], uid, options)

    const eyeType = options.eyeType || 'Default'
    const eyeNode = SVG_DICTIONARY['EYES']?.[eyeType]
    const eyeHtml = renderSvgNode(eyeNode, uid, options)

    const eyebrowType = options.eyebrowType || 'Default'
    const eyebrowNode = SVG_DICTIONARY['EYEBROW']?.[eyebrowType]
    const eyebrowHtml = renderSvgNode(eyebrowNode, uid, options)

    const faceHtml = `
      <g id="${uid}-Face" transform="translate(76.000000, 82.000000)" fill="#000000">
        ${mouthHtml}
        ${noseHtml}
        ${eyeHtml}
        ${eyebrowHtml}
      </g>
    `

    // Accessories inside Top
    const accessoriesType = options.accessoriesType || 'Blank'
    let accessoriesHtml = ''
    if (accessoriesType !== 'Blank') {
      const accNode = SVG_DICTIONARY['ACCESSORIES']?.[accessoriesType]
      accessoriesHtml = renderSvgNode(accNode, uid, options)
    }

    // Top
    const topType = options.topType || 'ShortHairShortFlat'
    const topNode = SVG_DICTIONARY['TOP']?.[topType]
    const topHtml = renderSvgNode(topNode, uid, options, accessoriesHtml)

    // Gradients in Defs
    const gradMarkup = Array.from(registeredGradients.entries()).map(([gradName, config]) => {
      const tag = config.type === 'radial' ? 'radialGradient' : 'linearGradient'
      const id = `${uid}-gradient-${gradName}`
      const attrs = Object.entries(config.attrs || {}).map(([k, v]) => `${k}="${v}"`).join(' ')
      const stops = (config.stops || []).map(stop => {
        const opacityAttr = stop.opacity !== undefined ? ` stop-opacity="${stop.opacity}"` : ''
        return `<stop offset="${stop.offset}" stop-color="${stop.color}"${opacityAttr}></stop>`
      }).join('')
      return `<${tag} id="${id}" ${attrs}>${stops}</${tag}>`
    }).join('')

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
    `

    const groupName = animated ? `${uid}-Avataaar` : `${uid}-Avataaar-Static`
    const animationStyle = animated ? `style="animation-delay: ${animationDelay}"` : ''

    const svgContent = `
      <link rel="stylesheet" href="${cssUrl}">
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
    `

    this.shadowRoot.innerHTML = svgContent
  }
}

// Dynamically define properties on AvataaarsAvatar prototype for observed option keys
OPTIONS_KEYS.forEach(key => {
  const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase()

  Object.defineProperty(AvataaarsAvatar.prototype, key, {
    get() {
      if (this._options[key] !== undefined) return this._options[key]
      return this.getAttribute(attrName) || DEFAULT_AVATAR_PROPS[key]
    },
    set(val) {
      if (val === null || val === undefined) {
        delete this._options[key]
        this.removeAttribute(attrName)
      } else {
        this._options[key] = val
        this.setAttribute(attrName, val)
      }
      this.render()
    },
    enumerable: true,
    configurable: true
  })
})

export class AvataaarsPiece extends HTMLElement {
  static get observedAttributes() {
    const attrs = OPTIONS_KEYS.map(key => key.replace(/([A-Z])/g, '-$1').toLowerCase())
    return [...attrs, 'piece-type', 'piece-size', 'view-box', 'uid', 'randomize']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this._options = {}
    this._generatedUid = uniqueId('avatar-')
    this._randomizedProps = {}
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal) return
    this.render()
  }

  get pieceType() {
    return this.getAttribute('piece-type') || ''
  }

  set pieceType(val) {
    if (val) {
      this.setAttribute('piece-type', val)
    } else {
      this.removeAttribute('piece-type')
    }
  }

  get pieceSize() {
    return this.getAttribute('piece-size') || ''
  }

  set pieceSize(val) {
    if (val) {
      this.setAttribute('piece-size', val)
    } else {
      this.removeAttribute('piece-size')
    }
  }

  get viewBox() {
    return this.getAttribute('view-box') || '0 0 264 280'
  }

  set viewBox(val) {
    if (val) {
      this.setAttribute('view-box', val)
    } else {
      this.removeAttribute('view-box')
    }
  }

  get uid() {
    return this.getAttribute('uid') || this._generatedUid
  }

  set uid(val) {
    if (val) {
      this.setAttribute('uid', val)
    } else {
      this.removeAttribute('uid')
    }
  }

  get randomize() {
    const attr = this.getAttribute('randomize')
    const hasSubComponent = this.querySelector('avataaars-randomize') !== null
    return (attr !== 'false' && attr !== null) || hasSubComponent
  }

  set randomize(val) {
    if (val) {
      this.setAttribute('randomize', '')
    } else {
      this.removeAttribute('randomize')
    }
  }

  getOptions() {
    const options = {}
    const isRandomizeEnabled = this.randomize
    if (!isRandomizeEnabled) {
      this._randomizedProps = {}
    }

    OPTIONS_KEYS.forEach(key => {
      const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      if (this._options[key] !== undefined) {
        options[key] = this._options[key]
      } else if (this.hasAttribute(attrName)) {
        options[key] = this.getAttribute(attrName)
      } else {
        if (isRandomizeEnabled) {
          if (this._randomizedProps[key] === undefined) {
            const list = getOptionList(key)
            if (list && list.length > 0) {
              this._randomizedProps[key] = list[Math.floor(Math.random() * list.length)]
            }
          }
          options[key] = this._randomizedProps[key]
        } else {
          options[key] = DEFAULT_AVATAR_PROPS[key]
        }
      }
    })
    return options
  }

  async render() {
    if (!this.isConnected) return

    const renderToken = Symbol('render')
    this._latestRenderToken = renderToken

    const options = this.getOptions()
    const pieceType = this.pieceType
    const pieceSize = this.pieceSize
    const viewBox = this.viewBox
    const uid = this.uid

    const categoriesToLoad = []
    if (pieceType === 'top') {
      categoriesToLoad.push('TOP')
      if ((options.accessoriesType || 'Blank') !== 'Blank') {
        categoriesToLoad.push('ACCESSORIES')
      }
    } else if (pieceType === 'clothe') {
      categoriesToLoad.push('CLOTHES')
    } else if (pieceType === 'graphics') {
      categoriesToLoad.push('CLOTHES')
    } else if (pieceType === 'accessories' || pieceType === 'accesories') {
      categoriesToLoad.push('ACCESSORIES')
    } else if (pieceType === 'facialHair') {
      categoriesToLoad.push('FACIAL_HAIR')
    } else if (pieceType === 'eyes') {
      categoriesToLoad.push('EYES')
    } else if (pieceType === 'eyebrows') {
      categoriesToLoad.push('EYEBROW')
    } else if (pieceType === 'mouth') {
      categoriesToLoad.push('MOUTH')
    } else if (pieceType === 'nose') {
      categoriesToLoad.push('NOSE')
    }

    if (categoriesToLoad.length > 0) {
      await loadCategories(categoriesToLoad)
    }

    if (this._latestRenderToken !== renderToken) return

    let pieceHtml = ''
    if (pieceType === 'top') {
      const accessoriesType = options.accessoriesType || 'Blank'
      let accessoriesHtml = ''
      if (accessoriesType !== 'Blank') {
        const accNode = SVG_DICTIONARY['ACCESSORIES']?.[accessoriesType]
        accessoriesHtml = renderSvgNode(accNode, uid, options)
      }
      const topType = options.topType || 'ShortHairShortFlat'
      const topNode = SVG_DICTIONARY['TOP']?.[topType]
      pieceHtml = renderSvgNode(topNode, uid, options, accessoriesHtml)
    } else if (pieceType === 'clothe') {
      const clotheType = options.clotheType || 'BlazerShirt'
      const clotheNode = SVG_DICTIONARY['CLOTHES']?.[clotheType]
      pieceHtml = renderSvgNode(clotheNode, uid, options)
    } else if (pieceType === 'graphics') {
      const gType = options.graphicType || 'Bat'
      const subNode = SVG_DICTIONARY['CLOTHES']?.[gType]
      pieceHtml = renderSvgNode(subNode, uid, options)
    } else if (pieceType === 'accessories' || pieceType === 'accesories') {
      const accessoriesType = options.accessoriesType || 'Blank'
      if (accessoriesType !== 'Blank') {
        const accNode = SVG_DICTIONARY['ACCESSORIES']?.[accessoriesType]
        pieceHtml = renderSvgNode(accNode, uid, options)
      }
    } else if (pieceType === 'facialHair') {
      const fType = options.facialHairType || 'Blank'
      if (fType !== 'Blank') {
        const subNode = SVG_DICTIONARY['FACIAL_HAIR']?.[fType]
        pieceHtml = renderSvgNode(subNode, uid, options)
      }
    } else if (pieceType === 'eyes') {
      const eyeType = options.eyeType || 'Default'
      const eyeNode = SVG_DICTIONARY['EYES']?.[eyeType]
      pieceHtml = renderSvgNode(eyeNode, uid, options)
    } else if (pieceType === 'eyebrows') {
      const eyebrowType = options.eyebrowType || 'Default'
      const eyebrowNode = SVG_DICTIONARY['EYEBROW']?.[eyebrowType]
      pieceHtml = renderSvgNode(eyebrowNode, uid, options)
    } else if (pieceType === 'mouth') {
      const mouthType = options.mouthType || 'Default'
      const mouthNode = SVG_DICTIONARY['MOUTH']?.[mouthType]
      pieceHtml = renderSvgNode(mouthNode, uid, options)
    } else if (pieceType === 'nose') {
      pieceHtml = renderSvgNode(SVG_DICTIONARY['NOSE']?.['Default'], uid, options)
    } else if (pieceType === 'skin') {
      const skinNode = { type: 'Skin', props: {}, children: [] }
      pieceHtml = renderSvgNode(skinNode, uid, options)
    }

    const widthAttr = pieceSize ? `width="${pieceSize}"` : 'width="100%"'
    const heightAttr = pieceSize ? `height="${pieceSize}"` : 'height="100%"'

    const svgContent = `
      <link rel="stylesheet" href="${cssUrl}">
      <svg ${widthAttr} ${heightAttr} viewBox="${viewBox}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        ${pieceHtml}
      </svg>
    `

    this.shadowRoot.innerHTML = svgContent
  }
}

// Dynamically define properties on AvataaarsPiece prototype for observed option keys
OPTIONS_KEYS.forEach(key => {
  const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase()

  Object.defineProperty(AvataaarsPiece.prototype, key, {
    get() {
      if (this._options[key] !== undefined) return this._options[key]
      return this.getAttribute(attrName) || DEFAULT_AVATAR_PROPS[key]
    },
    set(val) {
      if (val === null || val === undefined) {
        delete this._options[key]
        this.removeAttribute(attrName)
      } else {
        this._options[key] = val
        this.setAttribute(attrName, val)
      }
      this.render()
    },
    enumerable: true,
    configurable: true
  })
})

export class AvataaarsRandomize extends HTMLElement {
  connectedCallback() {
    if (this.parentElement && typeof this.parentElement.render === 'function') {
      this.parentElement.render()
    }
  }
  disconnectedCallback() {
    if (this.parentElement && typeof this.parentElement.render === 'function') {
      this.parentElement.render()
    }
  }
}

// Auto-register elements if we are in a browser context
if (typeof window !== 'undefined' && window.customElements) {
  if (!window.customElements.get('avataaars-avatar')) {
    window.customElements.define('avataaars-avatar', AvataaarsAvatar)
  }
  if (!window.customElements.get('avataaars-piece')) {
    window.customElements.define('avataaars-piece', AvataaarsPiece)
  }
  if (!window.customElements.get('avataaars-randomize')) {
    window.customElements.define('avataaars-randomize', AvataaarsRandomize)
  }
}
