const calculator = document.querySelector(".calculator")
const display = calculator.querySelector('.displayCalc')
const keys = calculator.querySelector(".Calculator_keys")

keys.addEventListener('click',event => {
    const keyselect = event.target
    const keyvalue = keyselect.textContent
    const displayValue = display.textContent
    const type  = keyselect.dataset.type
    const  previousKeyType  = calculator.dataset.previousKeyType
    if(!event.target.closest('button')) return

    if(type === 'key'){
        if(keyvalue === 'C'){
            display.textContent = '0'
        }
        else if(displayValue == '0'|| previousKeyType === 'operator'|| previousKeyType ==='equal'){
            display.textContent = keyvalue
        }
        else{
            display.textContent = displayValue + keyvalue
        }
    }
    else if(type === 'operator'){
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(Element => {Element.dataset.state = ''})
        keyselect.dataset.state = 'select'

       calculator.dataset.operator = keyselect.className
       calculator.dataset.firstnumber = displayValue

    }
    else if(type ==='equal'){
        const operatorUse = calculator.dataset.operator
        const firstnumber = parseFloat(calculator.dataset.firstnumber)
        const secondnumber = parseFloat(displayValue)


        let result = calculate(firstnumber , operatorUse, secondnumber)
        display.textContent = result 
    }



    calculator.dataset.previousKeyType = type
})
function calculate(num1 , operatorUse , num2){
    
    if(operatorUse === 'minus'){
        return num1 - num2
    }
    else if(operatorUse === 'plus'){
        return num1 + num2
    }
    else if(operatorUse === 'multiply'){
        return num1 * num2
    }
    else if(operatorUse === 'divide'){
        console.log(num2/num1)
        return num2 / num1
    }
}