import PropTypes from "prop-types"
import { useTheme } from "../contexts/ThemeContext"

const Button = ({ value, onClick }) => {
  const { theme } = useTheme()
  const isOperator = ["+", "-", "*", "/", "="].includes(value)
  const isClear = value === "C"

  const getButtonStyle = () => {
    if (isOperator) {
      return theme === "dark"
        ? "bg-orange-600 text-white"
        : theme === "summer"
          ? "bg-pink-500 text-white"
          : "bg-orange-500 text-white"
    }
    if (isClear) {
      return theme === "dark"
        ? "bg-red-600 text-white"
        : theme === "summer"
          ? "bg-red-400 text-white"
          : "bg-red-500 text-white"
    }
    return theme === "dark"
      ? "bg-gray-600 text-white"
      : theme === "summer"
        ? "bg-blue-200 text-blue-900"
        : "bg-gray-300 text-gray-800"
  }

  return (
    <button
      className={`p-6 text-2xl font-bold rounded-lg transition-colors duration-300 ease-in-out ${getButtonStyle()} hover:opacity-80`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button

