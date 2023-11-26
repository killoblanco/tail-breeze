import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';
import { buttonComponents } from './button';
import { typographyComponents } from './typography';

export const componentsLayers = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  ...buttonComponents(options, api),
  ...typographyComponents(options, api),
})
