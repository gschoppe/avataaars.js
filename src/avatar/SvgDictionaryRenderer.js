import { SVG_DICTIONARY } from './svgDictionary.js'
import {
  backdropColorPalette,
  skinColorPalette,
  hairColorPalette,
  facialHairColorPalette,
  clotheColorPalette,
  hatColorPalette,
  registeredGradients
} from '../options/index.js'

export function renderSvgNode(node, uid, options = {}, childrenHtml = '') {
  if (!node) return ''

  const type = node.t !== undefined ? node.t : node.type
  const nodeProps = node.p !== undefined ? node.p : node.props
  const nodeChildren = node.c !== undefined ? node.c : node.children

  // Resolve props (parameterization)
  const resolveProps = (rawProps) => {
    if (!rawProps) return {}
    const resolved = {}

    Object.entries(rawProps).forEach(([key, val]) => {
      if (typeof val === 'string') {
        let processedVal = val.replace(/\${uid}/g, '{uid}').replace(/\${uid}/g, '{uid}')
        processedVal = processedVal.replace(/{uid}/g, uid).replace(/{uid}/g, uid)

        if (processedVal.startsWith('`') && processedVal.endsWith('`')) {
          processedVal = processedVal.substring(1, processedVal.length - 1)
          processedVal = processedVal.replace(/\${([^}]+)}/g, '$1')
        }

        const concatMatch = processedVal.match(/^'#' \+ (path|filter|mask|accessories)([0-9]+)$/)
        if (concatMatch) {
          processedVal = `#${uid}-top-${concatMatch[1]}${concatMatch[2]}`
        }

        const urlMatch = processedVal.match(/url\(#(path|filter|mask|accessories)([0-9]+)\)/g)
        if (urlMatch) {
          processedVal = processedVal.replace(/url\(#(path|filter|mask|accessories)([0-9]+)\)/g, `url(#${uid}-top-$1$2)`)
        }

        // Map legacy static mask/filter names to fully qualified dynamic ones
        processedVal = processedVal.replace(/url\(#clothingColorMask\)/gi, `url(#${uid}-Clothing-Color-Mask)`)
        processedVal = processedVal.replace(/url\(#hatColorMask\)/g, `url(#${uid}-Hat-Color-Mask)`)
        processedVal = processedVal.replace(/url\(#facialHairMask\)/g, `url(#${uid}-Facial-Hair-Mask)`)
        processedVal = processedVal.replace(/url\(#hairColorMask\)/g, `url(#${uid}-Hair-Color-Mask)`)

        processedVal = processedVal.replace(/#clothingColorMask/gi, `#${uid}-Clothing-Color-Mask`)
        processedVal = processedVal.replace(/#hatColorMask/g, `#${uid}-Hat-Color-Mask`)
        processedVal = processedVal.replace(/#facialHairMask/g, `#${uid}-Facial-Hair-Mask`)
        processedVal = processedVal.replace(/#hairColorMask/g, `#${uid}-Hair-Color-Mask`)

        for (const gradName of registeredGradients.keys()) {
          processedVal = processedVal.replace(new RegExp(`url\\(#${gradName}\\)`, 'g'), `url(#${uid}-gradient-${gradName})`)
          processedVal = processedVal.replace(new RegExp(`#${gradName}`, 'g'), `#${uid}-gradient-${gradName}`)
        }

        resolved[key] = processedVal
      } else {
        resolved[key] = val
      }
    })

    if (resolved.id && typeof resolved.id === 'string') {
      const idMatch = resolved.id.match(/^(path|filter|mask|accessories)([0-9]+)$/)
      if (idMatch) {
        resolved.id = `${uid}-top-${idMatch[1]}${idMatch[2]}`
      }
    }

    if (resolved.id === 'clothingColorMask' || resolved.id === 'ClothingColorMask') {
      resolved.id = `${uid}-Clothing-Color-Mask`
    } else if (resolved.id === 'hatColorMask') {
      resolved.id = `${uid}-Hat-Color-Mask`
    } else if (resolved.id === 'facialHairMask') {
      resolved.id = `${uid}-Facial-Hair-Mask`
    } else if (resolved.id === 'hairColorMask') {
      resolved.id = `${uid}-Hair-Color-Mask`
    }

    let idSuffix = ''
    Object.keys(resolved).forEach((key) => {
      if (key.startsWith('-') && !key.startsWith('--')) {
        idSuffix = key.substring(1)
        delete resolved[key]
      }
    })

    if (idSuffix && (resolved.id === '{uid}' || resolved.id === 'uid' || resolved.id === uid)) {
      resolved.id = `${uid}-${idSuffix}`
    }

    return resolved
  }

  const resolvedProps = resolveProps(nodeProps)

  switch (type) {
    case '':
    case 'React.Fragment':
      return (nodeChildren || []).map(child => renderSvgNode(child, uid, options, childrenHtml)).join('')

    case 'Children':
      return childrenHtml

    case 'FacialHair': {
      const fType = options.facialHairType || 'Blank'
      if (fType === 'Blank') return ''
      const subNode = SVG_DICTIONARY['FACIAL_HAIR']?.[fType]
      return renderSvgNode(subNode, uid, options, childrenHtml)
    }

    case 'HairColor': {
      const val = options.hairColor || 'Black'
      const colorVal = hairColorPalette.get(val) || hairColorPalette.get('Black') || '#000000'
      const resolvedColor = colorVal.replace(/{uid}/g, uid)
      return `<g id="${uid}-HairColor/${val}" mask="url(#${uid}-Hair-Color-Mask)" fill="${resolvedColor}">
        <g transform="translate(0.000000, 0.000000)" id="Color">
          <rect x="0" y="0" width="264" height="280" />
        </g>
      </g>`
    }

    case 'Accessories': {
      const aType = options.accessoriesType || 'Blank'
      if (aType === 'Blank') return ''
      const subNode = SVG_DICTIONARY['ACCESSORIES']?.[aType]
      return renderSvgNode(subNode, uid, options, childrenHtml)
    }

    case 'BackdropColor': {
      const defaultColor = resolvedProps.defaultColor || 'Blue01'
      const val = options.backdropColor || defaultColor
      const colorVal = backdropColorPalette.get(val) || backdropColorPalette.get('Blue01') || '#000000'
      const resolvedColor = colorVal.replace(/{uid}/g, uid)
      return `<g id="${uid}-BackdropColor/${val}" mask="url(#${uid}-Backdrop-Color-Mask)" fill="${resolvedColor}">
        <rect id="${uid}-🖍Color" x="0" y="0" width="280" height="280" />
      </g>`
    }

    case 'ClotheColor':
    case 'Colors': {
      const val = options.clotheColor || 'Gray01'
      const colorVal = clotheColorPalette.get(val) || clotheColorPalette.get('Gray01') || '#000000'
      const resolvedColor = colorVal.replace(/{uid}/g, uid)
      return `<g id="${uid}-ClotheColor/${val}" mask="url(#${uid}-Clothing-Color-Mask)" fillRule="evenodd" fill="${resolvedColor}">
        <rect id="${uid}-🖍Color" x="0" y="0" width="264" height="110" />
      </g>`
    }

    case 'HatColor': {
      const val = options.hatColor || 'Black'
      const colorVal = hatColorPalette.get(val) || hatColorPalette.get('Black') || '#000000'
      const resolvedColor = colorVal.replace(/{uid}/g, uid)
      return `<g id="${uid}-HatColor/${val}" mask="url(#${uid}-Hat-Color-Mask)" fillRule="evenodd" fill="${resolvedColor}">
        <rect id="${uid}-🖍Color" x="0" y="0" width="264" height="280" />
      </g>`
    }

    case 'Skin': {
      const val = options.skinColor || 'Tanned'
      const colorVal = skinColorPalette.get(val) || skinColorPalette.get('Tanned') || '#000000'
      const resolvedColor = colorVal.replace(/{uid}/g, uid)
      return `<g id="${uid}-SkinColor/${val}" mask="url(#${uid}-Skin-Color-Mask)" fill="${resolvedColor}">
        <g transform="translate(0.000000, 0.000000)" id="Color">
          <rect x="0" y="0" width="264" height="280" />
        </g>
      </g>`
    }

    case 'Graphics': {
      const gType = options.graphicType || 'Bat'
      const subNode = SVG_DICTIONARY['CLOTHES']?.[gType]
      return renderSvgNode(subNode, uid, options, childrenHtml)
    }

    case 'FacialHairColor': {
      const val = options.facialHairColor || 'BrownDark'
      const colorVal = facialHairColorPalette.get(val) || facialHairColorPalette.get('BrownDark') || '#000000'
      const resolvedColor = colorVal.replace(/{uid}/g, uid)
      return `<g id="${uid}-FacialHairColor/${val}" mask="url(#${uid}-Facial-Hair-Mask)" fill="${resolvedColor}">
        <g transform="translate(-32.000000, 0.000000)" id="${uid}-Facial-Hair-Color">
          <rect x="0" y="0" width="264" height="244" />
        </g>
      </g>`
    }

    case 'text': {
      const txt = resolvedProps.text || ''
      if (txt.trim().startsWith('{/*') && txt.trim().endsWith('*/}')) {
        return ''
      }
      return txt
    }

    default: {
      const attrStr = Object.entries(resolvedProps)
        .map(([k, v]) => {
          let attrName = k
          if (k === 'fillRule') attrName = 'fill-rule'
          else if (k === 'strokeWidth') attrName = 'stroke-width'
          else if (k === 'strokeDasharray') attrName = 'stroke-dasharray'
          else if (k === 'xlinkHref') attrName = 'xlink:href'
          else if (k === 'xmlSpace') attrName = 'xml:space'
          else if (k === 'fillOpacity') attrName = 'fill-opacity'
          else if (k === 'strokeLinecap') attrName = 'stroke-linecap'
          else if (k === 'strokeLinejoin') attrName = 'stroke-linejoin'

          if (k === 'style') {
            if (typeof v === 'object' && v !== null) {
              const styleStr = Object.entries(v)
                .map(([sK, sV]) => {
                  const kebabK = sK.replace(/([A-Z])/g, '-$1').toLowerCase()
                  return `${kebabK}: ${sV}`
                })
                .join('; ')
              return `style="${styleStr}"`
            } else {
              return `style="${v}"`
            }
          }

          return `${attrName}="${String(v).replace(/"/g, '&quot;')}"`
        })
        .join(' ')

      const innerChildrenHtml = (nodeChildren || []).map(child => renderSvgNode(child, uid, options, childrenHtml)).join('')

      const spacer = attrStr ? ' ' : ''
      return `<${type}${spacer}${attrStr}>${innerChildrenHtml}</${type}>`
    }
  }
}
