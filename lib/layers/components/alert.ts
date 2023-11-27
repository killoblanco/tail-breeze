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
    alignContent: 'start',
    alignItems: 'center',
    borderRadius: api.theme('borderRadius.md'),
    display: 'grid',
    gap: api.theme('spacing.4'),
    gridAutoFlow: 'row',
    justifyItems: 'center',
    padding: api.theme('spacing.4'),
    textAlign: 'center',
    width: '100%',
    ...colorVariant('neutral', api),
    [`@media (min-width: ${api.theme('screens.sm')})`]: {
      gridAutoFlow: 'column',
      gridTemplateColumns: 'auto minmax(auto, 1fr)',
      justifyItems: 'start',
      textAlign: 'start',
    }
  },
  ...['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'].reduce(
    (acc, variant) => ({
      ...acc,
      [`.alert-${variant}`]: colorVariant(variant, api)
    }), {}),
})
