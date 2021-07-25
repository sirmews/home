import { useState, useContext, createContext } from 'react'

const AppContext = createContext();

// Wrap our context object around any components that need it
const ContextWrapper = ({children}) => {
  // this is shared amongst all components

  const [darkMode, setDarkMode] = useState(true);

  const state = {
    darkMode,
    setDarkMode,
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

// This is for the top-level component, providing `state`
// and `actions`. (Same function as in the examples above.)
const useAppState = () => {
  // ...
}

// Sub-components can use this function. It will pick up the
// `state` and `actions` given by useAppState() higher in the
// component tree.
const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, useAppContext, ContextWrapper }