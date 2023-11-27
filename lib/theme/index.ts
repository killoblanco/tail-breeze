import { Config } from 'tailwindcss/types/config';
import defaultOptions from '../options';
import colors from './colors';
import boxShadow from './shadows';
import { motion } from './motion';

export default function extendTheme (options = defaultOptions): Partial<Config> {
  return {
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
      extend: {
        boxShadow: boxShadow(),
        colors: colors({ ...defaultOptions.colors, ...options.colors }),
        ...motion
      }
    }
  }
}
