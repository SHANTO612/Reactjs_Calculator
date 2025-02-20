"use client"

import { useState } from "react"
import Display from "./Display"
import ButtonPanel from "./ButtonPanel"
import { evaluate } from "../utils/math"
import { useTheme } from "../contexts/ThemeContext"

const Calculator = () => {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const { theme } = useTheme()

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("0")
      setPreviousValue(null)
      setOperator(null)
    } else if (value === "=") {
      if (previousValue && operator) {
        try {
          const result = evaluate(previousValue, display, operator)
          setDisplay(result.toString())
          setPreviousValue(null)
          setOperator(null)
        } catch (error) {
          setDisplay(error)
        }
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value)
      setPreviousValue(display)
      setDisplay("0")
    } else {
      setDisplay((prevDisplay) => {
        if (prevDisplay === "0" || prevDisplay === "Error") {
          return value
        } else {
          return prevDisplay + value
        }
      })
    }
  }

  return (
    <div
      className={`p-6 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out ${
        theme === "dark"
          ? "bg-gray-800"
          : theme === "summer"
            ? "bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg hover:scale-105"
            : "bg-white"
      }`}
    >
      <Display value={display} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  )
}

export default Calculator

