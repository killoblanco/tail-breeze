import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

export const typographyBase = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  h1: {
    fontSize: '6rem',
    fontWeight: api.theme('fontWeight.light'),
    letterSpacing: '-0.01562em',
    lineHeight: '1.167',
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: api.theme('fontWeight.light'),
    letterSpacing: '-0.00833em',
    lineHeight: '1.2',
  },
  h3: {
    fontSize: '3rem',
    fontWeight: api.theme('fontWeight.normal'),
    letterSpacing: '0',
    lineHeight: '1.167',
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: api.theme('fontWeight.normal'),
    letterSpacing: '0.00735em',
    lineHeight: '1.235',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: api.theme('fontWeight.normal'),
    letterSpacing: '0',
    lineHeight: '1.334',
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: api.theme('fontWeight.medium'),
    letterSpacing: '0.0075em',
    lineHeight: '1.6',
  },
  p: {
    fontSize: '1rem',
    fontWeight: api.theme('fontWeight.normal'),
    letterSpacing: '0.00938em',
    lineHeight: '1.5',
  },
})
