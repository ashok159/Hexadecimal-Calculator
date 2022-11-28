import '../styles/Input.css';

//Input component that displays the input of the calculator
//and the result of the calculation
const Input = ({input, result}) => {
    return <div className="Input-wrapper">
        <div className="result">
            <h1>{result}</h1>
        </div>
        <div className="input">
            <h3>{input}</h3> 
        </div>
    </div>;
}

export default Input;