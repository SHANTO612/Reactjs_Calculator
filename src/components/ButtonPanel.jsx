import PropTypes from "prop-types"
import Button from "./Button"

const ButtonPanel = ({ onButtonClick }) => {
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"]

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {buttons.map((button) => (
        <Button key={button} value={button} onClick={() => onButtonClick(button)} />
      ))}
    </div>
  )
}

ButtonPanel.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
}

export default ButtonPanel

