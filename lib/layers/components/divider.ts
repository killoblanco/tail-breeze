import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

const colorVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  '&::before': {
    backgroundColor: api.theme(`colors.${color}.80`),
  },
  '&::after': {
    backgroundColor: api.theme(`colors.${color}.80`),
  },
  '[data-theme="dark"] &': {
    '&::before': {
      backgroundColor: api.theme(`colors.${color}.30`),
    },
    '&::after': {
      backgroundColor: api.theme(`colors.${color}.30`),
    },
  },
})

export const dividerComponents = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  '.divider': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    ...colorVariant('neutral', api),
    '&:not(:empty)': {
      gap: api.theme('spacing.4'),
    },
    '&::before': {
      content: '""',
      height: '1px',
      width: '100%',
    },
    '&::after': {
      content: '""',
      height: '1px',
      width: '100%',
    },
  },
})
