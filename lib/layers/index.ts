import { type PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../options';
import { baseLayers } from './base';
import { componentsLayers } from './components';

export const extendLayers = (options = defaultOptions) => (api: PluginAPI) => {
  console.log(api.theme('gap.2'))
  api.addBase(baseLayers(options, api))
  api.addComponents(componentsLayers(options, api))
}
