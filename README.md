# React Calculator App with Animated Theme Modes

This is a simple calculator app built with React, Vite, and Tailwind CSS. It performs basic arithmetic operations and features multiple theme modes with smooth transitions and animations.

## Features

- Basic arithmetic operations
- Clear button to reset the calculator
- Responsive design using Tailwind CSS
- Error handling for division by zero
- Multiple theme modes: Light, Dark, and Summer
- Smooth transitions between theme modes
- Animated summer mode with floating clouds and pulsing sun

## Project Structure

The project follows a modular structure:

- `src/App.jsx`: Main application component with theme toggle
- `src/components/`: Contains all React components
  - `Calculator.jsx`: Main calculator component
  - `Display.jsx`: Display component for showing the current value
  - `ButtonPanel.jsx`: Component for rendering the button grid
  - `Button.jsx`: Individual button component
  - `SummerBackground.jsx`: Animated background for summer mode
- `src/contexts/`: Contains the ThemeContext for managing themes
- `src/utils/math.js`: Utility functions for arithmetic operations
- `src/index.css`: Custom CSS for animations and theme-specific styles

## Getting Started

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/react-calculator.git
   cd react-calculator
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

4. Open your browser and navigate to `http://localhost:5173` to see the app running.

## Building for Production

To create a production build, run:

\`\`\`
npm run build
\`\`\`

The built files will be in the `dist` directory.

## Testing

To run tests (once implemented), use:

\`\`\`
npm test
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
