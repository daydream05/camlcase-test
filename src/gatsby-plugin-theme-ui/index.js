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
})

export default theme