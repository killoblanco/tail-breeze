import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

const colorVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  '&::before': {
    content: '""',
    height: '1px',
    width: '100%',
    backgroundColor: api.theme(`colors.${color}.30`),
  },
  '&::after': {
    content: '""',
    height: '1px',
    width: '100%',
    backgroundColor: api.theme(`colors.${color}.30`),
  },
  '[data-theme="dark"] &': {
    '&::before': {
      content: '""',
      height: '1px',
      width: '100%',
      backgroundColor: api.theme(`colors.${color}.80`),
    },
    '&::after': {
      content: '""',
      height: '1px',
      width: '100%',
      backgroundColor: api.theme(`colors.${color}.80`),
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
  },
  '.divider-start::before': { display: 'none' },
  '.divider-end::after': { display: 'none' },
  '.divider-vertical': {
    flexDirection: 'column',
    '&::before': {
      height: '100%',
      width: '1px',
    },
    '&::after': {
      height: '100%',
      width: '1px',
    },
  },
  ...['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'].reduce(
    (acc, variant) => ({
      ...acc,
      [`.divider-${variant}`]: colorVariant(variant, api),
    }),
    {}),
})
