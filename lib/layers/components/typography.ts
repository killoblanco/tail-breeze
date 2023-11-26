import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

export const typographyComponents = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  '.text-subtitle-1': {
    fontWeight: api.theme('fontWeight.normal'),
    fontSize: '1rem',
    lineHeight: '1.75',
    letterSpacing: '0.00938em',
  },
  '.text-subtitle-2': {
    fontWeight: api.theme('fontWeight.medium'),
    fontSize: '0.875rem',
    lineHeight: '1.57',
    letterSpacing: '0.00714em',
  },
  '.text-body-2': {
    fontWeight: api.theme('fontWeight.normal'),
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0.01071em',
  },
  '.text-button': {
    fontWeight: api.theme('fontWeight.medium'),
    fontSize: '0.875rem',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
  },
  '.text-caption': {
    fontWeight: api.theme('fontWeight.normal'),
    fontSize: '0.75rem',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
  },
})
