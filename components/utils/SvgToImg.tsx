/**
 * Title: SvgToImg
 * Description:
 * Filename: SvgToImg.tsx
 * Path: /components/utils/SvgToImg.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 27, 2023
 *
 */

const SvgToImg = (settings: any) => {
  /**
   * Simple function that converts a plain SVG string or SVG DOM Node into an image with custom dimensions.
   *
   * @param {Object} settings The configuration object to override the default settings.
   * @see https://ourcodeworld.com/articles/read/1456/how-to-convert-a-plain-svg-string-or-svg-node-to-an-image-png-or-jpeg-in-the-browser-with-javascript
   * @returns {Promise}
   */
  // eslint-disable-next-line no-underscore-dangle
  const _settings = {
    svg: null,
    // Usually all SVG have transparency, so PNG is the way to go by default
    mimetype: 'image/png',
    quality: 0.92,
    width: 'auto',
    height: 'auto',
    outputFormat: 'base64',
  }

  // Override default settings
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in settings) {
    _settings[key] = settings[key]
  }

  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let svgNode: any

    // Create SVG Node if a plain string has been provided
    if (typeof _settings.svg === 'string') {
      // Create a non-visible node to render the SVG string
      const SVGContainer = document.createElement('div')
      SVGContainer.style.display = 'none'
      SVGContainer.innerHTML = _settings.svg
      svgNode = SVGContainer.firstElementChild
    } else {
      svgNode = _settings.svg
    }

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    const svgXml = new XMLSerializer().serializeToString(svgNode)
    const svgBase64 = `data:image/svg+xml;base64,${btoa(svgXml)}`

    const image = new Image()

    image.onload = function () {
      let finalWidth
      let finalHeight

      // Calculate width if set to auto and the height is specified (to preserve aspect ratio)
      if (_settings.width === 'auto' && _settings.height !== 'auto') {
        finalWidth = (this.width / this.height) * _settings.height
        // Use image original width
      } else if (_settings.width === 'auto') {
        finalWidth = this.naturalWidth
        // Use custom width
      } else {
        finalWidth = _settings.width
      }

      // Calculate height if set to auto and the width is specified (to preserve aspect ratio)
      if (_settings.height === 'auto' && _settings.width !== 'auto') {
        finalHeight = (this.height / this.width) * _settings.width
        // Use image original height
      } else if (_settings.height === 'auto') {
        finalHeight = this.naturalHeight
        // Use custom height
      } else {
        finalHeight = _settings.height
      }

      // Define the canvas intrinsic size
      canvas.width = finalWidth
      canvas.height = finalHeight

      // Render image in the canvas
      context.drawImage(this, 0, 0, finalWidth, finalHeight)

      if (_settings.outputFormat === 'blob') {
        // Fullfil and Return the Blob image
        canvas.toBlob(
          (blob) => {
            resolve(blob)
          },
          _settings.mimetype,
          _settings.quality
        )
      } else {
        // Fullfil and Return the Base64 image
        resolve(canvas.toDataURL(_settings.mimetype, _settings.quality))
      }
    }

    // Load the SVG in Base64 to the image
    image.src = svgBase64
  })
}

export default SvgToImg
