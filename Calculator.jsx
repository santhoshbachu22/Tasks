import { useState } from 'react';

function Calculator(){
    const [display, setDisplay] = useState("0")
    const [firstNumber, setFirstNumber] = useState(null)
    const [operator, setOperator] = useState(null)

    const handleDigitClick = (digit) => {
        if(display === "0"){
            setDisplay(digit)
        } else {
            setDisplay(display + digit)
        }
    }

    const handleOperatorClick = (selectedOperator) => {
        setFirstNumber(display)
        setOperator(selectedOperator)
        setDisplay("0")
    }

    const handleEqualsClick = () => {
        const num1 = parseFloat(firstNumber)
        const num2 = parseFloat(display)
        let result = 0

        if(operator === "+"){
            result = num1 + num2
        } else if(operator === "-"){
            result = num1 - num2
        } else if(operator === "*"){
            result = num1 * num2
        } else if(operator === "/"){
            result = num1 / num2
        }

        setDisplay(result.toString())
        setFirstNumber(null)
        setOperator(null)
    }

    const handleClearClick = () => {
        setDisplay("0")
        setFirstNumber(null)
        setOperator(null)
    }

    return(
        <div>
            <div className='bg-gray-800 text-white text-right p-4 text-2xl'>
                {display}
            </div>

            <div className='grid grid-cols-4 gap-2 mt-2'>
                <button onClick={() => handleDigitClick("7")}>7</button>
                <button onClick={() => handleDigitClick("8")}>8</button>
                <button onClick={() => handleDigitClick("9")}>9</button>
                <button onClick={() => handleOperatorClick("/")}>/</button>

                <button onClick={() => handleDigitClick("4")}>4</button>
                <button onClick={() => handleDigitClick("5")}>5</button>
                <button onClick={() => handleDigitClick("6")}>6</button>
                <button onClick={() => handleOperatorClick("*")}>*</button>

                <button onClick={() => handleDigitClick("1")}>1</button>
                <button onClick={() => handleDigitClick("2")}>2</button>
                <button onClick={() => handleDigitClick("3")}>3</button>
                <button onClick={() => handleOperatorClick("-")}>-</button>

                <button onClick={() => handleDigitClick("0")}>0</button>
                <button onClick={handleClearClick}>C</button>
                <button onClick={handleEqualsClick}>=</button>
                <button onClick={() => handleOperatorClick("+")}>+</button>
            </div>
        </div>
    );
}

export default Calculator;