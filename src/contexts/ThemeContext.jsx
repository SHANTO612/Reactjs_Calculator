/* eslint-disable react-refresh/only-export-components */
"use client"

import { createContext, useState, useContext } from "react"
import PropTypes from "prop-types"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useTheme = () => useContext(ThemeContext)

