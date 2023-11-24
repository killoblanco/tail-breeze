import { Config } from 'tailwindcss/types/config';
import defaultOptions from '../options';
import colors from './colors';

export default function extendTheme (options = defaultOptions): Partial<Config> {
  return {
    theme: {
      extend: {
        colors: colors({ ...defaultOptions.colors, ...options.colors })
      }
    }
  }
}
