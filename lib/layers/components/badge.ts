import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

const colorVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  color: api.theme(`colors.${color}.90`),
  backgroundColor: api.theme(`colors.${color}.40`),
  '[data-theme="dark"] &': {
    backgroundColor: api.theme(`colors.${color}.80`),
    color: api.theme(`colors.${color}.20`),
  }
})

const tonalVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  backgroundColor: api.theme(`colors.${color}.90`),
  color: api.theme(`colors.${color}.10`),
  '[data-theme="dark"] &': {
    backgroundColor: api.theme(`colors.${color}.30`),
    color: api.theme(`colors.${color}.90`),
  }
})

const outlinedVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  backgroundColor: 'transparent',
  border: `1px solid ${api.theme(`colors.${color}.50`)}`,
  color: api.theme(`colors.${color}.40`),
  '[data-theme="dark"] &': {
    backgroundColor: 'transparent',
    color: api.theme(`colors.${color}.80`),
  }
})

export const badgeComponents = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  '.badge': {
    ...colorVariant('neutral', api),
    alignItems: 'center',
    borderRadius: api.theme('borderRadius.full'),
    display: 'grid',
    fontSize: api.theme('fontSize.xs'),
    fontWeight: api.theme('fontWeight.medium'),
    gridAutoColumns: 'auto',
    gridAutoFlow: 'column',
    gridTemplateRows: 'auto',
    gap: api.theme('spacing.1'),
    letterSpacing: api.theme('letterSpacing.wide'),
    lineHeight: api.theme('lineHeight.4'),
    padding: `${api.theme('spacing[0.5]')} ${api.theme('spacing[1.5]')}`,
    '&:empty': {
      display: 'inline-block',
      height: api.theme('spacing[1.5]'),
      padding: '0',
      width: api.theme('spacing[1.5]'),
    },
  },
  '.badge-tonal': tonalVariant('neutral', api),
  '.badge-outlined': outlinedVariant('neutral', api),
  ...['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'].reduce(
    (acc, variant) => ({
      ...acc,
      [`.badge-${variant}`]: colorVariant(variant, api),
      [`.badge-tonal-${variant}`]: tonalVariant(variant, api),
      [`.badge-outlined-${variant}`]: outlinedVariant(variant, api),
    }),
    {}),
})
