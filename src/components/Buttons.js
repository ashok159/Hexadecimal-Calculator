import '../styles/Buttons.css';

//Buttons component that displays the buttons of the calculator
const Button = ({ symbol, color, handleClick}) => {
    return <div 
    onClick={() => handleClick(symbol)}
    className="Button-wrapper" style={{backgroundColor: color}}>{symbol}</div>
}

export default Button;