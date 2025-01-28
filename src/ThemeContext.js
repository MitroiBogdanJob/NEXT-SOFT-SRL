import React, { createContext, useState, useEffect } from 'react';

// Creează contextul pentru temă
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Setările temei
  const defaultTheme = {
    darkSchemeBackgroundColor: "#181a1b",
    darkSchemeTextColor: "#e8e6e3",
    lightSchemeBackgroundColor: "#dcdad7",
    lightSchemeTextColor: "#181a1b",
  };

  // Folosește useState pentru a stoca tema activă
  const [theme, setTheme] = useState('light'); // Poți începe cu tema light
  const [themeStyles, setThemeStyles] = useState({
    backgroundColor: defaultTheme.lightSchemeBackgroundColor,
    textColor: defaultTheme.lightSchemeTextColor,
  });

  // Setează tema la încărcarea paginii
  useEffect(() => {
    if (theme === 'dark') {
      setThemeStyles({
        backgroundColor: defaultTheme.darkSchemeBackgroundColor,
        textColor: defaultTheme.darkSchemeTextColor,
      });
    } else {
      setThemeStyles({
        backgroundColor: defaultTheme.lightSchemeBackgroundColor,
        textColor: defaultTheme.lightSchemeTextColor,
      });
    }
  }, [theme]);

  // Funcție pentru schimbarea temei
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
