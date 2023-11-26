import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';
import { typographyComponents } from './typography';

export const componentsLayers = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  ...typographyComponents(options, api),
})
