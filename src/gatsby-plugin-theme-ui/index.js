import { base } from '@theme-ui/presets'
import { merge } from 'theme-ui'

import { breakpoints } from './breakpoints'


const theme = merge(base, {
  breakpoints,
  fonts: {
    body:
      'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  styles: {
    root: {
      fontFamily: `heading`,
      lineHeight: `body`,
      fontWeight: `body`,
      h1: {
        lineHeight: `heading`,
      },
    },
    h1: {
      lineHeight: `heading`,
    },
  },
  sizes: {
    container: breakpoints.xl,
  },
})

export default theme