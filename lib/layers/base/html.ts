import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

export const htmlBase = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  body: {
    '--_body-bg': `var(--body-bg, ${api.theme('colors.neutral.98')})`,
    '--_body-color': `var(--body-color, ${api.theme('colors.neutral.2')})`,
    backgroundColor: 'var(--_body-bg)',
    color: 'var(--_body-color)',
    fontSmoothing: 'antialiased',
    '&[data-theme="dark"]': {
      '--body-bg': api.theme('colors.neutral.2'),
      '--body-color': api.theme('colors.neutral.98'),
    },
  }
})
