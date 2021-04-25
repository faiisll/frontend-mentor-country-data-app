import {createContext} from 'react';

export const Context = createContext({
    themeMode: "light",
    setThemeMode: () => {},
    filter: "all",
    setFilter: () => {},
  });