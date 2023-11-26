const timing = Array.from({ length: 17 }, (_, idx) => idx * 50).reduce((acc, ms) => ({
  ...acc,
  [ms]: `${ms}ms`
}), {})

export const motion = {
  transitionDelay: timing,
  transitionDuration: timing,
  transitionTimingFunction: {
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
    'emphasized-in': 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    'emphasized-out': 'cubic-bezier(0.05, 0.7, 0.1, 1)',
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    'standard-in': 'cubic-bezier(0.3, 0, 1, 1)',
    'standard-out': 'cubic-bezier(0, 0, 0, 1)',
    legacy: 'cubic-bezier(0.4, 0, 0.2, 1)',
    'legacy-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'legacy-out': 'cubic-bezier(0, 0, 0.2, 1)'
  }
}
