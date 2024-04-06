import {atom} from 'recoil';

// Detect user's preferred color scheme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = prefersDarkMode ? 'dark' : 'light';

export const themeState = atom({
  key: 'themeState',
  default: defaultTheme, 
});
