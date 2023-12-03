import { useDarkModeStore } from '../layouts/scaffold/store/dark-mode';

class ThemeToggle extends HTMLElement {
  constructor() {
    super();

    const styles = document.createElement('style');
    styles.textContent = `
      :host {
        cursor: pointer;
      }
    `;

    const preffersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (preffersDarkMode) useDarkModeStore.setState({ mode: 'dark' })

    const shadow = this.attachShadow({ mode: 'closed' });

    const iconify = document.createElement('iconify-icon');
    iconify.setAttribute('width', '24');
    iconify.setAttribute('height', '24');

    iconify.setAttribute(
      'icon',
      useDarkModeStore.getState().mode === 'dark'
        ? 'tabler:sun'
        : 'tabler:moon-stars'
    );

    shadow.appendChild(styles);
    shadow.appendChild(iconify);

    useDarkModeStore.subscribe(({ mode }) => {
      const icon = shadow.querySelector('iconify-icon')!;

      icon.setAttribute(
        'icon',
        mode === 'dark' ? 'tabler:sun' : 'tabler:moon-stars'
      );
    })

    this.addEventListener('click', () => {
      const { mode, setMode } = useDarkModeStore.getState();

      setMode(mode === 'dark' ? 'light' : 'dark');
    });
  }
}

customElements.define('theme-toggle', ThemeToggle);

