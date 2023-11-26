import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

const colorVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  backgroundColor: api.theme(`colors.${color}.90`),
  color: api.theme(`colors.${color}.40`),
  '[data-theme="dark"] &': {
    backgroundColor: api.theme(`colors.${color}.22`),
    color: api.theme(`colors.${color}.80`),
  },
})

export const alertComponents = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  '.alert': {
    borderRadius: api.theme('borderRadius.md'),
    padding: api.theme('spacing.4'),
    ...colorVariant('neutral', api),
  },
  ...['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'].reduce(
    (acc, variant) => ({
      ...acc,
      [`.alert-${variant}`]: colorVariant(variant, api)
    }), {}),
})
