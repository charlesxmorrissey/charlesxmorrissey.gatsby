import { css } from 'styled-components'

// Global breakpoint sizes.
const sizes = {
  xlarge: 1170,
  large: 1025,
  medium: 1000,
  small: 600,
}

/**
 * Iterates through the sizes and creates a media template.
 */
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16

  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `

  return accumulator
}, {})

/**
 * Convert pixel to rem units.
 * @param {number} px The unitless number to convert.
 * @return {string} The rem unit value.
 */
export const rem = (px) => `${px / 16}rem`
