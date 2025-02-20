import PropTypes from "prop-types"
import { useTheme } from "../contexts/ThemeContext"

const Display = ({ value }) => {
  const { theme } = useTheme()

  return (
    <div
      className={`p-6 text-right text-4xl font-bold rounded-lg transition-colors duration-500 ease-in-out ${
        theme === "dark"
          ? "bg-gray-700 text-white"
          : theme === "summer"
            ? "bg-blue-100 text-blue-900"
            : "bg-gray-200 text-gray-900"
      }`}
    >
      {value}
    </div>
  )
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Display

