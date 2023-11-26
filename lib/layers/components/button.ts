import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';
import { typographyComponents } from './typography';

const colorVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  backgroundColor: api.theme(`colors.${color}.40`),
  color: api.theme('colors.neutral.100'),
  '&:hover': {
    backgroundColor: api.theme(`colors.${color}.48`),
  },
  '&:active, &:focus': {
    backgroundColor: api.theme(`colors.${color}.52`),
  },
  '&:disabled': {
    backgroundColor: `${api.theme(`colors.${color}.10`)}1F`,
    color: `${api.theme(`colors.${color}.10`)}61`,
  },
})

const tonalVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  backgroundColor: api.theme(`colors.${color}.90`),
  color: api.theme(`colors.${color}.10`),
  '&:hover': {
    backgroundColor: api.theme(`colors.${color}.92`),
  },
  '&:active, &:focus': {
    backgroundColor: api.theme(`colors.${color}.94`),
  },
  '&:disabled': {
    backgroundColor: `${api.theme(`colors.${color}.90`)}1F`,
    color: `${api.theme(`colors.${color}.10`)}61`,
  },
})

const outlinedVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  backgroundColor: api.theme('colors.neutral.98'),
  border: `1px solid ${api.theme('colors.neutral.50')}`,
  color: api.theme(`colors.${color}.40`),
  '&:hover': {
    backgroundColor: `${api.theme(`colors.${color}.40`)}14`,
    border: `1px solid ${api.theme(`colors.${color}.40`)}`,
  },
  '&:active, &:focus': {
    backgroundColor: `${api.theme(`colors.${color}.40`)}1F`,
    border: `1px solid ${api.theme(`colors.${color}.40`)}`,
  },
  '&:disabled': {
    border: `1px solid ${api.theme(`colors.${color}.10`)}1F`,
    color: `${api.theme(`colors.${color}.40`)}61`,
  },
})

const textVariant = (color: string, api: PluginAPI): CSSRuleObject => ({
  backgroundColor: api.theme('colors.neutral.98'),
  color: api.theme(`colors.${color}.40`),
  '&:hover': {
    backgroundColor: `${api.theme(`colors.${color}.40`)}14`,
  },
  '&:active, &:focus': {
    backgroundColor: `${api.theme(`colors.${color}.40`)}1F`,
  },
  '&:disabled': {
    color: `${api.theme(`colors.${color}.40`)}61`,
  },
})

export const buttonComponents = (options = defaultOptions, api: PluginAPI): CSSRuleObject => {
  const textStyles = typographyComponents(options, api)['.text-button'] as CSSRuleObject;

  return ({
    '.btn': {
      ...textStyles,
      ...colorVariant('neutral', api),
      alignItems: 'center',
      borderRadius: api.theme('borderRadius.md'),
      display: 'inline-flex',
      gap: api.theme('spacing.2'),
      justifyContent: 'center',
      padding: `${api.theme('spacing.2')} ${api.theme('spacing.4')}`,
      transitionProperty: 'all',
      transitionDuration: api.theme('transitionDuration.150'),
      transitionTimingFunction: api.theme('transitionTimingFunction.standard'),
      '&:disabled': {
        pointerEvents: 'none',
      },
    },
    '.btn-tonal': tonalVariant('neutral', api),
    '.btn-outlined': outlinedVariant('neutral', api),
    '.btn-text': textVariant('neutral', api),
    ...['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'].reduce(
      (acc, variant) => ({
        ...acc,
        [`.btn-${variant}`]: colorVariant(variant, api),
        [`.btn-tonal-${variant}`]: tonalVariant(variant, api),
        [`.btn-outlined-${variant}`]: outlinedVariant(variant, api),
        [`.btn-text-${variant}`]: textVariant(variant, api),
      }),
      {}),
  })
}
