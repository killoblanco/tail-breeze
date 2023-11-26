import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';
import { htmlBase } from './html';
import { typographyBase } from './typography';

export const baseLayers = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  ...htmlBase(options, api),
  ...typographyBase(options, api),
})
