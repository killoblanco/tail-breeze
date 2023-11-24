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
        [key]: [0, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 100]
          .reduce((acc, shade) => ({
            ...acc,
            [shade]: hexFromArgb(palette.tone(shade))
          }), {})
      }
    }, {})
}
