import Calculator from "./components/Calculator"
import SummerBackground from "./components/SummerBackgroud"
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"
import { Sun, Moon, Umbrella } from "lucide-react"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="absolute top-4 right-4 flex space-x-2 z-10">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full ${theme === "light" ? "bg-yellow-200" : "bg-gray-200"}`}
      >
        <Sun size={24} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-600" : "bg-gray-200"}`}
      >
        <Moon size={24} />
      </button>
      <button
        onClick={() => setTheme("summer")}
        className={`p-2 rounded-full ${theme === "summer" ? "bg-blue-300" : "bg-gray-200"}`}
      >
        <Umbrella size={24} />
      </button>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent() {
  const { theme } = useTheme()

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-colors duration-500 ease-in-out ${
        theme === "dark" ? "bg-gray-900" : theme === "summer" ? "bg-transparent" : "bg-gray-100"
      }`}
    >
      {theme === "summer" && <SummerBackground />}
      <ThemeToggle />
      <Calculator />
    </div>
  )
}

export default App

