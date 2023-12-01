import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';
import { alertComponents } from './alert';
import { appBarComponents } from './app-bar';
import { avatarComponents } from './avatar';
import { badgeComponents } from './badge';
import { buttonComponents } from './button';
import { cardComponents } from './cards';
import { dividerComponents } from './divider';
import { typographyComponents } from './typography';

export const componentsLayers = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  ...appBarComponents(options, api),
  ...alertComponents(options, api),
  ...avatarComponents(options, api),
  ...buttonComponents(options, api),
  ...badgeComponents(options, api),
  ...cardComponents(options, api),
  ...dividerComponents(options, api),
  ...typographyComponents(options, api),
})
