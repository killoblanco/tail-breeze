import {
  TonalPalette,
  argbFromHex,
  hexFromArgb
} from '@material/material-color-utilities'
import { type Options } from '../options'

export default function colors (colors: Options['colors']) {
  return Object.entries(colors)
    .reduce((acc, [key, value]) => {
      const palette = TonalPalette.fromInt(argbFromHex(value))

      return {
        ...acc,
        [key]: Array.from({ length: 101 }, (_, i) => i)
          .reduce((acc, shade) => ({
            ...acc,
            [shade]: hexFromArgb(palette.tone(shade))
          }), {})
      }
    }, {})
}
