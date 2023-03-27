import React, { createContext, useContext, useState } from 'react';
import light from '../global/theme/light';
import dark from '../global/theme/dark';

type ThemeModeTypes = 'light' | 'dark';

interface ThemeModeInput {
  children: React.ReactNode;
}

interface ThemeModeProps {
  themeMode: ThemeModeTypes;
  changeThemeMode: (aMode: ThemeModeTypes) => void;
  theme: typeof dark;
}

const ThemeModeContext = createContext({} as ThemeModeProps);

export const ThemeModeProvider: React.FC<ThemeModeInput> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeModeTypes>('dark');
  const theme = themeMode === 'dark' ? dark : light;

  const changeThemeMode = (aMode: ThemeModeTypes) => {
    setThemeMode(aMode);
  };
  return (
    <ThemeModeContext.Provider value={{ themeMode, changeThemeMode, theme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = (): ThemeModeProps => {
  const context = useContext(ThemeModeContext);
  return context;
};
