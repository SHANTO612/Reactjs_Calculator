export const evaluate = (a, b, operator) => {
    const num1 = Number.parseFloat(a)
    const num2 = Number.parseFloat(b)
  
    switch (operator) {
      case "+":
        return num1 + num2
      case "-":
        return num1 - num2
      case "*":
        return num1 * num2
      case "/":
        if (num2 === 0) {
          //throw new Error("Division by zero")
            return "Division by zero error"
        }
        return num1 / num2
      default:
        throw new Error("Invalid operator")
    }
  }
  
  
