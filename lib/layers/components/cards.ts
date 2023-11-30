import { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config';
import defaultOptions from '../../options';

export const cardComponents = (options = defaultOptions, api: PluginAPI): CSSRuleObject => ({
  '.card': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoFlow: 'row',
    gridAutoRows: 'auto',
    borderRadius: api.theme('borderRadius.md'),
    overflow: 'hidden',
    backgroundColor: api.theme('colors.neutral.96'),
    '[data-theme="dark"] &': {
      backgroundColor: api.theme('colors.neutral.10'),
    },
  },
  '.card-tonal': {
    backgroundColor: api.theme('colors.neutral.90'),
    '[data-theme="dark"] &': {
      backgroundColor: api.theme('colors.neutral.22'),
    }
  },
  '.card-outlined': {
    backgroundColor: 'transparent',
    border: `1px solid ${api.theme('colors.neutral.80')}`,
    '[data-theme="dark"] &': {
      backgroundColor: 'transparent',
      border: `1px solid ${api.theme('colors.neutral.30')}`,
    }
  },
  '.card-media-overlay': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    position: 'relative',
    '&:before': {
      content: '""',
      gridRow: '1',
      gridColumn: '1',
      zIndex: '1',
      opacity: '0.72',
      backgroundColor: api.theme('colors.neutral.98'),
      '[data-theme="dark"] &': {
        backgroundColor: api.theme('colors.neutral.2'),
      },
    },
    '& > *': {
      zIndex: '0',
      gridRow: '1',
      gridColumn: '1',
      objectFit: 'cover',
      height: 'fill-available',
    },
    '& .card-body': {
      zIndex: '2',
      gridRow: '1',
      gridColumn: '1',
    },
  },
  '.card-horizontal': {
    gridTemplateRows: '1fr',
    gridAutoFlow: 'column',
    gridAutoColumns: 'auto',
  },
  '.card-body': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoFlow: 'row',
    gridAutoRows: 'auto',
    gap: api.theme('spacing.2'),
    padding: api.theme('spacing.4'),
  },
  '.card-actions': {
    alignItems: 'center',
    display: 'inline-flex',
    gap: api.theme('spacing.4'),
    marginTop: api.theme('spacing.2')
  }
})
