import { createContext } from 'react'

import { useDarkMode } from 'hooks/use-dark-mode'

export const ThemeStateContext = createContext()
export const ThemeDispatchContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={toggleTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

export default ThemeContextProvider
