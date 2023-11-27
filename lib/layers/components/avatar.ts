import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

export const avatarComponents = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  '.avatar': {
    display: 'inline-flex',
    position: 'relative',
    '& > div': {
      aspectRatio: '1 / 1',
      display: 'block',
      overflow: 'hidden',
    },
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    }
  },
  '.avatar-placeholder': {
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--_body-bg)',
    }
  },
  '.avatar-group': {
    display: 'flex',
    overflow: 'hidden',
    ':where(.avatar)': {
      borderRadius: '50%',
      border: '4px solid',
      borderColor: 'var(--_body-bg)',
      overflow: 'hidden',
    }
  }
})
