import plugin from 'tailwindcss/plugin'
import extendTheme from './theme'
import { type Options } from './options'
import { extendLayers } from './layers'


const TailBreeze = plugin.withOptions<Options>(extendLayers, extendTheme)

export default TailBreeze
