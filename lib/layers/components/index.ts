import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';
import { alertComponents } from './alert';
import { buttonComponents } from './button';
import { typographyComponents } from './typography';

export const componentsLayers = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  ...alertComponents(options, api),
  ...buttonComponents(options, api),
  ...typographyComponents(options, api),
})
