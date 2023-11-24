import plugin from 'tailwindcss/plugin'
import extendTheme from './theme'
import { type Options } from './options'


const TailBreeze = plugin.withOptions<Options>(
  (options) => (api) => {
    console.log(api.theme('colors'))
  },
  extendTheme
)

export default TailBreeze
