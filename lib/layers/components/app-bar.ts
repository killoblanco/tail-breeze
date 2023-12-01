import { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

export const appBarComponents = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  '.btm-app-bar': {
    alignItems: 'center',
    backgroundColor: api.theme('colors.neutral.95'),
    display: 'flex',
    gap: api.theme('spacing.2'),
    justifyContent: 'space-between',
    padding: api.theme('spacing.4'),
    width: '100%',
    '[data-theme="dark"] &': {
      backgroundColor: api.theme('colors.neutral.10'),
    },
  },
  '.app-bar': {
    alignItems: 'center',
    backgroundColor: api.theme('colors.neutral.95'),
    display: 'flex',
    gap: api.theme('spacing.2'),
    padding: `${api.theme('spacing.2')} ${api.theme('spacing.4')}`,
    width: '100%',
    '[data-theme="dark"] &': {
      backgroundColor: api.theme('colors.neutral.10'),
    },
  }
})
